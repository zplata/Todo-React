# Task It

Are you struggling to keep track of all the things you need to do on a daily basis? Are you constantly stressed about forgetting your tasks? Do you want a simple and easy to use app to track all the things in your life? Check out this app, Task It! Task It is an application that allows you to keep track of a list of things you need to do, as well as completed tasks you have already done, because who doesn't love seeing progress? You can enter tasks and check them off when they're completed on the webpage. And don't worry about accidentally hitting the refresh button or closing out your tab. Task It remembers your tasks in the appropriate category.

## Technical Details

This project is a simple single-page application built purely in React. The base of the project comes from [create-react-app](https://github.com/facebook/create-react-app) to handle much of the starter setup. The component library used here is based off the [Materialize](https://materializecss.com/) design through a React components implementation, called [Material UI](https://material-ui.com/). It is a responsive application that adjusts at all screen sizes.

One special added feature for the application is that tasks (the state) are stored in `localStorage` to persist tasks to their respective categories on a page refresh. 

## Setup

To setup the project locally, ensure you have Node and npm installed. Then run the following command at the base of the project directory:

```
npm install
```

## Local Development

To run the app locally on your machine, run the following command:

```
npm run start
```

Because of the wonders of `create-react-app` setup, any changes made locally to source code will be picked up automatically and refreshed in the browser.

## Linting

This application uses ESLint to do static analysis checking of the source code, based off the Airbnb style guide. To lint the code, run the following command:

```
npm run lint
```

## Testing

This application uses Jest testing for unit tests of the source code. To test the code, run the following command:

```
npm run test
```

## Things left To Do (ha. ha.)

1. Add a logo to the header (give it more life!)
2. Add a red 'X' clickable icon on each task item to allow it to be deleted from the application
3. Add a 'Clear all' button on both "My Tasks" and "Completed Tasks" to allow the user to delete each respective list (and the user's local cache)
4. Replace the ID logic (currently just using it's current position in the array when it was created), with a UUID
5. Finish tests
6. Add ability to hide "Completed Tasks" list by sliding it to the right side of the screen
