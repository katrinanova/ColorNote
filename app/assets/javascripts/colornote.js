window.Colornote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    var ColornoteNotes = new Colornote.Collections.Notes();
    var ColornoteNotebooks = new Colornote.Collections.Notebooks();
    new Colornote.Routers.Router;
    Backbone.history.start();
  }
};
