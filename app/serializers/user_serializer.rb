class UserSerializer < ActiveModel::Serializer
    attributes :username, :email, :bio, :profile_image_url, :neighborhood, :dogs, :parks

    has_many :dogs, serializer: UserDogSerializer
    has_many :parks
end
