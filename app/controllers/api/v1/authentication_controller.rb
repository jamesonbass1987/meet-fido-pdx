class Api::V1::AuthenticationController < ApiController
  skip_before_action :authenticate_request

  def authenticate
    command = AuthenticateUser.call(params[:username], params[:password])
    
    if command.success?
      render json: { auth_token: command.result[:auth_token], user: command.result[:user] }
    else
      render json: { error: command.errors }, :status => 404
    end
  end

  def authed_user 
    user_id = JsonWebToken.decode(params[:token])[:user_id]

    user = User.find_by(id: user_id)

    if user
      render json: user, serializer: UserSerializer
    else
      render json: { error: "Resource not found." }, status: 404
    end
  end
end