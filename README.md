# Muscler (Frontend)

Muscler is essentially a Twitter for workouts. Instead of making a "tweet", a user can create a new exercise routine, which consists of a name, description, and a list of exercises with their respective reps and sets. On the home page, a user will see an index of exercise routines. If they click on the button "Show Routine", a modal that displays all of the exercises associated with that routine will show up. 

This app was built with a Ruby on Rails backend and a React.jsx frontend. Most of the coding was done in Javascript, with some HTML. The styling was done with both bootstrap and some custom CSS.

## Installation

```
npm install
```

## Usage

```
npm run dev
```

You'll need to have the backend code (https://github.com/neilellison/fitness-app-api.git) running on http://localhost:3000.
You can view the app on http://localhost:5173.

## Roadmap

Although this app is fairly functional, there are a few additions I would like to make. I plan on adding a "likes" model where users can like certain routines, which would then show up in a "Likes" section of the User's show page. I would also like to add a feature where users can comment on different routines, and maybe even give them a rating of 1-5.
