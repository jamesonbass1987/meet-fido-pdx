class ParkSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :address_1, :address_2, :fenced, :hours_open, :hours_close

    # has_many :dogs
end