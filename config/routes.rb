Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    post 'signup', to: 'api#signup'
  end
end
