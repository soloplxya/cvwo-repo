class AuthenticationError < StandardError; end
class ApplicationController < ActionController::Base
include CurrentUserConcern
    skip_before_action :verify_authenticity_token 

    helper_method :logged_in?, :current_user, :authorized_user?

    def logged_in
        if @current_user
          render json: {
              logged_in: true, 
              user: @current_user
          }
        else 
          render json: {
              logged_in: false
          }
        end
    end
    
    def current_user
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
    
    def authorized_user?
        @user == current_user
    end

    def require_user
        if !logged_in
            render json: {
            errors: ["You must be logged in"],
            status: "not_logged_in"
            }
        end
    end

    def authenticate_user!
        puts current_user
        if current_user === nil
            raise AuthenticationError
        end 
    end

end
