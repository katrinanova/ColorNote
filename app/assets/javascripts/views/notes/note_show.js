Colornote.Views.NoteShow = Backbone.View.extend({
  template: JST["notes/show"],

  // initialize: function() {
  //   this.listenTo(this.model, "sync", function(this.model, resp, options){
  //     if (options.silent) {
  //       return } else {
  //         this.render }.bind(this));
  // },

  events: {
    "keyup": "saveNote",
    "keydown": "saveNote",
  },

  render: function() {
    console.log("rendering")
    var content = this.template({note: this.model});
    this.$el.html(content);
    return this;
  },

  saveNote: function() {
    var that = this;
    this.model.save({}, {
      success: function() {
        that.collection.add(that.model, { merge: true })
      }
    }, { silent:true })
  }

  // saveNote: function() {
  //   var that = this;
  //   this.model.save(null, 123, { silent:true })
  // }



})
