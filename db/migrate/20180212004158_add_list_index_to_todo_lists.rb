class AddListIndexToTodoLists < ActiveRecord::Migration[5.1]
  def change
    add_column :todo_list, :todo_list_id, :integer
  end
end
