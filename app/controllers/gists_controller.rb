class GistsController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]

  def index
    if current_user.nil?
      redirect_to signin_url
    else
      @user_gists = current_user.gists
      # @fav_gists = current_user.favorite_gists

      respond_to do |format|
        format.json { render :json => @user_gists }
        format.html { render :index }
      end
    end
  end

  def create
     @gist = Gist.create!(:user_id => current_user.id, :title => params[:title], :gist_files_attributes => params[:gist_files]);
     render :json => @gist, status: 200
  end

end
