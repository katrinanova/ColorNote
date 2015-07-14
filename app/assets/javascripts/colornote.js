window.Colornote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    var ColornoteNotes = new Colornote.Collections.Notes();
    new Colornote.Routers.Router;
    Backbone.history.start();
  }
};
