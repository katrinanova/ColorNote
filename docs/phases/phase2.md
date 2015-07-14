# Phase 2: Viewing Blogs and Posts

## Rails
### Models

### Controllers
Api::NotebooksController (create, destroy, index, show)
Api::NotesController (create, destroy, index, show, update)

### Views
notebooks/index.json.jbuilder

## Backbone
### Models
* Notebook
* Note

### Collections
* Notebooks
* Notes

### Views
* NotebooksIndex
* NotebooksNew
* NotebooksShow (composite view, contains NotesIndex and NotesShow subviews)
* NotesIndex (composite view, contains NotesShow subview)
* NotesShow allows to edit and saves note automatically.

## Gems/Libraries
