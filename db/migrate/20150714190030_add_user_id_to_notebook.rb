class AddUserIdToNotebook < ActiveRecord::Migration
  def change
    add_column :notebooks, :user_id, :integer, null:false
    add_index :notebooks, :user_id
  end


end
