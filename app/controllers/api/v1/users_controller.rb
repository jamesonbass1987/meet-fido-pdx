class Api::V1::UsersController < ApiController
  skip_before_action :authenticate_request, only: [:create]
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    render json: User.all, status: 200
  end

  def create
    user = User.new(user_params)

    if user.save
      render status: 200
    else
      render json: { message: user.errors }, status: 400
    end
  end

  def show

    if @user
      render json: @user, status: 200
    else
      render json: { message: "Resource not found." }, status: 404
    end
  end

  def update
    if @user.update(user_params)
      render json: @user, status: 204
    else
      render json: { message: @user.errors }, status: 400
    end
  end

  def destroy
    if @user.destroy
      render status: 204
    else
      render json: { message: "Something went wrong. Unable to remove user." }, status: 404
    end
  end

  private
    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation, :email, :profile_image_url, :neighborhood_id, :bio, park_ids:[], dog_ids:[])
    end


    def set_user
      @user = User.find_by(id: params[:id])
    end
end