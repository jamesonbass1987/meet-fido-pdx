require 'rails_helper'
require "spec_helper"  

describe Api::V1::UsersController, :type => :api do

    before do 
        neighborhood = Neighborhood.create!(name: 'Alberta District')
        breed = Breed.create!(name: 'Labrador Retriever')
        age = Age.create(name: 'Puppy')
        size = Size.create(name: 'Small')
        @user = User.create!(username: "testuser", password: "password", neighborhood: neighborhood, email: 'test@email.com')

        @user.dogs.create(name: 'Fido',  neighborhood: neighborhood,  description: 'dog', age: age, size: size, user: @user, breed: breed)

        @user.dogs.create(name: 'Rex',  neighborhood: neighborhood,  description: 'dog', age: age, size: size, user: @user, breed: breed)
    end

    it 'responds with a 200 status' do 
        get '/api/v1/users'
        expect(last_response.status).to eq 200
    end

    it 'returns a JSON object of users from index' do
        get '/api/v1/users'
        users = json["users"]
        expect(users.length).to eq(1)
    end

    it 'returns a single JSON user object from show route' do
        get ("/api/v1/users/#{@user.id}")
        user_instance = json['user']
        expect(user_instance['username']).to eq(@user.username)
    end

    it 'returns a list of the users dogs' do
        get ("/api/v1/users/#{@user.id}")

        user_instance = json['user']
        expect(user_instance['dogs'].length).to eq(2)
    end

end