Colornote.Views.NotebookNew = Backbone.View.extend({
  template: JST["notebooks/new"],

  className: "notebook-new",

  events: {
    "click .create": "submit",
    "click .cancel": "goBack"
  },

  initialize: function(){

    this.listenTo(this.collection, "sync add", this.render)

  },

  render: function() {
    var content = this.template({notebook: this.model});
    this.$el.html(content);

    if (Colornote.message) {
      this.$(".errors").append(Colornote.message)
    }

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
      },
      error: function(notebook, response) {
        var $errorsEl = that.$(".errors")
        var errors = JSON.parse(response.responseText)
        errors.forEach( function(error) {
          $errorsEl.append("  " + error + ".  ")
        })
      }
    })
  },



  goBack: function(event) {
    event.preventDefault();
    window.history.back();
  }
});
