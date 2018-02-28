class Api::V1::SizesController < ApiController
    
    def index
        render json: Size.all, status: 200
    end

end