class NeighborhoodSerializer < ActiveModel::Serializer
    attributes :name

    has_many :dogs
    has_many :users
end