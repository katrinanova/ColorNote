Colornote.Collections.Notebooks = Backbone.Collection.extend({
  url: '/api/notebooks',

  getOrFetch: function(id) {
    var that = this
    var notebook = this.get(id)
    if (!notebook) {
      notebook = new Colornote.Models.Notebook({id: id});
      notobook.fetch({
        success: function() {
          that.add(notebook)
        }
      })
    } else {
      notebook.fetch();
    }
    return notebook;
  }
})
