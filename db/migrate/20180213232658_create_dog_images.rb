class CreateDogImages < ActiveRecord::Migration[5.1]
  def change
    create_table :dog_images do |t|
      t.string :image_url
      t.string :image_alt
      t.integer :dog_id
      t.timestamps
    end
  end
end
