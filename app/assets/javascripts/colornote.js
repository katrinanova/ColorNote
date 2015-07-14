window.Colornote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    new Colornote.Routers.Router;
    Backbone.history.start();
  }
};
