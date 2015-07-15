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

  // will include composite view - noteShow
  notesIndex: function() {
    ColornoteNotes.fetch();
    var view = new Colornote.Views.NotesIndex({collection: ColornoteNotes});
    this._swapViews(view);
  },

  // will include composite view - noteShow
  notebookShow: function(id) {
    var notebook = ColornoteNotebooks.getOrFetch(id);
    var view = new Colornote.Views.NotebookShow({model: notebook});
    this._swapViews;
  },

  notebooksIndex: function() {
    ColornoteNotebooks.fetch();
    var view = new Colornote.Views.NotebooksIndex({collection: ColornoteNotebooks});
    this._swapViews(view);
  },

  notebookNew: function() {
    var notebook = new Colornote.Models.Notebook();
    var view = new Colornote.Views.NotebookNew({model: notebook});
    this._swapViews;
  },

  noteNew: function() {
    var note = new Colornote.Models.Note();
    var view = new Colornote.Views.NoteNew({model: note});
    this._swapViews;
  },

  _swapViews: function(view) {
    this._currentView&&this._currentViews.remove;
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

})
