class Upload < ActiveRecord::Base
  has_attached_file :uploaded
  has_many :note_uploads
  has_one :note, through: :note_uploads
end
