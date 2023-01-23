Rails.application.routes.draw do
  
  resources :notes, only:[:show, :create, :index]
  resources :churches, only:[:show, :create, :index]
  # get 'sessions/create'
  # get 'sessions/destroy'
  resources :users, only:[:show, :create, :index]

  get 'sessions/create'
  get 'sessions/destroy'

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  get "/notes", to: "notes#show"
  post "/notes", to: "notes#create"

  get "/churches", to: "churches#show"
  post "/addchurches", to: "churches#create"
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


#user cru
#church cru
#note crud

