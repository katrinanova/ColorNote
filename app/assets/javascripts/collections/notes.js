Colornote.Collections.Notes = Backbone.Collection.extend({
  url: 'api/notes',

  getOrFetch: function(id) {
    var that = this
    var note = this.get(id)
    if (!note) {
      note = new Colornote.Models.Notebook({id: id});
      notobook.fetch({
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
