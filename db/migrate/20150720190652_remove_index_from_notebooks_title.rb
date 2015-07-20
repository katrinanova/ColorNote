class RemoveIndexFromNotebooksTitle < ActiveRecord::Migration
  def change
    remove_index :notebooks, column: :title

    add_index :notebooks, [:title, :user_id], unique: true
  end
end
