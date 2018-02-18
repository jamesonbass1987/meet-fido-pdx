class DogSerializer < ActiveModel::Serializer
    attributes :name, :breed, :age, :size, :description, :dog_images, :profile_image_url

    has_one :user, serializer: DogUserSerializer
end
