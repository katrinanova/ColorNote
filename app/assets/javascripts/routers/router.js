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
    Colornote.notes.fetch();
    var view = new Colornote.Views.NotesIndex({collection: Colornote.notes});
    this._swapViews(view);
  },

  // will include composite view - noteShow
  notebookShow: function(id) {
    var notebook = Colornote.notebooks.getOrFetch(id);
    // notebook does not have tytle in attributes? still fetching?
    //why Colornote.Notebooks empty?
    var view = new Colornote.Views.NotebookShow({model: notebook});
    this._swapViews(view);
  },

  notebooksIndex: function() {
    Colornote.notebooks.fetch();
    var view = new Colornote.Views.NotebooksIndex({collection: Colornote.notebooks});
    this._swapViews(view);
  },

  notebookNew: function() {
    var notebook = new Colornote.Models.Notebook();
    var view = new Colornote.Views.NotebookNew({collection: Colornote.notebooks, model: notebook});
    this._swapViews(view);
  },

  noteNew: function() {
    var notebooks = Colornote.notebooks;
    var notes = Colornote.notes;
    var note = new Colornote.Models.Note();
    var view = new Colornote.Views.NoteNew({model: note, collection: notes, notebooks: notebooks});
    this._swapViews(view);
  },

  _swapViews: function(view) {
    this._currentView&&this._currentView.remove;
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

})
