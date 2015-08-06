Colornote.Views.NotebooksIndex = Backbone.View.extend({

  template: JST["notebooks/index"],

  className: "notebooks-index",

  initialize: function() {
    this.listenTo(this.collection, "sync update", this.render);
  },

  events: {
    "click .trash-notebooks": "deleteNotebook"
  },

  render: function() {
    var content = this.template({notebooks: this.collection});
    this.$el.html(content);
    return this;
  },

  deleteNotebook: function() {
    event.preventDefault();
    event.stopPropagation()

    var that = this

    var notebook_id = $(event.target).attr("data-id")

    var notebook = this.collection.get(notebook_id)
    notebook.destroy({
      sucess: function() {
        this.collection.remove(notebook)
      }
    })

    this.render()
  }

})
