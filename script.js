//Create the variables for the script

var firstName = 'Yanny';
var favouriteColor = 'Black';
var favouriteFood = 'Fajitas';
var city = 'Paris';

//Make appears the variables contents

console.log(firstName)
console.log(favouriteColor)
console.log(favouriteFood + ' ' + city)

//Creation of the text

var phrase = ' A rainbow is formed by the sunlight. Shining through rain drops so small. The rain bends the light from the sunshine, and colors the sky for us all.'
var endingPhrase = 'is what we see. Rainbow colours, are made with light bending you see!'
var one = 'Red'
var two = 'orange'
var three = 'yellow'
var four = 'green'
var five = 'blue'
var six = 'indigo'
var seven = 'violet'

console.log( phrase + ' ' + one + ', ' + two + ', ' + three + ', ' + four + ', ' + five + ', ' + six + ', ' + seven + ' ' + endingPhrase)


//Creation of the function for have the length of an Array

var myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];

function myAlphabetLength(){

    length = myAlphabet.length

    console.log(length)
}

myAlphabetLength();