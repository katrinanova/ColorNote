class Api::NotesController < ApplicationController

 def index
   @notes = current_user.notes.includes(:uploads)
   render :index
 end


 def create
   @note = Note.new(note_params)
   if params[:upload]
     @note.uploads.new(uploaded: params[:upload][:uploded])
   end

   if @note.save
     render json: @note
   else
     render json: @note.errors.full_messages, status: :unprocessable_entity
   end
 end

 def show
   @note = Note.find(params[:id])
   render :show
 end

 def destroy
   @note = Note.find(params[:id])
   @note.destroy
   render json: {}
 end

 def update
   @note = Note.find(params[:id])

   if params[:upload]
     @note.uploads.new(uploaded: params[:upload][:uploded])
   end

   if @note.update_attributes(note_params)
     render :show
   else
     render json: @note.errors.full_messages, status: :unprocessable_entity
   end
 end

 private

 def current_notebook
   if params[:id]
     @note = Note.find(params[:id])
     @notebook = @note.notebook
   elsif params[:note]
     @notebook = Notebook.find(params[:note][:notebook_id])
   end
 end

 def note_params
   params.require(:note).permit(:title, :notebook_id, :body, :color, :updated_at)
 end

end
