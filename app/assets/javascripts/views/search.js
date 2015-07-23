Colornote.Views.Search = Backbone.View.extend({

  initialize: function () {
    // this.bindScroll(); //infinite scroll?
    this.searchResults = new Colornote.Collections.SearchResults();
    this.listenTo(this.searchResults, "sync", this.render);
  },

  events: {
    "change .query": "search"
  },

  template: JST.search,

  render: function () {
    var content = this.template({results: this.searchResults});
    this.$el.html(content);

    return this;
  },

  search: function () {
    event.preventDefault();
    this.searchResults.query = this.$(".query").val(); //can assign like that? because it is object?

    this.searchResults.fetch({
      data: {query: this.searchResults.query}
    });
  },

  // bindScroll: function () {
  //   $(window).on("scroll", this.handleScroll.bind(this));
  // },
  //
  // handleScroll: function (event) {
  //   var $doc = $
  // }
})
