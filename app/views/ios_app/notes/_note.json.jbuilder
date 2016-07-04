json.(note, :id, :title, :body, :notebook_id, :updated_at, :color, :link)

json.notebook do
  json.(note.notebook, :id, :title, :updated_at)
end

json.uploads note.uploads do |upload|
  json.url upload.uploaded.url
  json.ttype upload.uploaded_content_type
  json.name upload.uploaded_file_name
end
