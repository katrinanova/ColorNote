Colornote.Models.Notebook = Backbone.Model.extend({
  urlRoot: '/api/notebooks',

  notes: function () {
    this._notes = this._notes ||
      new Colornote.Collections.Notes([], { notebook: this }); //used it in collection
    return this._notes;
  },

  parse: function (load) {
    if (load.notes) {
      this.notes().set(load.notes);
      delete load.notes
    }
    return load;
  }
});
