module Api::V1
  class PostsController < ApiController
    before_action :doorkeeper_authorize!, except: [:index, :show]

    def index
      service = PostService.new({params: params})
      render json: service.index
    end

    def show
      service = PostService.new({params: params})
      render json: service.show
    end

    def create
      service = PostService.new({params: params})
      render json: service.create, status: 201
    end

    def update
      service = PostService.new({params: params})
      render json: service.update
    end

    def archive
      service = PostService.new({params: params})
      render json: service.archive
    end

    def unarchive
      service = PostService.new({params: params})
      render json: service.unarchive
    end
  end
end
