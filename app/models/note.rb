class Note < ActiveRecord::Base
  validates :notebook_id, presence: true
  belongs_to :notebook
  has_many :note_uploads
  has_many :uploads, through: :note_uploads
end
