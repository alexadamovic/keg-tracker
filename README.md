# Tapper: Components and State Management in React

![image](/src/img/logo.png)

#### A JavaScript application built with React and Node.js

#### By Alex Adamovic

## Technologies Used

* _React_
* _JavaScript_
* _HTML_
* _CSS_

### Dependencies
##### _This project was built using [Node.js v16.x] and utilizes the following dependencies:_

* _React-Bootstrap_
* _Webpack_

## Description

_This React web application, made to be used as a keg management and taproom display tool, lets a user add kegs to a dynamically updating list by passing props from parent to child components and setting state in a single class component, KegControl (see infographic below). From the main page, the user is able to view all of the kegs, including information about the name, brand, price, abv, and pints left. The user is also able to navigate to a detail view for each keg where they are able to delete the keg if needed and decrement the amount of pints left when one is sold, giving the application near full CRUD functionality. This application is meant to showcase proper use of functional vs. class components, state management with setState(), and props handling from parent to child components._

### Component Tree Structure

![image](/src/img/keg-tracker-tree.png)

## Setup/Installation Requirements

### Project Installation

* _clone repository from https://github.com/alexadamovic/keg-tracker_
* _navigate to the project directory in your terminal/command line_
* _enter ```$ npm install``` to install project dependencies_

### Available Scripts

* _In the project directory, you can run:_

#### `npm start`

* _Runs the app in the development mode._
* _Open [http://localhost:3000](http://localhost:3000) to view it in your browser._

#### `npm test`

* _Launches the test runner in the interactive watch mode._
* _See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information._

#### `npm run build`

* _Builds the app for production to the `build` folder._
* _It correctly bundles React in production mode and optimizes the build for the best performance._
* _See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information._

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

* _If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project._
* _Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own._
* _You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it._

## Known Bugs

* _None_

## License

_MIT License_

Copyright (c) _2022_ _Alex Adamovic_

## Contact Information

alexanderadamovic@gmail.com