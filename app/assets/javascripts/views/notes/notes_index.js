Colornote.Views.NotesIndex = Backbone.CompositeView.extend({
  template: JST["notes/index"],

  className: "notes-index",

  initialize: function(options) {
    this.listenToOnce(this.collection, "sync", this.render);

    Colornote.searchResults = new Colornote.Collections.SearchResults();
    this.listenTo(Colornote.searchResults, "sync", this.renderSearch);

    this.book = options.book || false;
    this.search = false;
  },

  events: {
    "click .note-clickable": "switchNote",
    "click #search": "toggleSearchView",
    "change .query": "search"
  },

  render: function(options) {
    var content = this.template({notes: this.collection, book: this.book});

    if (this.collection.length === 0) {
      this.$el.html(content);
      this.$(".left").addClass("stretch")
      return this;
    }

    this.$el.html(content);


    if ((typeof this.currentNoteView === "undefined") && (this.collection.length > 0)) {
      var note = this.collection.first();
      // note.fetch();
      this.currentNoteView = new Colornote.Views.NoteShow({collection: this.collection, model: note}); //?
      this.addSubview(".note-show", this.currentNoteView);
    }

    this.attachSubviews();

    return this;
  },

  renderSearch: function() {
    console.log("renderSearch")
    var content = this.template({notes: Colornote.searchResults, book: false});

    // this.$(".left").addClass("stretch")

    this.$el.html(content);

    (typeof this.currentNoteView === "undefined") &&
      Colornote.searchResults.forEach(function(result) {

        if (result instanceof Colornote.Models.Note) {
          var note = result
          this.currentNoteView = new Colornote.Views.NoteShow({collection: this.collection, model: note}); //?
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
    var id = $(event.currentTarget).attr("data-id");
    var type = $(event.currentTarget).attr("data-type");

    if (type === "Notebook") {
      Backbone.history.navigate("notebooks/" + id, {trigger: true})
    }

    var note = this.collection.getOrFetch(id);
    this.removeSubview(".note-show", this.currentNoteView)
    this.currentNoteView = new Colornote.Views.NoteShow({model: note, collection: this.collection, book: this.book});
    this.addSubview(".note-show", this.currentNoteView)
  },

  toggleSearchView: function(event) {
    if (this.search) {
      this.removeSubview(".search-window", this.searchView)
      this.search = false
    } else {
      this.searchView = new Colornote.Views.Search()
      this.addSubview(".search-window", this.searchView);
      this.search = true
    }

    this.render();
  }
})

// Comment
