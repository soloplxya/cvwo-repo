class SessionsController < ApplicationController
    def create 
      user = User
              .find_by(email: params["user"]["email"])
              .try(:authenticate, params["user"]["password"]) 

      if user 
        render json: {
            status: :created, 
            logged_in: true, 
            user: user 
        }
      else 
        render json: {
            status: 401, 
            logged_in: false, 
            user: user 
        }
      end
    end

    def logged_in
      user = User
      .find_by(email: params["user"]["email"])
      .try(:authenticate, params["user"]["password"]) 
      
      if user
        render json: {
            logged_in: true, 
            user: user
        }
      else
        render json: {
            logged_in: false
        }
      end
    end

    def logout 
       reset_session 
       render json: { status: 200, logged_out: true }
    end  

end 