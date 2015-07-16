Colornote.Models.CurrentUser = Backbone.Model.extend({
  url: "/session",

  notebooks: function() {
    this._notebooks = this._notebooks ||
      new Colornote.Collections.Notebooks();   //([], {user: this})
    return this._notebooks;
  },

  parse: function(load) {
    if (load.notebooks) {
      this.notebooks().set(load.notebooks);
      delete load.notebooks;
    }
    return load;
  }
})
