/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() { // IIFE
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined(); // checks to see that the allFeeds variable is defined 
            expect(allFeeds.length).not.toBe(0); // has a length of anything greater than 0
        });
        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and the URL is not empty.
         */
        it('url defined', function() {
            for(let feed of allFeeds) {
                // console.log(feed); // see the four objects within the allFeeds array + “URL” property to check for our test.
                expect(feed.url).toBeDefined(); // use toBeDefined() to check if whether or not the variable is defined
                expect(feed.url.length).not.toBe(0); // check the length // .length property of allFeeds with .not.toBe(0) to “expect” a value for the length variable to be greater than 0
            }
        });
        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined', function() { // same as above just replace with “name” property
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    /* test suite named "The menu" */
    describe('The menu', function() { // “describe” the test suite

        // test that ensures the menu element ishidden by default.
         it('menu element ishidden by default', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
         }); 

         /* test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * have two expectations: the menu display when
          * clicked and hides when clicked again.
          */

          // test whether or not the menu toggles on and off
         it('toggles on and off', function() {
            const body = document.querySelector('body'); // we also need the menu icon element
            const menu = document.querySelector('.menu-icon-link'); // query and store the menu icon element in a variable
            
            menu.click(); // use click method // The HTMLElement.click() method simulates a mouse click on an element. // it fires the element's click event. This event then bubbles up to elements higher in the document tree (or event chain) and fires their click events.
            expect(body.classList.contains('menu-hidden')).toBe(false); // the status of the menu being hidden after a click to return should be false
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true); // need to click the menu again and check the menu’s status = set to true 
         }); 

    });

    /* new test suite named "Initial Entries" */
    describe('Initial Entries', function(){

        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) { // pass a function that let our Jasmine test know that our before each function has “finished” and proceed with our test // use Jasmine's done
            loadFeed(0, function(){ // beforeEach function, we call loadFeed() for the first index, 0.
                done(); 
            }); 
        });

        it('completes work', function() {
            const feed = document.querySelector('.feed').querySelectorAll('.entry');
            expect(feed.length > 0).toBe(true); // must grab only the elements that have .entry as their class and are inside the .feed element.
            // And then check that the number of elements you have selected is more than 0.
        });
    });

    /* new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed');
        const firstFeed = []; // first feed’s content in a new empty array 

        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        beforeEach(function(done) { // pass a function that let our Jasmine test know that our before each function has “finished” and proceed with our test // use Jasmine's done
            loadFeed(0, function() { // loadFeed() is an asynchronous function. 
                Array.from(feed.children).forEach(function(entry){ // convert the feed’s children elements into an array list // loop over each “entry”
                    firstFeed.push(entry.innerText); // pushing the innerText to our firstFeed array
                });
             // beforeEach function, we call loadFeed() for the first index, 0.
                loadFeed(1, function(){
                    done(); 
                }); // need to load 2 different feeds and check that the feed content changes
            });
        });
        // test that when a new feed is loaded by loadFeed function that the content changes 
        it('content changes', function() {
            Array.from(feed.children).forEach(function(entry, index) { // convert the feed children into an array and loop over each “entry”
                expect(firstFeed[index]).not.toBe(entry.innerText); // load the second feed as a callback of the first loadFeed function.
            }); 
        });
    });
}());
