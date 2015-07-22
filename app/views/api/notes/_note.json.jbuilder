json.(note, :id, :title, :body, :notebook_id, :updated_at)
json.notebook do
  json.(note.notebook, :id, :title, :updated_at)
end
json.upload_urls note.uploads do |upload|
  asset_path(upload.uploaded.url(:original))
end
