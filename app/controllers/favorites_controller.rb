class FavoritesController < ApplicationController


  def index
    @favorites = current_user.favorites
    render :json => @favorites
  end

  def create
    render :json =>
    Favorite.create!(:user_id => current_user.id, :gist_id => params[:gist_id])

  end

  def destroy
    render :json =>
    Favorite.destroy(
      Favorite.where(user_id: current_user.id, gist_id: params[:gist_id])
    )
  end

end
