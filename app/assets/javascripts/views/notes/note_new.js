Colornote.Views.NoteNew = Backbone.View.extend({
  template: JST["notes/new"],

  className: "note-new",

  events: {
    "click .done-note": "submit"
  },

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(Colornote.currentUser, "sync", this.render)
  },

  render: function() {
    var content = this.template({note: this.model, notebooks: this.collection});
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
        debugger
    var that = this
    event.preventDefault();
    var params = this.$("form").serializeJSON();

    this.model.set(params);
    this.model.save({}, {
      success: function() {
        that.collection.add(that.model);
        debugger
        Backbone.history.navigate("notes/" + that.model.id, {trigger: true});
      }
    })
  }
});
