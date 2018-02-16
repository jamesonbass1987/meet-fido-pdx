class Api::V1::DogsController < ApiController

  before_action :set_dog, only: [:show, :update, :destroy]

  def index
    render json: Dog.all, status: 200
  end

  def create
    dog = Dog.new(dog_params)
    if dog.save
      render json: dog, status: 200
    else
      render json: { message: dog.errors }, status: 400
    end
  end

  def show
    if @dog
      render json: @dog, status: 200
    else
      render json: { message: "Resource not found." }, status: 404
    end
  end

  def update
    if @dog.update(dog_params)
      render json: @dog, status: 204
    else
      render json: { message: @dog.errors }, status: 400
    end
  end

  def destroy
    if @dog.destroy
      render status: 204
    else
      render json: { message: "Something went wrong. Unable to remove dog." }, status: 404
    end
  end

  private
    def dog_params
      params.permit(:name, :user_id, :breed_id, :age_id, :size_id, :description, :preferred_park_id, :neighborhood_id, dog_images_attributes:[:image_url, :image_alt])
    end

    def set_dog
      @dog = Dog.find_by(id: params[:id])
    end
end