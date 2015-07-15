Colornote.Views.NoteNew = Backbone.View.extend({
  template: JST["notes/new"],

  className: "note-new",

  events: {
    "click .create": "submit"
  },

  initialize: function(){

  },

  render: function() {
    var content = this.template({note: this.model});
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
        Backbone.history.navigate("notes/" + that.model.id, {trigger: true});
      }
    })
  }
});
