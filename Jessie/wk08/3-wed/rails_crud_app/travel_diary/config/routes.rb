Rails.application.routes.draw do
  resources :images
  resources :comments
  get '/cities/to_go', to: "cities#to_go"
  get '/', to: "cities#index"
  resources :cities
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
