json.total_count @search_results.total_count

json.results do
  json.array! @search_results do |search_result|
    if search_result.serchable_type == "Note"
      json.partial! "api/notes/note", note: search_result.searchable
      json._type "Note"
    else
      json.partial! "api/notebooks/notebook", notebook: search_result.searchable
      json._type "Notebook"
    end
  end
end
