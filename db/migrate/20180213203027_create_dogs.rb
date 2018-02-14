class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :user_id
      t.integer :breed_id
      t.integer :temperament_id
      t.integer :age_id
      t.integer :size_id
      t.text :description
      t.integer :preferred_park_id
      t.integer :neighborhood_id
    end
  end
end
