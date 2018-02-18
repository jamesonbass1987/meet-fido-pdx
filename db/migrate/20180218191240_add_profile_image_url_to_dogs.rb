class AddProfileImageUrlToDogs < ActiveRecord::Migration[5.1]
  def change
    add_column :dogs, :profile_image_url, :string
  end
end
