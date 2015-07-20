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
    var that = this
    event.preventDefault();
    var params = this.$("form").serializeJSON();

    this.model.set(params);
    this.model.save({}, {
      success: function() {
        that.collection.add(that.model);
        Backbone.history.navigate("", {trigger: true});
      }
    })
  },

  goBack: function(event) {
    event.preventDefault();
    window.history.back();
  }
});
