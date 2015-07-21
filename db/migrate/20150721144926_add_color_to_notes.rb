class AddColorToNotes < ActiveRecord::Migration
  def change
    add_column :notes, :color, :string
    add_index :notes, :color
  end
end
