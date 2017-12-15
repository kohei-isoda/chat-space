Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  resource :user, only: [:edit, :update]
  resource :group, only: [:new, :create, :edit, :update]
end
