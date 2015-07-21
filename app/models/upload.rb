class Upload < ActiveRecord::Base
  has_attached_file :uploaded
  validates_attachment_content_type :uploaded, content_type: ["image/jpeg", "image/jpg", "image/png", "application/pdf","application/vnd.ms-excel",
             "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
             "application/msword",
             "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
             "text/plain"]
  has_many :note_uploads
  has_one :note, through: :note_uploads
end
