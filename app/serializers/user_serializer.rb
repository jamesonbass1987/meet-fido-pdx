class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :email, :bio, :profile_image_url, :neighborhood, :dogs, :auth_token

    has_many :dogs, serializer: UserDogSerializer
    has_many :parks, serializer: UserParkSerializer

    def auth_token
        if self.instance_options[:auth_token]
            self.instance_options[:auth_token]
        else
            nil
        end
    end
end
