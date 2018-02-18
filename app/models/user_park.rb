class UserPark < ApplicationRecord
    has_many :users
    has_many :parks
end
