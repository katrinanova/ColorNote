Colornote.Collections.Notes = Backbone.Collection.extend({
  url: '/api/notes',
  model: Colornote.Models.Note,

  comparator: function(note) {
    return - new Date(note.get('updated_at')).getTime();
  },

  getOrFetch: function(id) {
    var that = this
    var note = this.get(id)
    if (!note) {
      note = new Colornote.Models.Note({id: id});
      note.fetch({
        success: function() {
          that.add(note)
        }
      })
    } else {
      note.fetch();
    }
    return note;
  }
})
