Colornote.Views.Message = Backbone.View.extend({

  template = JST.message,

  render: function () {
    var content = this.template({results: Colornote.searchResults});
    this.$el.html(content);

    return this;
  }


})
