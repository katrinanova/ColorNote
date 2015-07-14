class CreateNotebooks < ActiveRecord::Migration
  def change
    create_table :notebooks do |t|
      t.string :title, null: false

      t.timestamps null: false
    end

    add_index :notebooks, :title, unique: true
  end
end
