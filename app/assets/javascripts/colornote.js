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
    Colornote.colors = ["Red", "Blue", "Green", "None"]
    new Colornote.Routers.Router;
    Backbone.history.start();
    Colornote.triggerNotesIndex()
  },

  triggerNotesIndex: function() {
    $('body').on('click', 'a#notes', function(e){
        Backbone.history.loadUrl(Backbone.history.fragment);
    });
  }
};
