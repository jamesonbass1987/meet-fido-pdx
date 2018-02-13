class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :profile_image_url, default: "https://i.imgur.com/jNNT4LE.jpg"
      t.integer :neighborhood_id
    end
  end
end
