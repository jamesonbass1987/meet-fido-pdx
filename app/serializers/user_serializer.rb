class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :email, :bio, :profile_image_url, :neighborhood, :dogs

    has_many :dogs, serializer: UserDogSerializer
    has_many :parks, serializer: UserParkSerializer

end
