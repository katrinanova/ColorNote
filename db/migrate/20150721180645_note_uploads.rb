class NoteUploads < ActiveRecord::Migration
  def change
    create_table :note_uploads do |t|
      t.integer :note_id, null: false;
      t.integer :upload_id, null: false;

      t.timestamps null: false;
    end

    add_index :note_uploads, :note_id
    add_index :note_uploads, :upload_id
  end
end
