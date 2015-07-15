Colornote.Views.NotebookShow = Backbone.CompositeView.extend({
  template: JST["notebooks/show"],

  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function() {
    var content = this.template({notebook: this.model});
    this.$el.html(content);
    return this;
  }
})
