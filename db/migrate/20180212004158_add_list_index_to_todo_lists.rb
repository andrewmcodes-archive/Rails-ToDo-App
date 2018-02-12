class AddListIndexToTodoLists < ActiveRecord::Migration[5.1]
  def change
    add_column :todo_lists, :todo_list_id, :integer
  end
end
