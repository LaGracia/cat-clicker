/* This is a mini-project for the JavaScript Design Patterns unit. 
* Each set of requirements is a quiz. Instead of overwriting the code 
* after every quiz, I have commented out the previous solution. */

/* ------------------------------------------------------------------
CAT CLICKER PREMIUM WITH OCTOPUS
------------------------------------------------------------------ */

// Wait for document to finish loading before running the enclosed functions
// http://www.w3schools.com/jquery/jquery_syntax.asp
$(function(){

    var model = {

        // Define the chosen cat as a null object by default
        chosenCat: null,

        // Array of cat names, images, initial scores
        cats: [
            {
                name: 'Tiny',
                image: 'images/cat1.jpg',
                score: 0,
            },
            {
                name: 'Blue',
                image: 'images/cat2.jpg',
                score: 0,
            },
            {
                name: 'Twins',
                image: 'images/cat3.jpg',
                score: 0,
            },
            {
                name: 'Scaredy',
                image: 'images/cat4.jpg',
                score: 0,
            },
            {
                name: 'Aristo',
                image: 'images/cat5.jpg',
                score: 0,
            },
            {
                name: 'Cutie',
                image: 'images/cat6.jpg',
                score: 0,
            },
        ]

    };

    var octopus = {

        // On load, set chosen cat to the first one in the array in the model
        init: function() {
            model.chosenCat = model.cats[0];

            // Tell the display and list views to load themselves
            displayView.init();
            listView.init();
        },

        // Get all cats from the model for the list and thumbnail views
        getCats: function() {
            return model.cats;
        },

        // Get the chosen cat from the model for the display view
        getChosenCat: function() {
            return model.chosenCat;
        },

        // Set chosen cat to match what the user clicks on in the list view
        setChosenCat: function(cat) {
            model.chosenCat = cat;
        },

        // Increment score taken from model; tell display view to update itself
        incrementScore: function() {
            model.chosenCat.score++;
            displayView.render();
        },

    };

    var displayView = {

        // On load, prepare chosen-cat elements in display section
        init: function() {
            this.chosenImg = document.getElementById('chosen-image');
            this.chosenName = document.getElementById('chosen-name');
            this.chosenScore = document.getElementById('chosen-score');

            // When user clicks on cat image, tell octopus to increment score
            this.chosenImg.addEventListener('click', function(e) {
                octopus.incrementScore();
            });

            // Call the display-view render function
            this.render();
        },

        render: function() {
            // Get info on chosen cat from the octopus; update display view
            var chosenCat = octopus.getChosenCat();
            this.chosenImg.src = chosenCat.image;
            this.chosenName.innerHTML = chosenCat.name;
            this.chosenScore.innerHTML = chosenCat.score;
        }

    };

    var listView = {

        // On load, prepare the list element in the list section
        init: function() {
            this.catList = document.getElementById('cat-list');

            // Call the list-view render function
            this.render();
        },

        render: function() {

            // Tell the octopus to get the cat array from the model
            var cats = octopus.getCats();

            // Clear any content from the list
            this.catList.innerHTML = '';

            // Loop over the cat array received from the octopus
            for (var i = 0; i < cats.length; i++) {
                var cat = cats[i];

                // Make each cat name into a button separated by a line break
                var catName = document.createElement('button');
                var lineBreak = document.createElement('p');
                catName.innerHTML = cat.name;

                // Add the button and line break to the list section
                this.catList.appendChild(catName);
                this.catList.appendChild(lineBreak);

                // When user clicks on name, tell octopus to set chosen cat
                catName.addEventListener('click', (function(catCopy) {
                    return function() {
                        octopus.setChosenCat(catCopy);

                        // Update the display view to show the chosen cat
                        displayView.render();
                    };
                })(cat));
            }
        }
    };
/*    
    var thumbnailView = {

        // On load, prepare the grid section
        init: function() {
            this.catGrid = document.getElementById('grid');

            // Call the thumbnail-view render function
            this.render();
        },

        render: function() {

            // Tell the octopus to get the cat array from the model
            var cats = octopus.getCats();

            // Clear any content from the grid
            this.catGrid.innerHTML = '';

            // Loop over the cat array received from the octopus
            for (var i = 0; i < cats.length; i++) {
                var cat = cats[i];

                // Make each cat image into a thumbnail
                var catImage = document.createElement('img');
                catImage.className = 'img-thumbnail';
                catImage.src = cat.image;

                // Create a thumbnail container
                var thumbnail = document.createElement('figure');
                thumbnail.className = 'col-lg-2';

                // Add image to container, and container to grid
                this.thumbnail.appendChild(catImage);
                this.catGrid.appendChild(thumbnail);
            }
        }
    };
*/
    // Load the octopus
    octopus.init();

});


