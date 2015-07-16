# json.notes @notes do |note|
#   json.partial! "api/notes/note", note: note
# end
#

json.partial! "api/notes/note", collection: @notes, as: :note
