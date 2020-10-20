class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:index]


  def index
    render json: @current_user.posts
  end
  
  def create
    post = current_user.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: {errors: post.errors}, status:420
    end
  end

  def show
  end

  def update
  end

  def edit
  end

  def destroy
    Post.find(params[:id]).destroy
    render json: {message: "Your Trip Post has been Deleted"}
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_post 
    @post= Post.find(params[id])
  end

  def post_params
    params.require(:post).permit(:name, :start_lat,:start_long,:end_lat, :end_long,:boat_type,:river,:distance,:date,:body,:image,:trip_time)
  end
end
