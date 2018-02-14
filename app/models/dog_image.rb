class DogImage < ApplicationRecord
    belongs_to :dog

    validates :image_url, presence: true
end
