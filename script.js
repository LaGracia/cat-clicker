/* This is a mini-project for the JavaScript Design Patterns unit. 
* Each set of requirements is a quiz. Instead of overwriting the code 
* after every quiz, I have commented out the previous solution. */

/* ------------------------------------------------------------------
REQUIREMENTS 1
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
/* ------------------------------------------------------------------
REQUIREMENTS 2
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
REQUIREMENTS 3
------------------------------------------------------------------ */

// https://discussions.udacity.com/t/cat-clicker-images-not-showing/159068/3

// Cat names, images, initial scores
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

// Select each name for the list
for (i = 0; i < cats.length; i++) {
    var cat = cats[i];

    // Create a button
    var button = document.createElement('button');
    button.id = cats[i];
    button.innerHTML = cat.name;

    // Make a list of buttons in the display section
    var catList = document.createElement('h4');
    $('#list').append(button);
    $('#list').append(catList);
    
// https://discussions.udacity.com/t/cat-clicker-images-not-showing/159068/3

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

};

// Select each cat for the thumbnails
for (var i = 0; i < cats.length; i++) {
    var thumb = cats[i];

    // Create the image element
    var imgElem = document.createElement('img');
    $(imgElem).attr({
        src: thumb.img,
        class: 'img-thumbnail',
    });

    // Add a score element
    var scoreElem = document.createElement('h4');
    scoreElem.innerHTML = 'Score: ' + cat.score;

    // Create a container for each cat image and score
    var catContainer = document.createElement('figure');
    catContainer.className = 'col-lg-2';
    $(catContainer).append(imgElem, scoreElem);

    // Append each container to the grid section
    var catGrid = document.getElementById('grid');
    $(catGrid).append(catContainer);

};
