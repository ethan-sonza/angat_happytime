Rails.application.routes.draw do
  use_doorkeeper
  
  namespace :api do
    namespace :v1 do
      resources :posts do
        member do
          put :archive, :unarchive
        end
      end
    end
  end
end
