class Api::NotebooksController < ApplicationController
  def create
    @notebook = current_user.notebooks.new(notebook_params)

    if @notebook.save
      render json: @notebook
    else
      render json: @notebook.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @notebook = current_user.notebooks.find(params[:id])
    @notebook.try(:destroy)
    render json: {}
  end

  def index
    @notebooks = current_user.notebooks
    render json: @notebooks
  end

  def show
    @notebook = Notebook.includes(:notes).find(params[:id])

    if @notebook.id == current_user_id
      render :show
    else
      render json: ["You do not have an access to view this notebook"], status: 403
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title)
  end
end
