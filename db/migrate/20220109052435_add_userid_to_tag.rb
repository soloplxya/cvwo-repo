class AddUseridToTag < ActiveRecord::Migration[7.0]
  def change
    add_column :tags, :user_id, :integer
  end
end
