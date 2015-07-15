Colornote.Routers.Router = Backbone.Router.extend({
  routes: {
    'notes': 'notesIndex',
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
    Colornote.notes.fetch();
    var view = new Colornote.Views.NotesIndex({collection: Colornote.notes});
    this._swapViews(view);
  },

  // will include composite view - noteShow
  notebookShow: function(id) {
    var notebook = Colornote.notebooks.getOrFetch(id);
    var view = new Colornote.Views.NotebookShow({model: notebook});
    this._swapViews;
  },

  notebooksIndex: function() {
    Colornote.notebooks.fetch();
    var view = new Colornote.Views.NotebooksIndex({collection: Colornote.notebooks});
    this._swapViews(view);
  },

  notebookNew: function() {
    debugger
    var notebook = new Colornote.Models.Notebook();
    var view = new Colornote.Views.NotebookNew({collection: Colornote.notebooks, model: notebook});
    this._swapViews(view);
  },

  noteNew: function() {
    var note = new Colornote.Models.Note();
    var view = new Colornote.Views.NoteNew({model: note});
    this._swapViews;
  },

  _swapViews: function(view) {
    debugger
    this._currentView&&this._currentView.remove;
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

})
