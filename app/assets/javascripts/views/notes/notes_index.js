Colornote.Views.NotesIndex = Backbone.CompositeView.extend({
  template: JST["notes/index"],

  className: "notes-index",

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    if (this.collection.length === 0) { return }

    var note = this.collection.first();
    var noteShowView = new Colornote.Views.NoteShow({model: note});
    this.addSubview(".note-show", noteShowView);
  },

  render: function() {
    var content = this.template({notes: this.collection});
    this.$el.html(content);
    return this;
  }
})
