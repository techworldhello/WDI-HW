Rails.application.routes.draw do
  resources :images
  resources :comments
  get '/cities/to_go', to: "cities#to_go"
  get '/', to: "cities#index"
  resources :cities

  # get '/events', to: 'events#index'
  # get '/events/new', to: 'events#new'
  # post '/events', to: 'events#create'
  # get '/events/:id/edit', to: 'events#edit'
  # put '/events/:id', to: 'events#update'
  # delete '/events/:id', to: 'events#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
