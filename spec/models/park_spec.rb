require 'rails_helper'

describe Park do
    before(:each) do
        @park = Park.create(name: "Alberta Park", description: 'description', fenced: true, hours_open: Time.new(1, 1, 1, 8).strftime("%I:%M%p"), hours_close: Time.new(1, 1, 1, 17).strftime("%I:%M%p"), address_1: 'test street', address_2: 'test apt #')
        @neighborhood = Neighborhood.create!(name: 'Alberta District')
        @breed = Breed.create!(name: 'Labrador Retriever')
        @age = Age.create(name: 'Puppy')
        @size = Size.create(name: 'Small')
        @user = User.create!(username: "testuser", password: "password", neighborhood: @neighborhood, email: 'test@email.com')
        @dog_1 = Dog.create!(name: 'Fido',  neighborhood: @neighborhood,  description: 'dog', age: @age, size: @size, user: @user, breed: @breed, preferred_park: @park )
        @dog_2 = Dog.create!(name: 'Fido',  neighborhood: @neighborhood,  description: 'dog',age: @age, size: @size, user: @user, breed: @breed, preferred_park: @park )

    end

    it 'can be created' do
        expect(@park).to be_valid
    end

    it 'can have many dogs via preferred parks' do
        expect(@park.dogs.count).to eq(2);
    end

end