Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do 


    resources :posts do
      resources :comments 
    end


      resources :users do
        resources :posts 
        resources :comments
      end


  end
# Custome Routes will go here


# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
