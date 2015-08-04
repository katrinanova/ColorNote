class Note < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:title, :body]

  validates :notebook_id, presence: true
  belongs_to :notebook
  has_many :note_uploads
  has_many :uploads, through: :note_uploads

  before_validation :ensure_link

  def ensure_link
    self.link ||= SecureRandom::urlsafe_base64
  end

end
