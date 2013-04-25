module SessionsHelper

  def login?(params_user)
    user = User.find_by_username(params_user[:username])
    if user
      user.remember_token = SecureRandom.hex(16)
      user.save!
      session[:remember_token] = user.remember_token

      @current_user = user

      true
    else
      false
    end
  end

  def current_user
    return nil if session[:remember_token].nil?
    @current_user ||= User.find_by_remember_token(session[:remember_token])
  end

  def logout
    p "LOG OUT"
    current_user.remember_token = nil
    current_user.save!
    @current_user = nil
    session[:remember_token] = nil
  end

end
