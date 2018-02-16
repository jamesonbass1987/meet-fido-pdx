class AddDefaultImageToDogImages < ActiveRecord::Migration[5.1]
  def change
    change_column :dog_images, :image_url, :string, default: 'https://imgur.com/6M8RDvc'
    change_column :dog_images, :image_alt, :string, default: 'MeetFidoPDX'
  end
end
