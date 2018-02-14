class DogSerializer < ActiveModel::Serializer
    attributes :name, :breed, :age, :size, :description, :preferred_park, :neighborhood, :dog_images

    has_one :user, serializer: DogUserSerializer
end
