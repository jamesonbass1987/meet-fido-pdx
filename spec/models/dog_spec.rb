require 'rails_helper'

describe Dog do
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

end