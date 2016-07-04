Rails.application.routes.draw do
  root to: 'static_pages#landing'
  get 'facebook', to: 'static_pages#facebook'
  get 'home', to: 'static_pages#root'
  resources :users
  resource :session, only: [:show, :new, :create, :destroy]
  get 'demo', to: 'sessions#demo_login'
  get '/shared/:link', to: 'shares#show'

  namespace :api, defaults: { format: :json } do
    get '/search', to: 'searches#search'
    resources :notebooks, except: :edit
    resources :notes
  end

  namespace :ios_app, defaults: { format: :json } do
    get '/get_notes', to: 'notes#get_notes'
  end

  get "/auth/:provider/callback", to: "sessions#omni"
end
