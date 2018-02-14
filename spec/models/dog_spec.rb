require 'rails_helper'

describe Dog do
    before(:each) do
        @neighborhood = Neighborhood.create!(name: 'Alberta District')
        @breed = Breed.create!(name: 'Labrador Retriever')
        @age = Age.create(name: 'Puppy')
        @size = Size.create(name: 'Small')
        @user = User.create!(username: "testuser", password: "password", neighborhood: @neighborhood, email: 'test@email.com')
        @park = Park.create(name: "Alberta Park", description: 'description', fenced: true, hours_open: Time.new(1, 1, 1, 8).strftime("%I:%M%p"), hours_close: Time.new(1, 1, 1, 17).strftime("%I:%M%p"), address_1: 'test street', address_2: 'test apt #')

        @dog = Dog.create!(name: 'Fido',  neighborhood: @neighborhood,  description: 'dog', age: @age, size: @size, user: @user, breed: @breed)

    end

    it 'can be created' do
        expect(@dog).to be_valid
    end

    it 'can have many dog images as image urls' do
        @dog.dog_images.create(image_url: 'www.testimage.com/test', image_alt: 'Dog')
        @dog.dog_images.create(image_url: 'www.testimage.com/test', image_alt: 'Dog')

        expect(@dog.dog_images.count).to eq(2) 
    end

    it 'has a preferred park' do
        @dog.preferred_park = @park
        expect(@dog.preferred_park).to eq(@park)
    end
end