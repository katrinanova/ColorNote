json.(current_user, :id, :email)

json.notebooks current_user.notebooks do |notebook|
  json.(notebook, :id, :title)

  json.notes notebook.notes do |note|
    json.(note, :id, :title, :body)
  end
end
