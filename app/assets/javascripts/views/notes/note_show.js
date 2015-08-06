Colornote.Views.NoteShow = Backbone.View.extend({
  template: JST["notes/show"],

  className: "right",


  initialize: function(options) {
    this.listenTo(Colornote.notebooks, "sync", this.render);
    // this.listenTo(this.model, "change:color", this.model.trigger("add"));
    // trigger something to cause collection trigger sync?



  //   this.listenTo(this.model, "sync", function() {
  //     if (this.silent) {
  //       this.silent = false;
  //       return;
  //     } else {
  //     this.render();
  //   };
  // });
  //   this.book = options.book;
  },
  // get rid of silent, not using anymore


  events: {
    "keyup": "saveNote",
    "keydown": "saveNote",
    "change #note-file": "saveNote",
    "change #note-notebook-id": "saveNote",
    "change #note-color": "saveNote"
  },

  render: function() {
    var that = this;
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

    this.$el.html(content);
    if (this.model.get("uploads")) {
      this.model.get("uploads").forEach(function(upload) {
        if (upload.ttype.match("image")) {
          that.$(".images").append("<img src=" + upload.url + ">")
        } else {
          that.$(".files").append('<a href="' + upload.url + '">' + "📎" + upload.name + '</a>')
        }
      })
    }

    return this;
  },



  // saveNote: function() {
  //   var that = this;
  //   this.model.save(null, 123, { silent:true })
  // // }

  saveNote: function(event) {

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

    $.ajax({
      url: _.result(this.model, "url"),
      type: "PUT",
      data: formData,
      processData: false,
      contentType: false,
      success: function(resp) {
        that.model.set(that.model.parse(resp));

        if (file) { that.model.trigger("sync") };
        that.collection.add(that.model, { merge: true })

      }
    })
  }
});
