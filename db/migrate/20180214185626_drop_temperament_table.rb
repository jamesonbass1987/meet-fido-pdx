class DropTemperamentTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :temperaments
  end
end
