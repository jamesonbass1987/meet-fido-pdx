class DogSerializer < ActiveModel::Serializer
    attributes :name, :breed, :age, :size, :sex, :description, :user_id, :profile_image_url

    has_one :user, serializer: DogUserSerializer
end
