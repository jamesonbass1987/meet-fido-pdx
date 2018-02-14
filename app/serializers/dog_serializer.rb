class DogSerializer < ActiveModel::Serializer
    attributes :name, :user, :breed, :temperament, :age, :size, :description, :preferred_park, :neighborhood, :dog_images


    belongs_to :user
    belongs_to :breed
    belongs_to :temperament
    belongs_to :age
    belongs_to :size
    belongs_to :neighborhood

    belongs_to :preferred_park, serializer: ParkSerializer
    has_many :dog_images

end
