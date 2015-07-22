Colornote.Views.NoteNew = Backbone.View.extend({
  template: JST["notes/new"],

  className: "note-new",

  events: {
    "click .done-note": "submit",
    "click .cancel-note": "goBack"
  },

  initialize: function(options) {
    // this.listenTo(this.collection, "sync", this.render);
    // this.listenTo(Colornote.currentUser, "sync", this.render);
    this.listenTo(Colornote.notebooks, "sync", this.render);

    this.notebooks = options.notebooks;
  },

  render: function() {
    console.log("render NoteNew");
    var content = this.template({note: this.model, notebooks: Colornote.notebooks});
    this.$el.html(content);
    return this;
  },


  submit: function(event) {

    event.preventDefault();

        debugger


    var notebook_id = this.$("#note-notebook-id").val();
    var color = this.$("#note-color").val();
    var title = this.$("#note-title").val();
    var body = this.$("#note-body").val();
    var file = this.$("#note-file")[0].files[0];

    var formData = new FormData();
    formData.append("note[notebook_id]", notebook_id)
    formData.append("note[title]", title);
    formData.append("note[body]", body);
    formData.append("note[color]", color);

    if (file) {
      console.log("in if")
      formData.append("upload[uploded]", file)
    }

    var that = this
    this.model.saveFormData(formData, {
      success: function() {
        that.collection.add(that.model);
        Backbone.history.navigate("notebooks/" + that.model.get("notebook_id"), {trigger: true});
        // shouldn't i go to notebook id?
      }
    })
  },

  goBack: function(event) {
    event.preventDefault();
    window.history.back();
  }
});
