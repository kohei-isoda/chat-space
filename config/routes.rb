Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :user, only: [:edit, :update]
  resources :group, only: [:new, :create, :edit, :update]
end
