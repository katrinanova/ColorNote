class Note < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:title, :body]

  validates :notebook_id, presence: true
  belongs_to :notebook
  has_many :note_uploads
  has_many :uploads, through: :note_uploads

end
