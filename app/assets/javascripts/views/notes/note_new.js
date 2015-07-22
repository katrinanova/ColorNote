Colornote.Views.NoteNew = Backbone.View.extend({
  template: JST["notes/new"],

  className: "note-new",

  events: {
    "click .done-note": "submit",
    "click .cancel-note": "goBack"
  },

  initialize: function(options) {
    this.listenTo(this.collection, "sync add", this.render);
    this.listenTo(Colornote.currentUser, "sync", this.render);
    this.listenTo(Colornote.notebooks, "sync add", this.render);

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

    var title = this.$("#note-title").val();
    var body = this.$("#note-body").val();
    var file = this.$("#note-file")[0].files[0];

    var formData = new FormData();
    formData.append("note[title]", title);
    formData.append("note[body]", body);
    //how do I upload to different tables?
    formData.append("upload[uploded]", file)

    var that = this
    this.model.saveFormData(formData, {
      success: function() {
        that.collection.add(that.model);
        Backbone.history.navigate("notebooks/" + that.model.id, {trigger: true});
      }
    })
  },

  goBack: function(event) {
    event.preventDefault();
    window.history.back();
  }
});
