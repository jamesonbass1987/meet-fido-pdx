require 'support/factory_girl'
require 'rails_helper'

describe "Dogs API" do
    it 'retrieves a specific dog' do
        dog = FactoryGirl.create(:dog)    
        get "/api/v1/dogs/#{dog.id}"

        # test for the 200 status-code
        expect(response).to be_success

        # check that the dog attributes are the same.
        expect(json['name']).to eq(message.description) 

    end

end