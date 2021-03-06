<img class="black" src="<%= image_url('clips.png')%>">


<img class="r-signup" src='<%= image_url("r-signup.png")%>'>
<img class="r-demo" src='<%= image_url("r-demo.png")%>'>
<img class="r-signin" src="<%= image_url('r-signin.png')%>">
<img class="r-twitter" src='<%= image_url("r-twitter.png")%>'>
<img class="r-facebook" src='<%= image_url("r-facebook.png")%>'>


a.l-signin:hover,
a.l-signup:hover,
a.l-demo:hover,
a.l-twitter:hover,
a.l-facebook:hover ~ img.black {
  display: none;
}









<div class="landing">
  <div class="frame2">

    <div class="clips">
      <img class="black" src="assets/clips.png">


    </div>




   <div class="signup">
    <a href="<%= new_user_url%>">Sign up <br> Now!</a>
    <img class="signup" src="assets/red-signup.png">

   </div>

    <div class="signin">
      <a href="<%= new_session_url%>">or Sign In</a>
    </div>

    <div class="twitter">
      <a href="/auth/twitter">Sign in with Twitter</a>
    </div>

  </div>


</div>







<div class="notes-clickable">
  <% notes.forEach(function(note){ %>

    <% if (note.escape("_type") === "Note") { %>
      <section class="note-clickable" data-type="Note" data-id="<%=note.escape("id")%>">
        <div class="note-title"><%= note.escape("title") %></div>
        <div class="note-body"><%= note.escape("body")%></div>
        <div class='<%="color " + note.escape("color") %>'></div>
      </section>
    <% } else { %>
      <section class="note-clickable">
        <div id="notebook-clickable" data-type="Notebook" data-id="<%=note.escape("id")%>">Notebook: </div>
        <% debugger %>
        <div class="notebook-title"><%= note.escape("title")%></div>
      </section>
    <% } %>
  <% }) %>
</div>

</div>













.note-clickable,
.notebook-clickable {
  color: grey;
  padding: 20px;
  display: block;
  border-bottom: 1px solid darkgrey;
}

.color {
  background: red;
  position: relative;
  height: 50px;


}


<meta charset="utf-8" />

<div class="left">

<% if (!book) { %>
    <h2>NOTES</h2>
    <% } %>

    <div id="search">
      🔍
    </div>

    <section class="search-window"></section>


  <% if (notes.length === 1) { %>
    <div class="note-count">1 note</div>
  <% } else { %>
    <div class="note-count"><%= notes.length %> notes</div>
  <% } %>



  <ul class="notes-clickable">
  <% notes.forEach(function(note){ %>

    <% if (note instanceof Colornote.Models.Note) { %>
      <li class="note-clickable" data-type="Note" data-id="<%=note.escape("id")%>"><%= note.escape("title") %></li>
    <% } else { %>
      <li class="note-clickable" data-type="Notebook" data-id="<%=note.escape("id")%>">Notebook: <%= note.escape("title")%>
    <% } %>
  <% }) %>
  </ul>
</div>

<div class="note-show"></div>


















