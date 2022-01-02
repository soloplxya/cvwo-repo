class TasksController < ApplicationController

    
    before_action :set_todo, only: [:show, :update, :destroy]
    before_action :require_user

    def index 
      render json: @task
    end 

    def create 
      @task = Task.new(task_params)
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
  
    def edit 
      render json: @task
    end 
  
    def destroy
      @task.destroy
      render json: @task
    end 



    private 
      def set_todo
        @todo = Todo.find(params[:id])
      end 

      def todo_params 
        params.require(:todo).permit(:id, :description, :status, :completed)
      end 


  end 
  
  