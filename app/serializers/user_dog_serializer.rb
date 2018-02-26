class UserDogSerializer < ActiveModel::Serializer
   attributes :id, :name, :breed, :age, :size, :sex, :description, :profile_image_url, :user_id
end
