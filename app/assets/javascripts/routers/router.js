Colornote.Routers.Router = Backbone.Router.extend({
  routes: {
    '': 'notesIndex',
    'notebooks': 'notebooksIndex',
    'notebooks/new': 'notebookNew',
    'notes/new': 'noteNew',
    'notebooks/:id': 'notebookShow'
  },

  initialize: function() {
    this.$rootEl = $("#main")
  },

  swapViews: function(view) {
    this._currentView&&this._currentViews.remove;
    this._currentView = view;
    this.$rootEl.html(view.render().$el)
  }

  // notesIndex: function() {
  //   var view = new Colornote.Views.NotesIndex({notes: ColornoteNotes});
  //
  //
  // }
  noteNew: function

})
