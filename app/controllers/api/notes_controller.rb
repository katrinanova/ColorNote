class NotesController < ApplicationController
 before_action :require_notebook_member!

 def create
   @note = current_notebook.notes.new(note_params)

   if @note.save
     render json: @note
   else
     render json: @note.errors.full_messages, status: :unprocessable_entity
   end
 end

 def destroy
   @note = Note.find(params[:id])
   @note.destroy
   render json: {}
 end

 def update
   @note = current_notebook.notes.find(params[:id])

   if @note.update_attributes(note_params)
     render json: @note
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
   params.require(:note).permit(:title, :notebook_id, :ord)
 end
end
