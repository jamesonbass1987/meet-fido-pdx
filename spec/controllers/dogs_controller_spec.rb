require 'rails_helper'
require "spec_helper"  

describe Api::V1::DogsController, :type => :api do

    before do 
        neighborhood = Neighborhood.create!(name: 'Alberta District')
        breed = Breed.create!(name: 'Labrador Retriever')
        age = Age.create(name: 'Puppy')
        size = Size.create(name: 'Small')
        user = User.create!(username: "testuser", password: "password", neighborhood: neighborhood, email: 'test@email.com')
        park = Park.create(name: "Alberta Park", description: 'description', fenced: true, hours_open: Time.new(1, 1, 1, 8).strftime("%I:%M%p"), hours_close: Time.new(1, 1, 1, 17).strftime("%I:%M%p"), address_1: 'test street', address_2: 'test apt #')

        @dog = Dog.create!(name: 'Fido',  neighborhood: neighborhood,  description: 'dog', age: age, size: size, user: user, breed: breed)

        @dog2 = Dog.create!(name: 'Rex',  neighborhood: neighborhood,  description: 'dog', age: age, size: size, user: user, breed: breed)
    end

    it 'responds with a 200 status' do 
        get '/api/v1/dogs'
        expect(last_response.status).to eq 200
    end

    it 'returns a JSON object of dogs from index' do
        get '/api/v1/dogs'
        name = json["dogs"][0]["name"]
        dogs = json["dogs"]
        expect(dogs.length).to eq(2)
    end

    it 'returns a single JSON object from show route' do
        get ("/api/v1/dogs/#{@dog2.id}")

        dog = json['dog']
        expect(dog['name']).to eq('Rex')
    end

end