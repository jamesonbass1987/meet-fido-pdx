class Api::V1::NeighborhoodsController < ApiController
    skip_before_action :authenticate_request

    def index
        render json: Neighborhood.all, status: 200
    end

end