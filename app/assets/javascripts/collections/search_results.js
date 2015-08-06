Colornote.Collections.SearchResults = Backbone.Collection.extend({

  url: "api/search",

  parse: function (load) {
    return load.results;
  },

  model: function (attrs) {
    var type = attrs._type;
    delete attrs._type;

    return new Colornote.Models[type](attrs);
  }

})
