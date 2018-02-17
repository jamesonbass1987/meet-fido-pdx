Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
      namespace :v1 do
        resources :dogs
        resources :users
        resources :parks, only: [:show, :index]
        resources :ages, only: [:index]
        resources :sizes, only: [:index]
        resources :breeds, only: [:index]
      end
  end
end
