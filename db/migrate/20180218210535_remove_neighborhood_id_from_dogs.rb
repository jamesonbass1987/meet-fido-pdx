class RemoveNeighborhoodIdFromDogs < ActiveRecord::Migration[5.1]
  def change
    remove_column :dogs, :neighborhood_id
  end
end
