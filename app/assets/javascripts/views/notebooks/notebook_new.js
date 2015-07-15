Colornote.Views.NotebookNew = Backbone.View.extend({
  template: JST["notebooks/new"],

  className: "notebook-new",

  events: {
    "click .create": "submit",
    "click .cancel": "back"
  },

  initialize: function(){

  },

  render: function() {
    var content = this.template({notebook: this.model});
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    var that = this
    event.preventDefault();
    var params = this.$("form").serializeJSON();
    this.model.set(params);
    this.model.save({}, {
      success: function() {
        that.collection.add(that.model);
        Backbone.history.navigate("notebooks/" + that.model.id, {trigger: true});
      }
    })
  },

  back: function() {
    Backbone.history.navigate(
    )

  }
});
