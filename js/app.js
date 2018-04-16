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

//Click Cards
const myDeck = document.getElementById('deck');

myDeck.addEventListener('click', function(e) {
if (e.target.nodeName === 'LI') {
//   e.target.style.color = 'orange';
    e.target.className = 'card open show';
}
})


//Run a shuffle once document is loaded
document.onload = function () {
  changeDecks();
}
