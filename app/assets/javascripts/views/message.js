Colornote.Views.Message = Backbone.CompositeView.extend({

  template: JST.message,

  initialize: function(options) {
    this.message = options.message;
  },

  render: function () {
    var content = this.template({message: this.message});
    this.$el.html(content);

    return this;
  }

})
