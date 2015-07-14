# Color-note

[Heroku link][heroku]

[heroku]: http://

## Minimum Viable Product
Colornote is a clone of Evernotr built on Rails and Backbone. Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create notebooks
- [ ] Create notes in notebooks
- [ ] Save or edit notes automatically
- [ ] Add image to note
- [ ] Add link to source of note if applicable
- [ ] Share link to note
- [ ] Share notebook
- [ ] Typeahead search bar

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. The most important part of this phase will be pushing the app to Heroku and ensuring that everything works before moving on to phase 2.

[Details][phase-one]

### Phase 2: Creating Notebooks and Notes via Backbone (~2 days)
I will add API routes to serve notebook and note data as JSON, then add Backbone models and collections that fetch data from those routes. The 'NotesShow' view will be implemented as Backbone composite view. By the end of this phase, users will be able to create notebook and notes inside a Backbone app.

[Details][phase-two]

### Phase 3: Editing and Displaying Notes (~2 days)
I plan to use third-party libraries to add functionality to the `NoteForm` and
`NoteShow` views in this phase. First I'll need to add a Markdown editor to the
`NoteForm`, and make sure that the Markdown is properly escaped and formatted in
the `NoteShow` view. I also plan to integrate Filepicker for file upload so
users can add images to notes.

[Details][phase-three]

### Phase 4: Sharing Notes and Notebooks (~1-2 days)

I will add a functionality to extract and hash the link to notebook
or single note and send it via email.

[Details][phase-four]

### Phase 5: Searching for Notes (~2 days)
I'll need to add `search` routes to Notes controller. On the
Backbone side, there will be a `SearchResults` composite view.
This view will use notes collection, but it will fetch from
the new `search` route.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Add friends
- [ ] Have public notes and private notes
- [ ] Share notes with certain groups of friends
- [ ] Make a screenshot of a webpage
- [ ] Read/Create/Edit a note simultaneously with a friend
- [ ] Leave comment for a note
- [ ] Leave comment for a comment
- [ ] Like note/comment

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
