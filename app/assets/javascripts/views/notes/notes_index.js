Colornote.Views.NotesIndex = Backbone.CompositeView.extend({
  template: JST["notes/index"],

  className: "notes-index",

  initialize: function() {
    this.listenToOnce(this.collection, "sync", this.render);
  },

  events: {
    "click .note-clickable": "switchNote"
  },

  render: function() {
    var content = this.template({notes: this.collection});
    this.$el.html(content);
    if (this.collection.length === 0) {
      this.$(".left").addClass("stretch")
    }


    if ((typeof this.currentNoteView === "undefined") && (this.collection.length > 0)) {
      var note = this.collection.first();
      // note.fetch();
      this.currentNoteView = new Colornote.Views.NoteShow({collection: this.collection, model: note}); //?
      this.addSubview(".note-show", this.currentNoteView);
      console.log(this.currentNoteView)
    }

    this.attachSubviews();

    return this;
  },

  switchNote: function(event) {
    event.preventDefault();
    var id = $(event.currentTarget).attr("data-id");
    var note = this.collection.getOrFetch(id);
    this.removeSubview(".note-show", this.currentNoteView)
    this.currentNoteView = new Colornote.Views.NoteShow({model: note, collection: this.collection});
    this.addSubview(".note-show", this.currentNoteView)
  }
})
