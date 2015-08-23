class SessionsController < ApplicationController

  before_filter :require_current_user!, :only => [:destroy]

  def show
    if current_user
      render :show
    else
      render json: {}
    end
  end

  def new
    @user = User.new
  end

  def demo_login
    login!(User.first)
    redirect_to "/home"
  end


  def create
    credentials = [params[:user][:email], params[:user][:password]]
    @user = User.find_by_credentials(*credentials)
    if @user
      login!(@user)
      redirect_to "/home"
    else
      flash.now[:notices] = ["Invalid credentials."]
      @user = User.new
      render :new
    end
  end

  def omni
    @user = User.find_or_create_by_auth_hash(auth_hash)
    login!(@user)
    redirect_to "/home"
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to new_session_url
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end

end
