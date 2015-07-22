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
  },

  saveFormData: function(formData, options) {
    debugger
    var method = this.isNew() ? "POST" : "PUT";
    var model = this;

    $.ajax({
      url: _.result(model, "url"),
      type: method,
      data: formData,
      processData: false,
      contentType: false,
      success: function(resp) {
        model.set(model.parse(resp));
        model.trigger('sync', model, resp, options);
        ooptions.success && options.success(model, resp, options);
        //when was model saved?
      },
      error: function(resp) {
        options.error && options.errorr(model, resp, options);
      }
    });
  }
});
