Colornote.Views.NotebooksIndex = Backbone.View.extend({

  template: JST["notebooks/index"],

  className: "notebooks-index",

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    

    var note = this.notes().first;
    var noteShowView = new Colornote.Views.NoteShow({model: note});
    this.addSubview(".note-show", noteShowView);
  },

  render: function() {
    var content = this.template({notebooks: this.collection});
    this.$el.html(content);
    return this;
  }
})
