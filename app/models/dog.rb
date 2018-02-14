class Dog < ApplicationRecord
    belongs_to :user
    belongs_to :breed
    belongs_to :temperament
    belongs_to :age
    belongs_to :size
    belongs_to :neighborhood

    has_many :dog_images, :dependent => :destroy

    validates :name, presence: true
    validates :description, length: {:maximum => 750}, presence: true

end
