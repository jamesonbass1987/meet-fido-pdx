class DogSerializer < ActiveModel::Serializer
    attributes :name, :breed, :age, :size, :description, :dog_images

    has_one :user, serializer: DogUserSerializer
end
