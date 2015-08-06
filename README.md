# Color-note

[https://colornote.herokuapp.com/][heroku]

[heroku]: http://colornote.herokuapp.com/

## Features

ColorNote app allows users to create notes, organize them in notebooks and share notes freely through the provided links. Notes can also have various file attachments. Notes can be organized by color.

As an option, user can login with twitter account.

I designed the website to have a consistent interface throughout the notes-index view, single notebook-view or search-view.

The search allows user to select from notebooks and notes at the same time, which I achieved with PgSearch library’s Multi-search.

The selected or first note’s view is always present on the page. The user can edit the note in place, which is saved automatically.

The user can easily get a link to share the chosen note by clicking on the “share icon”.

 Users can:

- [√] Create accounts
- [√] Create sessions (log in)
- [√] Create notebooks
- [√] Create notes in notebooks
- [√] Save or edit notes automatically
- [√] Add file to note
- [√] Add link to source of note if applicable
- [√] Share link to note
- [√] Search for notes and notebooks simultaneously

## Languages

- Ruby
- Javascript
- HTML/CSS


## Frameworks

- Ruby on Rails
- backbone.js


## Libraries and Technologies

-	jQuery / AJAX
-	paperclip / AWS
-	pg_search
- kaminari
- figaro
- jbuilder
- omniauth

### Future Features
- [ ] Facebook Omniauth
- [ ] Add friends
- [ ] Have public notes and private notes
- [ ] Share notes with certain groups of friends
- [ ] Make a screenshot of a webpage
- [ ] Read/Create/Edit a note simultaneously with a friend
- [ ] Leave comment for a note
- [ ] Leave comment for a comment
- [ ] Like note/comment
