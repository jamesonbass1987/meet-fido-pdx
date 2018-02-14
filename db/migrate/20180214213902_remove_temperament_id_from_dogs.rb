class RemoveTemperamentIdFromDogs < ActiveRecord::Migration[5.1]
  def change
    remove_column :dogs, :temperament_id
  end
end
