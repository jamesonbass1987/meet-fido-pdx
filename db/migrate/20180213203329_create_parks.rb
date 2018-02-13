class CreateParks < ActiveRecord::Migration[5.1]
  def change
    create_table :parks do |t|
      t.string :name
      t.text :description
      t.string :address_1
      t.string :address_2
      t.boolean :fenced
      t.time :hours_open
      t.time :hours_close
    end
  end
end
