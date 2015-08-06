Colornote.Views.NoteNew = Backbone.View.extend({
  template: JST["notes/new"],

  className: "note-new",

  events: {
    "click .done-note": "submit",
    "click .cancel-note": "goBack"
  },

  initialize: function(options) {
    this.listenTo(Colornote.notebooks, "sync", this.render);

    this.notebooks = options.notebooks;
  },

  render: function() {
    var content = this.template({note: this.model, notebooks: Colornote.notebooks});
    this.$el.html(content);
    return this;
  },


  submit: function(event) {
    event.preventDefault();

    var notebook_id = this.$("#note-notebook-id").val();
    var color = this.$("#note-color").val();
    var title = this.$(".nnnote-title").val();
    var body = this.$(".nnnote-body").val();
    var file = this.$(".fffile")[0].files[0];

    var formData = new FormData();
    formData.append("note[notebook_id]", notebook_id)
    formData.append("note[title]", title);
    formData.append("note[body]", body);
    formData.append("note[color]", color);

    if (file) {
      formData.append("upload[uploded]", file)
    }

    var that = this
    this.model.saveFormData(formData, {
      success: function() {
        that.collection.add(that.model);
        Backbone.history.navigate("notebooks/" + that.model.get("notebook_id"), {trigger: true});
      }
    })
  },

  goBack: function(event) {
    event.preventDefault();
    window.history.back();
  }
});