Colornote.Views.NotesIndex = Backbone.CompositeView.extend({
  template: JST["notes/index"],

  className: "notes-index",

  initialize: function(options) {
    this.listenToOnce(this.collection, "sync", this.render);

    Colornote.searchResults = new Colornote.Collections.SearchResults();
    this.listenTo(Colornote.searchResults, "sync", this.renderSearch);

    this.book = options.book || false;
    this.search = false;
  },

  events: {
    "click .note-clickable": "switchNote",
    "click #search": "toggleSearchView",
    "change .query": "search"
  },

  render: function() {
    console.log("render index")
    debugger
    var content = this.template({notes: this.collection, book: this.book});

    if (this.collection.length === 0) {
      this.$el.html(content);
      this.$(".left").addClass("stretch")
      return this;
    }

    this.$el.html(content);


    if ((typeof this.currentNoteView === "undefined") && (this.collection.length > 0)) {
      var note = this.collection.first();
      // note.fetch();
      this.currentNoteView = new Colornote.Views.NoteShow({collection: this.collection, model: note}); //?
      this.addSubview(".note-show", this.currentNoteView);
    }

    this.attachSubviews();

    return this;
  },

  renderSearch: function() {
    console.log("renderSearch")
    debugger
    var content = this.template({notes: Colornote.searchResults, book: false});

    // this.$(".left").addClass("stretch")

    this.$el.html(content);

    // (typeof this.currentNoteView === "undefined") &&
    //   Colornote.searchResults.forEach(function(result) {
    //
    //     if (result instanceof Colornote.Models.Note) {
    //       var note = result
    //       this.currentNoteView = new Colornote.Views.NoteShow({collection: this.collection, model: note}); //?
    //       this.addSubview(".note-show", this.currentNoteView);
    //
    //     } else {
    //       this.$(".left").addClass("stretch")
    //     }
    //   })

    this.attachSubviews();

    return this;

  },

  switchNote: function(event) {
    event.preventDefault();
    var id = $(event.currentTarget).attr("data-id");
    var type = $(event.currentTarget).attr("data-type");

    if (type === "Notebook") {
      Backbone.history.navigate("notebooks/" + id, {trigger: true})
    }

    var note = this.collection.getOrFetch(id);
    this.removeSubview(".note-show", this.currentNoteView)
    this.currentNoteView = new Colornote.Views.NoteShow({model: note, collection: this.collection, book: this.book});
    this.addSubview(".note-show", this.currentNoteView)
  },

  toggleSearchView: function(event) {
    if (this.search) {
      this.removeSubview(".search-window", this.searchView)
      this.search = false
    } else {
      this.searchView = new Colornote.Views.Search()
      this.addSubview(".search-window", this.searchView);
      this.search = true
    }

    this.render();
  },

  search: function () {
    console.log("searching")
  }

})

































Colornote.Views.NotesIndex = Backbone.CompositeView.extend({
  template: JST["notes/index"],

  className: "notes-index",

  initialize: function(options) {
    this.listenToOnce(this.collection, "sync", this.render);

    this.searchResults = new Colornote.Collections.SearchResults();
    this.listenTo(this.searchResults, "sync", this.render);

    this.book = options.book || false;
    this.search = false;
  },

  events: {
    "click .note-clickable": "switchNote",
    "click div#search": "toggleSearchView"
  },

  render: function(options) {
    var content = this.template({notes: this.collection, book: this.book});
    this.$el.html(content);
    if (this.collection.length === 0) {
      this.$(".left").addClass("stretch")
    }


    if ((typeof this.currentNoteView === "undefined") && (this.collection.length > 0)) {
      var note = this.collection.first();
      // note.fetch();
      this.currentNoteView = new Colornote.Views.NoteShow({collection: this.collection, model: note}); //?
      this.addSubview(".note-show", this.currentNoteView);
    }

    this.attachSubviews();
    debugger

    return this;
  },

  switchNote: function(event) {
    event.preventDefault();
    var id = $(event.currentTarget).attr("data-id");
    var note = this.collection.getOrFetch(id);
    this.removeSubview(".note-show", this.currentNoteView)
    this.currentNoteView = new Colornote.Views.NoteShow({model: note, collection: this.collection, book: this.book});
    this.addSubview(".note-show", this.currentNoteView)
  },

  toggleSearchView: function(event) {
    if (this.search) {
      remove
      this.search = false
    } else {
      var searchView = new Colornote.Views.Search()
      this.addSubview(".search-window", searchView);
      this.search = true
    }
  }
})














<h2>Search for Note or Notebook:<h2>

<input type="text" class="query">

<section class="results">
  <% results.forEach(function (result) { %>
    <article>
      <% if (result instanceof Colornote.Models.Note) { %>
        Note: <%= result.escape("title") %>
      <% } else { %>
        Notebook: <%= result.escape("title")%>
      <% } %>
    </article>
  <% }) %>
</section>










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
