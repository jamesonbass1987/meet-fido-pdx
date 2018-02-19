class ParkSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :image_url, :address_1, :address_2, :loc_latitude, :loc_longitude, :fenced, :hours_open, :hours_close, :users

    
end