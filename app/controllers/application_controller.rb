class ApplicationController < ActionController::API
    before_action :authenticate_request

    attr_reader :current_user
    # helper_method :current_user

    private

    def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    puts @current_user
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
    end
    
end
