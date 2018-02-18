class AddImageUrlToParks < ActiveRecord::Migration[5.1]
  def change
    add_column :parks, :image_url, :string
  end
end
