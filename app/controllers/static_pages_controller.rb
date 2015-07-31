class StaticPagesController < ApplicationController

  def root
    require_current_user!
  end

  def landing
  end
end
