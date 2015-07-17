Colornote.Views.NoteShow = Backbone.CompositeView.extend({
  template: JST["notes/show"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function() {
    var content = this.template({note: this.model});
    this.$el.html(content);
    this.attachSubviews;

    return this;
  }
})
