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
