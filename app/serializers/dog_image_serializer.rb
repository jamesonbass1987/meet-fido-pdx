class DogImageSerializer < ActiveModel::Serializer
    attributes :image_url, :image_alt, :dog_id

    belongs_to :dog
end