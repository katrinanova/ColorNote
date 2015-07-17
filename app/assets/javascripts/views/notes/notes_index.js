Colornote.Views.NotesIndex = Backbone.CompositeView.extend({
  template: JST["notes/index"],

  className: "notes-index",

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  events: {
    "click .note-clickable": "switchNote"
  },

  render: function() {
    var content = this.template({notes: this.collection});
    this.$el.html(content);


    if ((typeof this.currentNoteView === "undefined") && (this.collection.length > 0)) {
      var note = this.collection.first();
      this.currentNoteView = new Colornote.Views.NoteShow({collection: this.collection, model: note}); //?
      this.addSubview(".note-show", this.currentNoteView);
    }

    this.attachSubviews();

    return this;
  },

  switchNote: function(event) {
    event.preventDefault();
    var id = $(event.currentTarget).attr("data-id");
    var note = this.collection.getOrFetch(id);
    this.removeSubview(".note-show", this.currentNoteView)
    this.currentNoteView = new Colornote.Views.NoteShow({model: note});
    this.addSubview(".note-show", this.currentNoteView)
  }
})
