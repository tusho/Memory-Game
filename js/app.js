// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


//Pull card class names into an Array
let myArray = [];

const myCards = document.getElementById('deck').getElementsByTagName('i');
for (let i = 0; i < myCards.length; i++) {
  myArray[i] = (myCards[i].className);
}

//Function to change the deck by exchanging CSS classes
function changeDecks() {
  shuffle(myArray);
  for (let j=0; j < myCards.length; j++) {
    myCards[j].className = myArray[j];
  }
}


//Reset the Star colors
const myStars = document.getElementById('stars').getElementsByTagName('i');

function resetStars() {
  for (let k=0; k < myStars.length; k++) {
    myStars[k].style.color = 'black';
  }
}


//Restart button to run multiple functions for starting over
const restart = document.querySelector('.restart');
restart.addEventListener('click', function() {
  clicks = 0;
  cardContentFirst = 0;
  cardContentSecond = 0;
  changeDecks();
  resetStars();
  closeCards();
});


//Function to open Cards
function closeCards () {
    for (l=0; l < myDeck.children.length; l++) {
      myDeck.children[l].className = 'card';
    }
}

//Funcitons to show, close cards or change color of matched classes
let cardsOpenShow = document.getElementsByClassName('card open show');

function showCards (e) {
  e.target.className = 'card open show';
}

function matchCards () {
  Array.from(document.getElementsByClassName('card open show')).forEach(function(item) {
    item.className = 'card match';
    });
}


function hideCards () {
  Array.from(document.getElementsByClassName('card open show')).forEach(function(item) {
   item.classList.add('animation');
   setTimeout(function(){item.className = 'card';}, 2000);
    });
}

//Event Listeners for clicking classes
const myDeck = document.getElementById('deck');
var clicks = 0; //counter
let cardContentFirst = 0;
let cardContentSecond = 0;

myDeck.addEventListener('click', function(e) {

    if (e.target.nodeName === 'LI') {
      clicks += 1;

      if (clicks%2 === 1) {
        showCards(e);
        cardContentFirst = e.target.innerHTML;

      } else {
        showCards(e);
        cardContentSecond = e.target.innerHTML;

          if (cardContentFirst === cardContentSecond) {

            matchCards();
            console.log('they match');

          } else {

            console.log('they don\'t match');
            hideCards();

          }

      }

    }

})


//Run a shuffle once document is loaded
window.onload = function () {
  changeDecks();
}
