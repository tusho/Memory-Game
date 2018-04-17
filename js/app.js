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


//Change colors of Stars
const myStars = document.getElementById('stars').getElementsByTagName('i');
let starCount = 3;

function resetStars() {
  for (let k=0; k < myStars.length; k++) {
    myStars[k].style.color = 'orange';
  }
}

function changeStars () {
  let successfulClicks = clicks - matchingCards;
  if (successfulClicks >= 10 && successfulClicks < 20) {
    myStars[2].style.color = 'black';
    starCount = 2;
  } else if (successfulClicks >=20 && successfulClicks < 30) {
    myStars[1].style.color = 'black'
    starCount = 1;
  } else if (successfulClicks >=30) {
    myStars[0].style.color = 'black'
    starCount = 0;
  }
}

//Function to count Moves
const myMoves = document.getElementById('moves');

function countMoves () {
  moves.textContent = clicks;
}


//Restart button to run multiple functions for starting over
const restart = document.querySelector('.restart');
restart.addEventListener('click', function() {
  clicks = 0;
  cardContentFirst = 0;
  cardContentSecond = 0;
  starCount = 3;
  countMoves();
  changeDecks();
  resetStars();
  closeAllCards();
  resetTimer();
});

//Function to reset / close all Cards
function closeAllCards () {
    for (l=0; l < myDeck.children.length; l++) {
      myDeck.children[l].className = 'card';
    }
}

//Functions to show, close cards or change color of matched classes
let cardsOpenShow = document.getElementsByClassName('card open show');
let matchingCards = 0;

function showCards (e) {
  e.target.className = 'card open show';
}

function matchCards () {
  Array.from(document.getElementsByClassName('card open show')).forEach(function(item) {
    item.className = 'card match';
    });
  matchingCards += 2;
  if (matchingCards === 16) {
    setTimeout(function(){
      openPopup();
    }, 1000);
  }
}

function hideCards () {
  Array.from(document.getElementsByClassName('card open show')).forEach(function(item) {
   item.classList.add('animation');
   setTimeout(function(){item.className = 'card';}, 2000);
    });
}

//Event Listener for clicking the cards
const myDeck = document.getElementById('deck');
let clicks = 0;
let cardContentFirst = 0;
let cardContentSecond = 0;

myDeck.addEventListener('click', function(e) {

    if (e.target.nodeName === 'LI') {
      clicks += 1;
      countMoves();
      changeStars();

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


//Modal Popup
let modal = document.getElementById('myModal');
let usedMoves = document.getElementById('used-moves');
let usedStars = document.getElementById('used-stars');
let replayButton = document.getElementsByTagName('button')[0];
let finishTime = document.getElementById('finish-time');

function openPopup() {
    let finishCounter = document.getElementById("count-time").innerHTML;
    modal.style.display = "block";
    usedMoves.textContent = clicks;
    usedStars.textContent = starCount;
    finishTime.textContent = finishCounter;
}

replayButton.addEventListener('click', function() {
  clicks = 0;
  cardContentFirst = 0;
  cardContentSecond = 0;
  starCount = 3;
  countMoves();
  changeDecks();
  resetStars();
  closeAllCards();
  resetTimer();
  modal.style.display = "none";
})

//Run a shuffle once document is loaded
window.onload = function () {
  changeDecks();
  resetStars();
  resetTimer();
}


//Timer Function
let countDownDate = localStorage.getItem('startDate');
if (countDownDate) {
    countDownDate = new Date(countDownDate);
  } else {
      countDownDate = new Date();
      localStorage.setItem('startDate', countDownDate);
}

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = now - countDownDate.getTime();
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("count-time").innerHTML = minutes + "m " + seconds + "s ";
}, 1000);

function resetTimer() {
  countDownDate = new Date();
  localStorage.setItem('startDate', countDownDate);
}
