class SessionsController < ApplicationController

  def new
    if current_user
      redirect_to gists_url
    end
  end

  def create
    if login?(params[:user])
      redirect_to gists_url # error will prlly come here
    else
      render :new
    end
  end

  def destroy
    logout

    redirect_to root_url
  end

end
