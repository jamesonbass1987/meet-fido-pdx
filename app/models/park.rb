class Park < ApplicationRecord
    has_many :dogs, foreign_key: 'preferred_park_id'

    has_many :user_parks
    has_many :users, through: :user_parks
end
