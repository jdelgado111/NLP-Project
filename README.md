# NLP-Project

## Description
A simple webpage that uses the MeaningCloud API to analyze the text in a webpage provided by the user. This project was 

## Requirements
This project runs on a local server and requires Node to run. If you don't have Node already installed on your machine, you can download it [**here**](https://nodejs.org/en/download/).

## Installation
If Node is installed, simply type

```
npm install
```
on the command line to install all the required packages.


## Instructions
To run in development mode, type
```
npm run build-dev
```
which will automatically open the webpage on your default browser. Note that this version cannot perform the POST request necessary for the API call to function.


To run in production mode, type
```
npm run build-prod
```
followed by
```
npm start
```
then use your browser to navigate to localhost:8080 to view the page.


This project includes unit testing with the Jest framework. To run the tests, type
```
npm run test
```

Once the webpage has loaded, the form will accept any URL with an http or https protocol.  Enter an URL and press the submit button to view the analysis of the text.
