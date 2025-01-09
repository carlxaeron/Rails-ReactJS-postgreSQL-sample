Rails.application.routes.draw do
  root 'home#index'

  post 'signup', to: 'authentication#signup'
  post 'login', to: 'authentication#login'
end
