class User < ActiveRecord::Base
  attr_reader :password

  validates :session_token, presence: true
  validates :email, uniqueness: true, presence: true
  validates :password, length: { in: 6..12, allow_nil: true }
  validates :password_digest, presence: { message: "Password can't be blank." }

  has_many :notebooks

  before_validation :ensure_session_token

  def self.find_by_credentials(email, password)
    user_by_un = User.find_by_email(email)
    return nil unless user_by_un
    user_by_un.is_password?(password) ? user_by_un : nil
  end

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
