class NoteUploads < ActiveRecord::Base
  belongs_to :note
  belongs_to :upload
end
