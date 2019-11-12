module Api::V1
  class UsersController < ApiController
    # TODO: CRUD

    def me 
      # TEMP
      token = params[:token]

      pp params

      
      access_token = Doorkeeper::AccessToken.find_by(token: token)

      user = User.find(access_token.resource_owner_id ) if access_token
      
      render json: user
    end
  end
end
