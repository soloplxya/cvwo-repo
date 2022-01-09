class TagsController < ApplicationController
  include CurrentUserConcern 
  
      def index 
        tags = current_user.tags
        @tags = tags.order("id DESC")
        render json: {
          tags: @tags, 
          http_response: "200"
        }
      end 
  
      def create 
        user_now = current_user
        @tag = user_now.tags.new(params.require(:tags).permit(:name))
        if @tag.save{
          render json: {
            tag: @tag, 
            http_response: "200"
          }
        }
        else 
          render json: {
            errors: @tag.errors.full_messages, 
            http_response: "500 internal server error"
          }
        end 
      end 
    
      def show 
        render json: @tag
      end 
  
      
      def update 
        tag = Tag.find(params[:id])
        if tag.update(params.require(:tag).permit(:name)) {
          render json: {
            tag: tag, 
            http_response: "200"
          }
        }
        else 
          render json: {
            errors: @tag.errors.full_messages, 
            http_response: "500 internal server error"
          }
        end 
      end 
    
    
      def edit 
        render json: @tag
      end 
    
      def destroy
        tag = Tag.find(params[:id])
        tag.destroy
      end 
    end 
    
    