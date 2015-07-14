Colornote.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'notesIndex',
    'notebooks': 'notebooksIndex',
    'notebooks/new': 'notebookNew',
    'notes/new': 'noteNew',
    'notebooks/:id': 'notebookShow'
  },

  initialize: function() {

    // this.$rootEl =
  }

  // notesIndex: function() {
  //   var view = new Colornote.Views.NotesIndex({notes: ColornoteNotes});
  //
  //
  // }

})
