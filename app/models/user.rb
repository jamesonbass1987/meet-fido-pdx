class User < ApplicationRecord
    has_many :dogs
    belongs_to :neighborhood
end
