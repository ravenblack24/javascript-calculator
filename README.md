# React Javascript Calculator
> Repository for my solution to the freeCodeCamp front-end libraries Javascript Calculator challenge.

## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)
* [Contact](#contact)

## General info
This app was built to satisfy and subsequently validated against the following User Stories:

- **User Story #1**: My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".

- **User Story #2**: My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".

- **User Story #3**: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".

- **User Story #4**: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".

- **User Story #5**: My calculator should contain a clickable element with an id="clear".

- **User Story #6**: My calculator should contain an element to display values with a corresponding id="display".

- **User Story #7**: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.

- **User Story #8**: As I input numbers, I should be able to see my input in the element with the id of display.

- **User Story #9**: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

- **User Story #10**: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

- **User Story #11**: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

- **User Story #12**: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

- **User Story #13**: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 x (-5)).

- **User Story #14**: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

- **User Story #15**: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Technologies
* React.js, vanilla Javascript and react-helmet

## Setup
In the project directory you should run:

`npm install`

Installs the required libraries.

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
The app is ready to be deployed!

## Status
Project is complete and an [interactive demo is available here](https://ravenblack24.github.io/javascript-calculator/).

## Contact
Created by [Kay Pea](https://imkp.co.uk) - feel free to contact me!