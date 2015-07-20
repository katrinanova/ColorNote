Rails.application.routes.draw do
  root to: 'static_pages#landing'
  get 'home', to: 'static_pages#root'
  resources :users
  resource :session, only: [:show, :new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :notebooks, except: :edit
    resources :notes
  end

  get "/auth/:provider/callback", to: "sessions#omni"
end
