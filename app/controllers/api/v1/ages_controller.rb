class Api::V1::AgesController < ApiController

    def index
        render json: Age.all, status: 200
    end

end