class AddAttachmentUploadedToUploads < ActiveRecord::Migration
  def self.up
    change_table :uploads do |t|
      t.attachment :uploaded
    end
  end

  def self.down
    remove_attachment :uploads, :uploaded
  end
end
