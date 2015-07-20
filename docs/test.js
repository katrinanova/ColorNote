<% console.log("notes in notes_index: ") %>
<% console.log(notes) %>


{"notes":[{"id":1,"title":"title!","body":null,"notebook_id":1},{"id":2,"title":"423rqw","body":null,"notebook_id":1}]}

[{"id":1,"notebook_id":1,"title":"title!","body":null,"created_at":"2015-07-17T14:25:12.484Z","updated_at":"2015-07-17T14:25:54.658Z"},{"id":2,"notebook_id":1,"title":"423rqw","body":null,"created_at":"2015-07-17T14:58:19.886Z","updated_at":"2015-07-17T14:58:19.886Z"}]



<h2>Show/edit note</h2>

<%= note.escape("title") %>
<br>
<br>
<%= note.escape("body") %>

events: {
  "keyup:title keydown:title keyup:title keydown:title": "saveNote"
},


<header>
  <% if flash[:notices] %>
    <div class="notices">
      <% flash[:notices].each do |msg| %>
        <p><b><%= msg %></b></p>
      <% end %>
    </div>
  <% end %>

</header>
