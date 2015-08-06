Colornote.Views.Search = Backbone.View.extend({

  events: {
    "submit .search-form": "search"
  },

  template: JST.search,

  render: function () {
    var content = this.template({results: Colornote.searchResults});
    this.$el.html(content);

    return this;
  },

  search: function (event) {
    event.preventDefault();

    Colornote.searchResults.query = this.$(".query").val(); 

    Colornote.searchResults.fetch({
      data: {query: Colornote.searchResults.query}
    });
  },

})
