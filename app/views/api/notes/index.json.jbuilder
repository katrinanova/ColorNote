json.notes @notes do |note|
  json.(note, :id, :notebook_id, :title, :body)
end
