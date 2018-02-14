class Dog < ApplicationRecord

    belongs_to :user
    belongs_to :breed
    belongs_to :age
    belongs_to :size
    belongs_to :neighborhood

    belongs_to :preferred_park, class_name: 'Park', optional: true
    has_many :dog_images, :dependent => :destroy


    validates :name, presence: true
    validates :description, length: {:maximum => 750}, presence: true

end
