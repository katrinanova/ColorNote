Colornote.Views.NotebookShow = Backbone.CompositeView.extend({
  template: JST["notebooks/show"],


  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    this.notes = this.model.notes();
    this.notes.sort();

    var notesView = new Colornote.Views.NotesIndex({collection: this.notes, book: true});
    //notes are empty, but by the time I pass them to noteShow they are full?
    this.addSubview("#notes", notesView);
  },

  render: function() {
    console.log(this.notes)
    var content = this.template({notebook: this.model});
    this.$el.html(content);

    if (this.notes.length === 0) {
      this.$(".left").addClass("stretch")
    }

    this.attachSubviews();

    return this;
  }
})
