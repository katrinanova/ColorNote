
class User < ActiveRecord::Base
  attr_reader :password

  validates :session_token, presence: true
  validates :email, uniqueness: true, presence: true
  validates :password, length: { in: 6..12, allow_nil: true }
  validates :password_digest, presence: { message: "Password can't be blank." }

  has_many :notebooks
  has_many :notes, through: :notebooks

  before_validation :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    print "auth hash"
    user = User.find_by(
           provider: auth_hash[:provider],
           uid: auth_hash[:uid])

    unless user
      if auth_hash[:provider] === "facebook"
        user = User.create!(
             provider: auth_hash[:provider],
             email: "notemail@e.com",
             uid: auth_hash[:uid],
             password_digest: SecureRandom::urlsafe_base64)
      else
        user = User.create!(
             provider: auth_hash[:provider],
             email: auth_hash[:info][:nickname], #bad solution
             uid: auth_hash[:uid],
             password_digest: SecureRandom::urlsafe_base64)
      end
    end

   user
 end

 # auth_hash[:info][:email]

  def self.generate_session_token
    SecureRandom::urlsafe_base64(32)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(maybe_password)
    BCrypt::Password.new(self.password_digest).is_password?(maybe_password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
