require 'rails_helper'
require "spec_helper"  

describe Api::V1::ParksController, :type => :api do

    before do 
        Park.create(
            name: 'Wilamette Park',
            description: 'Includes accessible picnic area, accessible restroom, boat dock, boat ramp, canoe launch, dog off-leash area, paths – paved, paths – unpaved, picnic shelter, picnic site – reservable, picnic tables, playground, riverfront views, soccer field, tennis court, and tennis court – lighted.',
            address_1: 'SW Macadam Avenue',
            address_2: 'Nebraska Street',
            fenced: false,
            hours_open: Time.new(1, 1, 1, 5),
            hours_close: Time.new(1, 1, 1, 24)
        )

        Park.create(
            name: 'Hillsdale Park',
            description: ' Includes dog off-leash area, and picnic tables.',
            address_1: 'SW 27th Avenue',
            address_2: 'Hillsdale Highway',
            fenced: false,
            hours_open: Time.new(1, 1, 1, 5),
            hours_close: Time.new(1, 1, 1, 24)
        )

        @park = Park.last
    end

    it 'responds with a 200 status' do 
        get '/api/v1/parks'
        expect(last_response.status).to eq 200
    end

    it 'returns a JSON object of parks from index' do
        get '/api/v1/parks'

        parks = json["parks"]
        expect(parks.length).to eq(2)
    end

    it 'returns a single JSON object from show route' do
        get ("/api/v1/parks/#{@park.id}")

        json_park = json['park']
        expect(json_park['name']).to eq(@park.name)
    end

end