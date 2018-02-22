class Api::V1::AuthenticationController < ApiController
  skip_before_action :authenticate_request

  def authenticate
    command = AuthenticateUser.call(params[:username], params[:password])
    if command.success?
      render json: { auth_token: command.result[:auth_token] }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

  def authed_user 
    user_id = JsonWebToken.decode(params[:token])[:user_id]

    if user_id
      render json: {user_id: user_id}, status: 200
    else
      render json: { error: "Resource not found." }, status: 404
    end
  end
end