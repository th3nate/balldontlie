# Diagram
![Flow chart](./public/diagram.svg)

# Components
### App Component
- This is the root component rendering everything.
- Holds the state for favorite players, background color and filtering.
- Implements a method for fetching data through the API service layer.
- Featuring two panels:
  - #### Left Panel
    - Responsible for fetching and displaying (Using the Generic List Component) the list of players. 
    - Implements filtering functionality.
    - Handles marking players as favorites.
    - Communicates with the API service to fetch player data.
  - #### Right Panel
    - Displays (Using the Generic List Component) the list of favorite players.
    - Implements the removal of players from the favorites list.

### Generic List Component
- Allows passing a state and display it with control over styling and typing

### Header Component
- Displays UI title
- Implements a 3rd-party library for color picking.
- Allows changing the right panel background color.

# Services
### API Service
- Handles API requests to fetch players data.
- Utilizes the 'https://www.balldontlie.io/api/v1/players' endpoint.
- Interfaces: 
  ```typescript
  interface Team {
    id: number,
    abbreviation: string,
    city: string,
    conference: string,
    division: string,
    full_name: string,
    name: string,
  }
  
  interface Player {
    id: number,
    first_name: string,
    height_feet: number,
    height_inches: number,
    last_name: string,
    position: string,
    team: Team,
    weight_pounds: number,
  }
  ```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
