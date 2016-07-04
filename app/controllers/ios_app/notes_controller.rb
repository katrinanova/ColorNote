class IosApp::NotesController < ApplicationController
  def get_notes
     not_found if !params[:user] && !params[:demo_login]

    if params[:demo_login]
      user = User.first
    else
      credentials = [params[:user][:email], params[:user][:password]]
      user = User.find_by_credentials(*credentials)
    end

    if user
      @notes = user.notes.includes(:notebook).includes(:uploads)
      render :get_notes
    else
      not_found
    end
  end

  private

  def not_found
    raise ActionController::RoutingError.new('Not Found')
  end
end
