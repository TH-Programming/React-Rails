Rails.application.routes.draw do
  resources :albums
  resources :users
  resources :photos
  post "/sessions/new", :to => "sessions#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
