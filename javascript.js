// making variables for our buttons to use later. going into the index, finding the button tags, using the class to select where to get buttons//
var guessButton = document.querySelector('.guess');
var clearButton = document.querySelector('.clear');
var resetButton = document.querySelector('.resetButton');
var minMaxButton = document.querySelector('.submit');
// var buttons = document.querySelector('.guess', '.clear', '.resetBu')
var inputField = document.querySelector('.user-data');
var minValue = document.querySelector('.min-value');
var maxValue = document.querySelector('.max-value');
var randomNumber;

//old randoNum
//var randoNum = Math.floor(Math.random()* 100)+1;
minMaxButton.addEventListener('click', function(){
  randomNumber = randoNum();
});

function randoNum() {
var min = parseInt(document.querySelector('.min-value').value);
var max =  parseInt(document.querySelector('.max-value').value);
return Math.floor(Math.random() * (max-min))+min;
}

//the guess button. When clickd, run the functions//
guessButton.addEventListener('click', function(){
numberDisplay();
minMaxTest();
// mainFunc();
});

//the clear button. When clicked, set the user data to "" (blank)//
clearButton.addEventListener('click', function() {
document.querySelector('.user-data').value = "";
});

//the reset button. When clicked, run the function to reload the page//
resetButton.addEventListener('click', function() {
location.reload();
});

inputField.addEventListener('input', function() {
  if(inputField.value === ''){
    clearButton.disabled = true;
  }else{
    clearButton.disabled = false;
  }});

inputField.addEventListener('input', function() {
  if(inputField.value === ''){
      resetButton.disabled = true;
  }else{
      resetButton.disabled = false;
    }});

inputField.addEventListener('input', function() {
  if(inputField.value === ''){
      guessButton.disabled = true;
  }else{
      guessButton.disabled = false;
    }});
//

function minMaxTest() {
  if (getMin() < getMax()) {
  mainFunc();
  } else {
  displayError();
  }
}

//the main function. if number is 1-100,compare the numbers. If not, display an error message//
function mainFunc() {
if (betweenMinMax()) {
  compareNumbers();
} else {
   displayError();
}
}

//the comparing numbers fuction. If the users guess is greater than the randomly generated number, run the function that says "your guess is too high". If not, move down.If the users guess is less than the randomly generated number, run the function that says "your guess is too low". If not, continue to go through the function. If the users guess is neither of these, run the function that says "you guessed correctly"
function compareNumbers() {
if (userGuess()>randomNumber) {
tooHigh();
} else if(userGuess()<randomNumber){
tooLow();
} else {
correct();
}
}


//this function finds if the users guess is greater than or equal to 1 and less than or equal to 100 and returns the answer to us//
function betweenMinMax() {
  return userGuess()>=getMin() && userGuess()<=getMax();
}

function disableClear() {
  var inputLength = (document.querySelector('.user-data').value);
  if (input.length < 1)
  document.querySelector('.user-data').disabled = true;
}

//this defines the users guess as a function. to find the users guess, we go into the document and find the value of user-data. we then return it as a number instead of a string using "parseINT"//
function userGuess() {
return parseInt(document.querySelector('.user-data').value);
}

function getMin() {
  return parseInt(document.querySelector('.min-value').value);
}

function getMax() {
  return parseInt(document.querySelector('.max-value').value);
}


//this function finds the result-text field in the document and puts the text "too high" into it//
function tooHigh() {
document.querySelector('.result-text').innerText = "That is too high";
}

//this function finds the result-text field in the document and puts the text "too low" into it//
function tooLow() {
document.querySelector(".result-text").innerText = "That is too low";
}

//this function finds the result-text field in the document and puts the text "wow you got it" into it//
function correct() {
document.querySelector(".result-text").innerText = "Wow! You got it!";
}

//part of the "mainFunc". When guess is clicked, numbers need to display. In the your-last-guess field, we put "your last guess" into the document and we display the users guess underneath//
function numberDisplay() {
document.querySelector('.your-last-guess').innerText = "Your last guess was";
document.querySelector('.last-guess').innerText = userGuess();
resetButton.style.margin = "20px 0 0 0";
}

//this function displays an error message when the user does not enter a number 1-100. We empty the result-text and last-guess feilds, and simply leave the message "please enter a number 1-100"//
function displayError() {
document.querySelector('.result-text').innerText = "";
document.querySelector('.last-guess').innerText = "";
document.querySelector('.your-last-guess').innerText = "Please enter a number " + getMin() + " and " + getMax() + "!";
}

//two input boxes
//min: box
//input class "min-value"
//in JS, we'll grab min-value and convert into a variable

//function
//we want to check that the min-value is a number
//we want to check that the min-value is less than the max value
//we will need to change the random number to be within the range

//if both of these conditions are true, we want to replace the existing minimum value with the user generated min-value
