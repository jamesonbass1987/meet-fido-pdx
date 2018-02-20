class Api::V1::NeighborhoodsController < ApiController

    def index
        render json: Neighborhood.all, status: 200
    end

end