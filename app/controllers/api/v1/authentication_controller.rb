class Api::V1::AuthenticationController < ApiController

  def authenticate
    
    command = AuthenticateUser.call(params[:username], params[:password])

    if command.success?
      render json: command.result[:user], serializer: UserAuthenticationSerializer, auth_token: command.result[:auth_token]
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