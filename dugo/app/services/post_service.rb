class PostService
  def initialize(opts={})
    raise("Params cannot be blank") if opts[:params].blank?
    @params = opts[:params]
    @post = Post.find(@params[:id]) unless @params[:id].blank?
  end

  def index
    posts = Post.all
    posts.as_json
  end

  def show
    @post.as_json
  end

  def create
    @post = Post.create!(@params.permit(Post.column_names))
    show
  end

  def update
    @post = Post.update(@params.permit(Post.column_names))
    show
  end

  def archive
    @post.update!({
      archived: true,
      archive_date: DateTime.now
    })
    show
  end

  def unarchive
    @person.update!({
      archived: false,
      archive_date: nil
    })
    show
  end
end
