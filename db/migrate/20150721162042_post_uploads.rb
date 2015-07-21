class PostUploads < ActiveRecord::Migration
  def change
    create_table :post_uploads do |t|
      t.integer :post_id, null:false
      t.integer :upload_id, null:false

      t.timestamps null: false
    end

    add_index :post_uploads, :post_id
    add_index :post_uploads, :upload_id
  end
end
