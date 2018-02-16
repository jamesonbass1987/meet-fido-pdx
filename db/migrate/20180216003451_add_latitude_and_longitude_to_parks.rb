class AddLatitudeAndLongitudeToParks < ActiveRecord::Migration[5.1]
  def change
    add_column :parks, :loc_latitude, :decimal
    add_column :parks, :loc_longitude, :decimal
  end
end
