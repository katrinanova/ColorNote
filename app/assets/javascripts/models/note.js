Colornote.Models.Note = Backbone.Model.extend({
  urlRoot: '/api/notes',

  parse: function (load) {
    this.notebook().set(load.notebook);
    delete load.notebook;
    return load;
  },

  notebook: function() {
    this._notebook = this._notebook || new Colornote.Models.Notebook();
    return this._notebook;
  }

})
