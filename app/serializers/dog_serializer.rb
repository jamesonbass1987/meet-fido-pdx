class DogSerializer < ActiveModel::Serializer
    attributes :name, :user, :breed, :age, :size, :description, :preferred_park, :neighborhood, :dog_images
end

