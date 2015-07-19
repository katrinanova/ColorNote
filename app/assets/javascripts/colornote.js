window.Colornote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    Colornote.notes = new Colornote.Collections.Notes();
    Colornote.notes.fetch();
    Colornote.notebooks = new Colornote.Collections.Notebooks();
    Colornote.notebooks.fetch();
    Colornote.currentUser = new Colornote.Models.CurrentUser();
    Colornote.currentUser.fetch();
    new Colornote.Routers.Router;
    Backbone.history.start();
  }
};
