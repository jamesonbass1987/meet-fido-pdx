class UserDogSerializer < ActiveModel::Serializer
   attributes :name, :breed, :age, :size, :description, :profile_image_url, :dog_images
end
