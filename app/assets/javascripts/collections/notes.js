Colornote.Collections.Notes = Backbone.Collection.extend({
  url: '/api/notes',
  model: Colornote.Models.Note,

  // initialize: function(models, options) {
  //   this.notebook = options.notebook
  // },

  comparator: function(post) {
    return - new Date(post.get('updated_at')).getTime();
  },

  getOrFetch: function(id) {
    var that = this
    var note = this.get(id)
    if (!note) {
      note = new Colornote.Models.Note({id: id});
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
