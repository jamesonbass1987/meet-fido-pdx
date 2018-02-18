class Park < ApplicationRecord
    has_many :user_parks
    has_many :users, through: :user_parks
end
