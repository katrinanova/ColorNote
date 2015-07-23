Colornote.Collections.SearchResults = Backbone.Collection.extend({

  url: "api/search",

  parse: function (load) {
    // if (load.total_count) {
    //   this.total_count = load.total_count
    // }
    return load.results;
  },

  model: function (attrs) {
    var type = attrs._type;
    delete attrs._type;

    return new Colornote.Models[type](attrs);
  }

})