/* ------------------------------------------------------------------
CAT CLICKER PREMIUM
------------------------------------------------------------------ 

// Array of cat names, images, initial scores
var cats = [
    {
        name: 'Tiny',
        img: 'images/cat1.jpg',
        score: 0,
    },
    {
        name: 'Blue',
        img: 'images/cat2.jpg',
        score: 0,
    },
    {
        name: 'Twins',
        img: 'images/cat3.jpg',
        score: 0,
    },
    {
        name: 'Scaredy',
        img: 'images/cat4.jpg',
        score: 0,
    },
    {
        name: 'Aristo',
        img: 'images/cat5.jpg',
        score: 0,
    },
    {
        name: 'Cutie',
        img: 'images/cat6.jpg',
        score: 0,
    },
];

// http://www.w3schools.com/jsref/met_node_appendchild.asp

// Add image element for the chosen cat in the display section
var displayImg = document.createElement('img');
displayImg.className = 'img-responsive';
$('#chosen-image').append(displayImg);

// Add text elements for the name and score in the display section
var displayName = document.createElement('h2');
displayName.id = 'chosen-name';
var displayScore = document.createElement('h2');
displayScore.id = 'chosen-score';
$('#chosen-cat').append(displayName, displayScore);

// https://discussions.udacity.com/t/cat-clicker-images-not-showing/159068/3

// Loop over the cat array
for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];

    // Create a button
    var button = document.createElement('button');
    button.id = cats[i];
    button.innerHTML = cat.name;

    // Make a list of buttons in the display section
    var catList = document.createElement('h4');
    $('#list').append(button);
    $('#list').append(catList);
    
    // Add event listener for choosing a cat
    button.addEventListener('click', (function(catCopy) {

        return function() {
        
            // Delete previous selection whenever user clicks on a cat
            $('#chosen-image').html("");
            $('#chosen-name').html("");
            $('#chosen-score').html("");

            // Append chosen cat image, name and score to display section
            $('#chosen-image').append('<img class="img-responsive" src="' + catCopy.img + '">');
            $('#chosen-name').append(catCopy.name);
            $('#chosen-score').append(catCopy.score);

            // On click, delete previous score total and increment the score
            var chosenImg = document.getElementById('chosen-image');
            chosenImg.onclick = function() {
                $('#chosen-score').html("");
                catCopy.score++;
                $('#chosen-score').append(catCopy.score);
            };
        };
    })(cat));

    // Create a thumbnail image of each cat
    var imgElem = document.createElement('img');
    $(imgElem).attr({
        src: cats[i].img,
        class: 'img-thumbnail',
    });

    // Add a score-count element
    // TO DO: Display live scores instead of initial scores here
    var scoreElem = document.createElement('h4');
    scoreElem.innerHTML = 'Score: ' + cat.score;

    // Create a container for each cat thumbnail and score
    var catContainer = document.createElement('figure');
    catContainer.className = 'col-lg-2';
    $(catContainer).append(imgElem, scoreElem);

    // Append each container to the grid section
    var catGrid = document.getElementById('grid');
    $(catGrid).append(catContainer);

};
*/

/* ------------------------------------------------------------------
CAT CLICKER WITH TWO CATS
------------------------------------------------------------------ 

// https://gist.github.com/frankyonnetti/8373904

var count = 0;

// Increment the counter for the first image
$('#tiny').click(function() {
    count++;
    $('#tinyscore').html(count);
});

// Increment the counter for the second image
$('#blue').click(function() {
    count++;
    $('#bluescore').html(count);
});
*/

/* ------------------------------------------------------------------
CAT CLICKER WITH ONE CAT
------------------------------------------------------------------ 

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// Increment the counter
var i = 1;
function countClicks() {
    var changeCounter = document.getElementById('tinyscore');
    changeCounter.firstChild.nodeValue = i++;    
}

// Change the content of the heading
function modifyText(new_text) {
    var changeHeading = document.getElementById('tinyheading');
    changeHeading.firstChild.nodeValue = new_text;    
}

// Add an event listener to the image and change the counter text
var elem = document.getElementById('tiny');
elem.addEventListener('click', function() {
    modifyText('Again!');
    countClicks();
}, false);
*/
