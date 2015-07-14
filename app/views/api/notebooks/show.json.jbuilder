json.(@notebook, :id, :title)

json.notes @notebook.notes do |note|
  json.(note, :id, :title, :body)
end
