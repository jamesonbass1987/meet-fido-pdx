class Park < ApplicationRecord
    has_many :dogs, foreign_key: 'preferred_park_id'
end
