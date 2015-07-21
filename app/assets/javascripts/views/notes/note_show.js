Colornote.Views.NoteShow = Backbone.View.extend({
  template: JST["notes/show"],

  initialize: function(options) {
    this.listenTo(Colornote.notebooks, "sync", this.render);
    this.listenTo(this.model, "sync", function() {
      if (this.silent) {
        this.silent = false;
        return;
      } else {
      this.render();
    };
  });
    this.book = options.book;
  },


  events: {
    "keyup": "saveNote",
    "keydown": "saveNote",
  },

  render: function() {
    // var notebook_id = this.model.get("notebook_id");

    // var notebook = Colornote.notebooks.getOrFetch(notebook_id);
    // why I get in inf loop? if I fetch notebook sync triggered on collection?

    // var notebook = Colornote.notebooks.get(notebook_id);

    var notebook = this.model.notebook();
    var theRest = Colornote.notebooks.clone()
    theRest.remove(notebook);
    // var content = this.template({note: this.model, notebook_id: notebook_id, notebook: notebook, theRest: theRest});

    // it gives me Cannot read property 'escape' of undefined
    // but later rerenders ok

    var content = this.template({note: this.model, notebook: notebook, theRest: theRest, book: this.book});

    this.$el.html(content);
    return this;
  },

  saveNote: function(event) {

    var letter = event.keyCode
    var that = this;
    var params = this.$("form").serializeJSON();
    this.model.set(params);
    this.model.save({}, {
      silent: true,
      success: function() {
        that.silent = true

        that.collection.add(that.model, { merge: true })
      }
    });
    // debugger
    // console.log("saved")
  }
  //
  // saveNote: function() {
  //   var that = this;
  //   this.model.save(null, 123, { silent:true })
  // // }



})
