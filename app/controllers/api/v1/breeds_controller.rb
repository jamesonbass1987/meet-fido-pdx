class Api::V1::BreedController < ApiController

    def index
        render json: Breed.all, status: 200
    end

end