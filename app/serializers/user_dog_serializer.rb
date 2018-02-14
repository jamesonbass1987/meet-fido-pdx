class UserDogSerializer < ActiveModel::Serializer
   attributes :name, :breed, :age, :size, :description, :preferred_park, :neighborhood, :dog_images
end
