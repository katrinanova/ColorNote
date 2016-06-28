Colornote.Views.NotesIndex = Backbone.CompositeView.extend({
  template: JST["notes/index"],

  className: "notes-index",

  initialize: function(options) {
    this.listenTo(this.collection, "sync", this.render);

    Colornote.searchResults = new Colornote.Collections.SearchResults();
    this.listenTo(Colornote.searchResults, "sync", this.renderSearch);

    this.book = options.book || false;
    this.search = false;

    this.selector = false;
  },

  events: {
    "click .note-clickable > .trash-notes": "deleteNote",
    "click .note-clickable > .fa-share-square-o": "copyToClipboard",
    "click .note-clickable": "switchNote",
    "click #search": "toggleSearchView",
    "change .query": "search",
    "click .color-select-r": "red",
    "click .color-select-b": "blue",
    "click .color-select-g": "green",
  },

  render: function(options) {
    var content = this.template({notes: this.collection, book: this.book, selector: this.selector});

    if (this.collection.length === 0) {
      this.$el.html(content);
      this.$(".left").addClass("stretch");
      return this;
    }

    this.$el.html(content);


    if ((typeof this.currentNoteView === "undefined") && (this.collection.length > 0)) {
      var note = this.collection.first();
      // note.fetch();
      this.currentNoteView = new Colornote.Views.NoteShow({collection: this.collection, model: note});
      this.addSubview(".note-show", this.currentNoteView);
    }

    this.attachSubviews();

    return this;
  },

  deleteNote: function(event) {
    event.preventDefault();
    event.stopPropagation();

    var that = this;
    var $section = $((event.currentTarget).parentElement);
    var note_id = $section.attr("data-id")

    if (note_id) {
      var note = this.collection.get(note_id)

      // var messageView = new Colornote.Views.Message({message: 'Are you sure you want to delete "' + note.get('title') +'"?'})
      // that.addSubview(messageView)

      note.destroy({
        success: function() {
          that.collection.remove(note)
        }
      });


    } else {
      var notebook_id = $section.find(".notebook-clickable").attr("data-id")
      var notebook = Colornote.notebooks.get(notebook_id)
      notebook.destroy({
        sucess: function() {
          Colornote.notebooks.remove(notebook)
        }
      })
    }
    that.render();
  },

  renderSearch: function() {
    var content = this.template({notes: Colornote.searchResults, book: false, selector: this.selector});

    this.$el.html(content);

    (typeof this.currentNoteView === "undefined") &&
      Colornote.searchResults.forEach(function(result) {

        if (result instanceof Colornote.Models.Note) {
          var note = result
          this.currentNoteView = new Colornote.Views.NoteShow({collection: this.collection, model: note});
          this.addSubview(".note-show", this.currentNoteView);

        } else {
          this.$(".left").addClass("stretch")
        }
      })

    this.attachSubviews();

    return this;

  },

  switchNote: function(event) {
    event.preventDefault();

    var $notebook = $(event.currentTarget).find(".notebook-clickable");

    if ($notebook.length > 0) {

      var notebook_id = $notebook.attr("data-id")
      Backbone.history.navigate("notebooks/" + notebook_id, {trigger: true})

    } else {

      var note_id = $(event.currentTarget).attr("data-id")

      var note = this.collection.getOrFetch(note_id);
      this.removeSubview(".note-show", this.currentNoteView);
      this.currentNoteView = new Colornote.Views.NoteShow({model: note, collection: this.collection, book: this.book});
      this.addSubview(".note-show", this.currentNoteView)
    }
  },

  toggleSearchView: function(event) {
    if (this.search) {
      this.removeSubview(".search-window", this.searchView);
      this.search = false;
    } else {
      this.searchView = new Colornote.Views.Search()
      this.addSubview(".search-window", this.searchView);
      this.search = true
    }

    this.render();
  },

  red: function() {
    this.selector = "Red";
    this.render();
  },

  blue: function() {
    this.selector = "Blue";
    this.render();
  },

  green: function() {
    this.selector = "Green";
    this.render();
  },
})
