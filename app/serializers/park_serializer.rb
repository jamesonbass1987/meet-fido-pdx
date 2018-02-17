class ParkSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :address_1, :address_2, :loc_latitude, :loc_longitude, :fenced, :hours_open, :hours_close

    has_many :dogs
end