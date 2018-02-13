class CreateTemperaments < ActiveRecord::Migration[5.1]
  def change
    create_table :temperaments do |t|
      t.string :name
      t.text :description
    end
  end
end
