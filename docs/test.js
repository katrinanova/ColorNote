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
        success: function() {
          if (!file) { that.silent = true };


          that.collection.add(that.model, { merge: true })
        }
      });
    }
  })
}








json.upload_urls note.uploads do |upload|
  asset_path(upload.uploaded.url(:original))
end



note show:

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





























json.notebook do
  json.(note.notebook, :id, :title, :updated_at)
end
json.upload_urls note.uploads do |upload|
  asset_path(upload.url(:original))
end











<div class="left">

  <h2>NOTES</h2>


  <% if (notes.length === 1) { %>
    <div class="note-count">1 note</div>
  <% } else { %>
    <div class="note-count"><%= notes.length %> notes</div>
  <% } %>

  <ul class="notes-clickable">
  <% notes.forEach(function(note){ %>
    <li class="note-clickable" data-id="<%=note.escape("id")%>"><%= note.escape("title") %></li>
  <% }) %>
  </ul>
</div>

<div class="note-show"></div>




<div class="right">
  <h2>EDIT NOTE</h2>

  <form>
  <label>Move note:
  <select name="notebook_id">
    <option value="<%= notebook_id %>" selected><%= notebook.escape("title") %></option>
  <% theRest.forEach(function(notebook){ %>
    <option value="<%= notebook.escape("id")%>"><%= notebook.escape("title")%></option>
  <% }) %>
  </select>
  </label>
  <label>Change color:
  <select name="color">
    <option value="">None</option>
    <option value="R">RED</option>
    <option value="B">BLUE</option>
    <option value="G">GREEN</option>
  </select>
  <br>
  </label>
    <input class="note-title" type="text" name="title" value=<%= note.escape("title")%>>
    <br>
    <textarea class="note-body" name="body"><%= note.escape("body")%></textarea>
  </form>


<header>
  <% if flash[:notices] %>
    <div class="notices">
      <% flash[:notices].each do |msg| %>
        <p><b><%= msg %></b></p>
      <% end %>
    </div>
  <% end %>

</header>


/*
 * This is a manifest file that'll be compiled into application.css, which will include all the files
 * listed below.
 *
 * Any CSS and SCSS file within this directory, lib/assets/stylesheets, vendor/assets/stylesheets,
 * or any plugin's vendor/assets/stylesheets directory can be referenced here using a relative path.
 *
 * You're free to add application-wide styles to this file and they'll appear at the bottom of the
 * compiled file so the styles you add here take precedence over styles defined in any styles
 * defined in the other CSS/SCSS files in this directory. It is generally better to create a new
 * file per style scope.
 *
 *= require_tree .
 *= require_self
 */


 /*Reset CSS*/
 html, h2, h1, body, div, ul, li, form, input, button, label, a,
 select, textarea, label {
   margin: 0;
   padding: 0;
   border: 0;
   font: inherit;
   box-sizing: inherit;
   text-align: inherit;
   text-decoration: inherit;
   vertical-align: inherit;
   color: inherit;
   background: transparent;
 }

 ul {
   list-style: none;
 }

 a {
   text-decoration: none;
 }

 html {
   background: white;
   height: 100%;
   overflow: hidden;
 }

 body {

   height:100%;
   position: relative;
   overflow: hidden;
   font-family: sans-serif;
   color: grey;


 }

 .group:after {
   display: block;
   content: "";
   clear: both;
 }

/*Sidebar-----------------------------*/

 .sidebar {
   background: #4db0de;

   position: absolute;
   width: 70px;
   height: 100%;
   overflow: auto;

 }

 a {
   display: block;
   margin: 20px;
   color: white;
 }

 .logout {
   color: white;
   margin: 20px;
   display: inline;
   bottom: 0;
   /*why body is not parent?*/
 }

 #main {
   position: absolute;
   left:70px;
   width: calc(100% - 70px);
   background: pink;
   height: 100%;

 }

 /*Left side----------------------------*/

 .left {
   border-left: 2px solid darkgrey;
   border-right: 2px solid darkgrey;
   position: absolute;
   left:0px;
   width: 450px;
   background: white;
   z-index: 1;
   height: 100%;
   /*why body is not parent?*/
 }

 h2 {
   background: #8bd3b2;
   color: white;
   font-size: 26px;
   font-weight: bold;
   padding: 18px;
   border-top: 2px solid #4db0de;
   border-bottom: 2px solid #4db0de;
 }



 .note-clickable {
   padding: 20px;
   display: block;
   border-bottom: 1px solid darkgrey;
 }

 .note-clickable:hover {
   background: #8bd3b2;
   color: #4db0de;
   font-weight: bold;
 }

 .note-count {
   color: #4db0de;
   padding: 20px;
   display: block;
   border-bottom: 1px solid darkgrey;
 }


/*Right side--------------*/

 .right {
   top:0px;
   position: absolute;
   display:block;
   left: 450px;
   width: calc(100% - 450px);
   background: white;
   height: 100%;

 }

 form {
   padding:20px;
   position: absolute;
   width: calc(100% - 70px);
   height: 100%;


 }

 #note-title {
   color: #4db0de;
   padding: 20px 0;

   font-size: 18px;
 }

 textarea {

    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
}


 .note-body {
   position: absolute;
   display: block;
   color: grey;
   width: 100%;
   height: 100%;
   border: none;
   font-size: 16px;
   text-align: justify;

 }

 select {
   color: #cdcfd0;
 }

 label {
   color: #cdcfd0;
 }

.left.stretch {
   width: 100%;
 }



 /*.all-content {
   position: relative;
   width: 100%;
   height: 100%;
   background: red;*/

   /*Form-------------*/


   input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="submit"] {
    -webkit-appearance: none;
    display: inline-block;
    box-sizing: content-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    width: auto;
    font: inherit;
    vertical-align: baseline;
    background: transparent;
    color: inherit;
  }
  input[type="submit"] {
    display: inline;
    cursor: pointer;
  }

  /*Create notebook form---------------*/
  .create-notebook {
    padding: 100px 0 0 0;
    display: block;
    width: 350px;
    background: yellow;
    margin: 0 auto;
  }

  .create-notebook > input {
    background: white;
    display: block;
    margin: 0 auto;
    font-size: 28px;
    text-align: center;
  }

  .buttons {
    display: block;
    width: 350px;
    margin: 0 auto;

  }

  button {
    padding: 10px;
    background: blue;
    width: 140px;
    border-radius: 5%;
  }

  .cancel {
    float: left;
  }

  .create {
    float: right
  }

  .landing > a {
    color: black;
  }

    /*Create note form---------------*/
    .create-note > input {
      background: white;
      display: block;
      width: 100%;
      font-size: 28px;
      text-align: left;
    }

    .create-note > textarea {
      background: white;
      display: block;
      width: 100%;
      font-size: 20px;
      text-align: left;
      margin: 0;
    }

    option {
      margin: 0 auto;
    }
