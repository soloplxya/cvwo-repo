class TasksController < ApplicationController
include CurrentUserConcern 

    def index 
      tasks = current_user.tasks
      @tasks = tasks
      render json: {
        tasks: @tasks, 
        http_response: "200"
      }
    end 

    def create 
      user_now = current_user
      @task = user_now.tasks.new(params.require(:task).permit(:description, :user_id, :status, :completed))
      if @task.save{
        render json: {
          task: @task, 
          http_response: "200"
        }
      }
      else 
        render json: {
          errors: @task.errors.full_messages, 
          http_response: "500 internal server error"
        }
      end 
    end 
  
    def show 
      render json: @task
    end 

    
    def update 
      task = Task.find(params[:id])
      if task.update(params.require(:task).permit(:description, :user_id, :status, :completed)) {
        render json: {
          task: task, 
          http_response: "200"
        }
      }
      else 
        render json: {
          errors: @task.errors.full_messages, 
          http_response: "500 internal server error"
        }
      end 
    end 
  
  
    def edit 
      render json: @task
    end 
  
    def destroy
      task = Task.find(params[:id])
      task.destroy
    end 





    private 
      def set_todo
        @todo = Todo.find(params[:id])
      end 

      def todo_params 
        params.require(:todo).permit(:id, :description, :status, :completed)
      end 

  end 
  
  