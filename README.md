https://abayon-postit.herokuapp.com/

# IH Christmas project

Let's create a simple blog to practise CRUD with express!

Live demo: https://ih-christmass-project.herokuapp.com/

## Project setup

Your project MUST follow this structure. You'll need to create files manually :).

```
├── README.md
├── app.js
├── config
│   └── routes.config.js
├── controllers
│   └── posts.controller.js
├── models
│   └── post.model.js
├── package.json
├── public
│   └── stylesheets
│       └── style.css
└── views
    ├── layout.hbs
    ├── partials
    │   └── navbar.hbs
    └── posts
        ├── detail.hbs
        ├── edit.hbs
        ├── list.hbs
        └── new.hbs
```

You'll need to install (and configure) `express`, `hbs`, `morgan` and `nodemon` npm dependencies and use `app.js` as your main program file.

Your project MUST respond to the following npm commands:

- `npm run dev`
- `npm start`

## Routes

Your web site MUST use the following HTTP routes:

- __GET /posts__: render the list of posts.
- __GET /posts/:id__: render post detail.
- __GET /posts/new__: render HTML form to create a new post.
- __POST /posts__: create a new post and redirect to post detail.
- __GET /posts/:id/edit__: render HTML form to edit post.
- __POST /posts/:id__: edit post and redirect to post detail.
- __POST /posts/:id/delete__: delete post and redirect to posts list.

## Post model

We provide the `Post` class as an interface to manipulate an (in-memory) array of posts.

You don't need to modify this file.

import `models/post.model.js` file and use it's API:

- `find()`: returns a Promise with the array of posts.
- `create(post)`: receives post object, returns a Promise with the created post (or error).
- `findById(id)`: receives id string, returns a Promise with the target post (or error).
- `findByIdAndDelete(id)`: receives id string, returns a Promise with the deleted post (or error).
- `findByIdAndUpdate(id, post)`: receives id string and post update object. returns a Promise with the updated post (or error).

## UI

use hbs to create your UI. It MUST contain the following content:

- Menu to navigate between site sections
- Home page
- List of posts
- Buttons to edit/delete posts
- Link to visit post detail
- Form (with validation) to create/edit post
- Layout
- Some custom CSS

----------------------

Good luck!