window.Colornote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    Colornote.notes = new Colornote.Collections.Notes();
    Colornote.notebooks = new Colornote.Collections.Notebooks();
    new Colornote.Routers.Router;
    Backbone.history.start();
  }
};
