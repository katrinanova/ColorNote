Colornote.Collections.Notebooks = Backbone.Collection.extend({
  url: '/api/notebooks',
  model: Colornote.Models.Notebook,

  comparator: function(notebook) {
    return - new Date(notebook.get('updated_at')).getTime();
  },

  getOrFetch: function(id) {
    var that = this
    var notebook = this.get(id)
    if (!notebook) {
      notebook = new Colornote.Models.Notebook({id: id});
      notebook.fetch({
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
