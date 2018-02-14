class UserSerializer < ActiveModel::Serializer
    attributes :username, :email, :profile_image_url, :neighborhood, :dogs

    has_many :dogs, serializer: UserDogSerializer
end
