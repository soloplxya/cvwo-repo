Rails.application.routes.draw do
  resources :tags
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  resources :tasks

  # sessions config 
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  root to: "static#home"
end
