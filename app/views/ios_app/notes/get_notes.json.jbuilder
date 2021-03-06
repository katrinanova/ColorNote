json.array! @notebooks do |notebook|
  json.(notebook, :id, :title)

  json.notes notebook.notes do |note|
    json.partial! 'api/notes/note', note: note
  end
end
