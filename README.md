# Project Title

Feed Reader Testing

## About the project

In this project we are given a web-based application that reads RSS feeds and we need to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation. Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript. 

### Prerequisites

Need to use Jasmine to write a number of tests against a pre-existing application

### Getting started

- Download or clone the Feed Reader Testing starter code
- Open the jasmine folder, then look for the spec folder. Inside the spec folder you will find the feedreader.js where I've written the   tests
- Open the index.html file in your browser to review the functionality of the application

### Running the application

- Open the [index.html](index.html) file in your browser
- I wrote the tests in the feedreader.js file and the test results will appears at the bottom of the index.html page.

## Jasmine Testing

* The tests was written in the feedreader.js and to better understand the project and reason for testing we must closely investigate the app.js and index.html files. Below are the main tests specifications: 

- Make sure that the allFeeds variable has been defined and that it is not empty.
- Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
- Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're     performing the hiding/showing of the menu element.
- Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the   menu display when clicked and does it hide when clicked again.
- Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element         within the .feed container. Remember, loadFeed() is asynchronous so this test will require the use of Jasmine's beforeEach and           asynchronous done() function.
- Write a new test suite named "New Feed Selection"
- Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed()     is asynchronous.

## Technical

This project includes:
 - `CSS folder` containing: icomoon.css, normalize.css, style.css
 - `fonts folder` containing: icomoon.eot, icomoon.zvg, icomoon.ttf, icomoon.woff
 - `jasmine folder` containing: feedreader.js
 - `JS folder` containing: app.js
 - `HTML file` index.html
 - `README file` README.md
 
## Authors

* **Daniel Lodewikus Meyer** - [MeyerDL](https://github.com/MeyerDL)

## Acknowledgments

* Udacity provided the starter code 
