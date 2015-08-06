Colornote.Views.noteLink = Backbone.View.extend({

  template: JST["notes/link"],

  render: function() {
    var content = this.template({link: this.model});
    this.$el.html(content);

    return this;
  }
})
