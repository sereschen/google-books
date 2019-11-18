This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## NurseFly Coding Test - Instructions:

This project assumes you have familiarity with React, javascript, and basic web development. If at any time you have
questions or get stuck, feel free to reach out to your interviewer.

We'll need node version 10.13.0 to run this project. We recommend using `nvm` to quickly switch between node versions.

You are going to create a basic interface that allows you to:

1. Search for books using the Google Books API.
2. Display the results on screen.
3. "Favorite" those books into a favorites list.

Do not worry about setting up user auth. We are assuming that was handled already.
Assume you are logged in as a registered user.

Anything beyond this is extra. We would like to limit time spent on this project to 2 hours.

TODO: insert Rick and Morty SHOW ME WHAT YOU GOT meme here

TO DECIDE: include more detailed task list, or let them figure it out? i.e. you will need to implement a reducer, async actions, pull data, create components, add styles, blah blah;

To get up and running:

1. Clone the repo into a new project
2. Make sure you have `yarn` installed
3. Run `yarn install` to download dependencies (a brief summary of the libraries used is listed below these instructions)
4. Further commands for running the app are listed below
5. Get google books api keys from interviewer.

A brief overview of the libraries that are included in this app:
axios: makes http calls
prettier: formats code consistently
react-router-dom: router for navigating urls
redux: state management
redux-logger: debugging tool that displays state changes in your browser
redux-thunk: allows you to make dispatch asynchronous actions to redux store

Google Books API is use is described here:
https://developers.google.com/books/docs/v1/getting_started

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
