Colornote.Views.NotebookShow = Backbone.CompositeView.extend({
  template: JST["notebooks/show"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);

    var notes = this.model.notes();

    var notesView = new Colornote.Views.NotesIndex({collection: notes});
    this.addSubview(".notes", notesView);
  },

  render: function() {
    var content = this.template({notebook: this.model});
    this.$el.html(content);
    this.attachSubviews();

    return this;
  }
})
