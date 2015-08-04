class SharesController < ApplicationController

  def show
    @note = Note.find_by(link: params[:link])
  end

end
