

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

// var cardArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
// var cardArray = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var cardArray = [ul.children]
// cardArray = shuffle(cardArray);
// console.log(cardArray);

const iElements = document.querySelector('.deck');
const iElementClasses = iElements.querySelectorAll('li');
const iElementClassMates = iElements.children;
let myArray = [];


for (let i = 0; i < iElementClasses.length; i++) {
  myArray[i] = (iElementClasses[i].innerHTML);
}

myArray = myArray.map(el => el.trim());



// for (let j = 0; j < iElementClassMates.length; j++) {
//   console.dir(iElementClassMates[j].innerHTML);
// }
