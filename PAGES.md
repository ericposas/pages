# Pages - App

## TODO
 - Add an edit/delete feature on the text items 

## Features

### Main function
 - Create collections of pages that can hold any sort of content (links, plain text, etc.)
 - Add user accounts and authentication

### A Page
 - A page can hold links or plain text
 - Pages can be combined into a "bound" collection or "book"


### Maybes
 - Add support for letting other users view others pages (if approved)
 - Add video embed and image embed support


## Flow

- User signs up
- From main "profile" page, a user can click the "+" button to add a page
- Within the page the user can click another "+" button to add a link or text element
  + when the "add a link or text +" button is clicked, an input field appears
  + each link or text element can be deleted by tapping the "x" button
- A page can be deleted by clicking a trash can icon
  + a prompt will appear to ask the user if they are sure they want to delete the page
- Pages can be dragged on top of each other to combine them into a "book"
- The main user "profile" will show all of a users individual pages or books


## Data Model

{
  // display list with two types, "book" and "page", on the main profile page
  pages: {
    page1: [ link1, link2, ... ]
    page2: [ link1, link2, link3, ... ]
  },
  books: {
    book1: {
      page1: [ link1, ... ],
      page2: [ link1, link2, link3, ... ],
      page3: [ link1, link2, ... ]
    },
    book2: {
      page1: [ link1, ... ],
      page2: [ link1, link2, ... ]
    }
  }
}
