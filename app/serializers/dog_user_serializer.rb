class DogUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_image_url
end
