Colornote.Views.NotebooksIndex = Backbone.View.extend({
  template: JST["notebooks/index"],

  className: "notebooks-index",

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function() {
    debugger
    var content = this.template({notebooks: this.collection});
    this.$el.html(content);
    return this;
  }
})