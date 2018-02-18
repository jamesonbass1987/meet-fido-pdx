class RemovePreferredParkIdFromDogs < ActiveRecord::Migration[5.1]
  def change
      remove_column :dogs, :preferred_park_id
  end
end
