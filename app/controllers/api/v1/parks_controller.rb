class Api::V1::ParksController < ApiController
  before_action :authenticate_user
  before_action :set_park, only: [:show, :update, :destroy]

  def index
    render json: Park.all, status: 200
  end

  def show
    if @park
      render json: @park, status: 200
    else
      render json: { message: "Resource not found." }, status: 404
    end
  end


  private
    def set_park
      @park = Park.find_by(id: params[:id])
    end
end