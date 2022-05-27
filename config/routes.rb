Rails.application.routes.draw do
  resources :winners
  resources :users
  resources :favorites
  resources :listings

  get '/authorized_user', to: 'users#show'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
 