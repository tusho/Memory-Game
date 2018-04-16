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

//Card function
let cardsOpenShow = document.getElementsByClassName('card open show');

function showCard (e) {
  e.target.className = 'card open show';
}

function matchCards () {
  for (m=0; m < cardsOpenShow.length; m++) {
        cardsOpenShow[m].className = 'card match';
  }
}

function hideCards () {
  for (n=0; n < cardsOpenShow.length; n++) {
        cardsOpenShow[n].className = 'card';
  }
}

//Click Cards
const myDeck = document.getElementById('deck');
var clicks = 0; //counter
let cardContentFirst = 0;
let cardContentSecond = 0;

myDeck.addEventListener('click', function(e) {

    if (e.target.nodeName === 'LI') {
      clicks += 1;

      if (clicks%2 === 1) {
        showCard(e);
        cardContentFirst = e.target.innerHTML;
        console.log(clicks);

      } else {
        cardContentSecond = e.target.innerHTML;

          if (cardContentFirst === cardContentSecond) {
            showCard(e);
            matchCards();
            console.log('they match');

          } else {
            showCard(e);
            console.log('they don\'t match');

          }
          hideCards();
      }

    }

})




//Run a shuffle once document is loaded
document.onload = function () {
  changeDecks();
}
