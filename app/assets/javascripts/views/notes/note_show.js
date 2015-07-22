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
    // "change #note-file": "saveNote"
  },

  render: function() {
    console.log("rendering note show")
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

    var content = this.template({note: this.model, notebook: notebook, notebooks: Colornote.notebooks});

    if (this.model.uploads) {

    }

    this.$el.html(content);
    return this;
  },



  // saveNote: function() {
  //   var that = this;
  //   this.model.save(null, 123, { silent:true })
  // // }

  saveNote: function(event) {



    var notebook_id = this.$("#note-notebook-id").val();
    var title = this.$("#note-title").val();
    var body = this.$("#note-body").val();
    var file = this.$("#note-file")[0].files[0];

    var formData = new FormData();
    formData.append("note[notebook_id]", notebook_id)
    formData.append("note[title]", title);
    formData.append("note[body]", body);

    if (file) {
      console.log("in if")
      formData.append("upload[uploded]", file)
    }

    var that = this

    $.ajax({
      url: _.result(this.model, "url"),
      type: "PUT",
      data: formData,
      processData: false,
      contentType: false,
      success: function(resp) {
        that.model.set(that.model.parse(resp));
        that.model.save({}, {
          silent: true,
          success: function() {
            that.silent = true

            that.collection.add(that.model, { merge: true })
          }
        });
      }
    })

  }
});
