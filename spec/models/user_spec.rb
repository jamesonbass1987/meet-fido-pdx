require 'rails_helper'

describe User do
  before(:each) do
    @neighborhood = Neighborhood.create!(name: 'Alberta District')
    @breed = Breed.create!(name: 'Labrador Retriever')
    @age = Age.create(name: 'Puppy')
    @temperament = Temperament.create(name: 'Calm')
    @size = Size.create(name: 'Small')
    @user = User.create!(username: "testuser", password: "password", neighborhood: @neighborhood, email: 'test@email.com')
    
    @dog_1 = Dog.create!(name: 'Fido',  neighborhood: @neighborhood,  description: 'dog', age: @age, temperament: @temperament, size: @size, user: @user, breed: @breed )

    @dog_2 = Dog.create!(name: 'Fido',  neighborhood: @neighborhood,  description: 'dog',age: @age, temperament: @temperament, size: @size, user: @user, breed: @breed )

    end

  it 'can be created' do
    expect(@user).to be_valid
  end

  it 'has a neighborhood set via neighborhood_id' do
    expect(@user.neighborhood).to eq(@neighborhood)
  end

  it 'has many dogs' do
    expect(@user.dogs.count).to eq(2) 
  end

  it 'cannot have an invalid password' do
    test_user = User.create(username: "test", password: "pass", neighborhood: @neighborhood, email: 'test@email.com')

    expect(test_user).to_not be_valid 
  end
end