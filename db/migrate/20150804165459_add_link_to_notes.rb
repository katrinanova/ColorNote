class AddLinkToNotes < ActiveRecord::Migration
  def change
    add_column :notes, :link, :string, null: false
    add_index :notes, :link, unique: true
  end
end
