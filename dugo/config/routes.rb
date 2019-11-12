Rails.application.routes.draw do
  use_doorkeeper
  
  namespace :api do
    namespace :v1 do
      get 'me' => 'users#me', defaults: { format: 'json' }
      resources :posts do
        member do
          put :archive, :unarchive
        end
      end
    end
  end
end
