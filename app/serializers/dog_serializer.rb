class DogSerializer < ActiveModel::Serializer
    attributes :name, :breed, :age, :size, :description, :neighborhood, :dog_images

    has_one :user, serializer: DogUserSerializer
    has_one :preferred_park, serializer: ParkSerializer
end
