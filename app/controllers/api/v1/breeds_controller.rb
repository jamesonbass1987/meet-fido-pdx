class Api::V1::BreedsController < ApiController

    def index
        render json: Breed.all, status: 200
    end

end