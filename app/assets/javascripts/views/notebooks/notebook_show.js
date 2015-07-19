Colornote.Views.NotebookShow = Backbone.CompositeView.extend({
  template: JST["notebooks/show"],


  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    var notes = this.model.notes();
    notes.sort();
    var notesView = new Colornote.Views.NotesIndex({collection: notes});
    //notes are empty, but by the time I pass them to noteShow they are full?
    this.addSubview(".notes", notesView);
  },

  render: function() {
    var content = this.template({notebook: this.model});
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
})
