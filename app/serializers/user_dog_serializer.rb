class UserDogSerializer < ActiveModel::Serializer
   attributes :id, :name, :breed, :age, :size, :description, :profile_image_url, :dog_images
end
