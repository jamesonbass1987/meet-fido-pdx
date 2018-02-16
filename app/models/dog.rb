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


    def dog_images_attributes=(dog_images_attributes)

    #parse tag_attributes passed in as hash, checking for empties
    dog_images_attributes.values.each do |dog_image_attribute|
      if dog_image_attribute[:image_url].present?
        #initializes a new dog_image for dogs that haven't been persisted
        image = DogImage.find_or_initialize_by(image_url: dog_image_attribute[:image_url], image_alt: dog_image_attribute[:image_alt])
        if !self.dog_images.include?(image)
          self.dog_images << image
        end
      end
    end
  end
end
