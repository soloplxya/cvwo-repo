module CurrentUserConcern 
  extend ActiveSupport::Concern 

 included do 
    before_action :set_current_user
 end

 def set_current_user
    token = request.headers["Authorization"]
    if !token
      render status: 401, json: {}
    end
    @current_user = User.find_by(token: request.headers["Authorization"])
    if !@current_user
      puts "user does not exist"
      render status: 401, json: {}
    end 
  end
end