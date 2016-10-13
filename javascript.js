//create variables to access our buttons//
var clearButton = document.querySelector('.clear');
var resetButton = document.querySelector('.resetButton');
var minMaxButton = document.querySelector('.submit');
var guessButton = document.querySelector('.guess');

//create variables to access each of our input fields//
var inputField = document.querySelector('.user-data');
var minValue = document.querySelector('.min-value');
var maxValue = document.querySelector('.max-value');

//create variable to store a randomNumber once the event listener has been triggered//
var randomNumber;

//store random number from randoNum() once event listener has been triggered.//
//prompts user to enter a number between min and max//
minMaxButton.addEventListener('click', function(){
  randomNumber = randoNum();
  document.querySelector('.your-last-guess').innerText = "Please guess a number between " + getMin() + " and " + getMax() + "!";
});

//Clicking the guess button triggers a number display and message.//
//minMaxTest checks that the min is less than the max and runs mainFunc if true.  Displays error message if false.//
guessButton.addEventListener('click', function(){
  numberDisplay();
  minMaxTest();
});

//when clear button is clicked, set the user data to "" (blank)//
clearButton.addEventListener('click', function() {
  document.querySelector('.user-data').value = "";
});

//the reset button. When clicked, run the function to reload the page//
resetButton.addEventListener('click', function() {
  location.reload();
});

//disables the clear and reset buttons if input is empty//
inputField.addEventListener('input', function() {
  if(inputField.value === '') {
    clearButton.disabled = true;
    resetButton.disabled = true;
    guessButton.disabled = true;
  }else{
    clearButton.disabled = false;
    resetButton.disabled = false;
    guessButton.disabled = false;
  }});

//enables inputField when minValue has a value//
  minMaxButton.addEventListener('click', function() {
if (minValue.value !== '') {
  inputField.disabled = false;
 } else {
      inputField.disabled = true;
    }});

//disables minMaxButton when maxValue is empty//
  maxValue.addEventListener('input', function() {
    if(maxValue.value === ''){
      minMaxButton.disabled = true;
    }else{
      minMaxButton.disabled = false;
    }});

//Creates a random number based off user's min/max inputs//
function randoNum() {
  var min = parseInt(document.querySelector('.min-value').value);
  var max =  parseInt(document.querySelector('.max-value').value);
  return Math.floor(Math.random() * (max-min))+min;
}

//test that the min is less than the max.  runs mainFunc if true//
function minMaxTest() {
  if (getMin() < getMax()) {
    mainFunc();
  } else {
    displayInvalidMinMax();
  }}
//this function and the betweenMinMax may be able to be combined//

//the main function. if number is between min and max,compare the numbers. If not, display an error message//
function mainFunc() {
  if (betweenMinMax()) {
    compareNumbers();
} else {
   displayError();
}}

//the comparing numbers fuction. If the users guess is greater than the randomly generated number, run the function that says "your guess is too high". If not, move down.If the users guess is less than the randomly generated number, run the function that says "your guess is too low". If not, continue to go through the function. If the users guess is neither of these, run the function that says "you guessed correctly"
function compareNumbers() {
  if (userGuess()>randomNumber) {
    tooHigh();
  } else if(userGuess()<randomNumber){
    tooLow();
  } else {
    correct();
}}

//this function finds if the users guess is greater than or equal to min and less than or equal to max and returns the answer to us//
function betweenMinMax() {
  return userGuess()>=getMin() && userGuess()<=getMax();
}

//part of the "mainFunc". When guess is clicked, numbers need to display. In the your-last-guess field, we put "your last guess" into the document and we display the users guess underneath.  We adjust the margin to take into account the new fields//
function numberDisplay() {
  document.querySelector('.your-last-guess').innerText = "Your last guess was";
  document.querySelector('.last-guess').innerText = userGuess();
  resetButton.style.margin = "5px 0 0 0";
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

//displays error when users's number is not between min and max
function displayError() {
  document.querySelector('.result-text').innerText = "";
  document.querySelector('.last-guess').innerText = "";
  document.querySelector('.your-last-guess').innerText = "Please guess a number between " + getMin() + " and " + getMax() + "!";
}
//displays error when min is greater than max
function displayInvalidMinMax() {
  document.querySelector(".your-last-guess").innerText = "Enter valid min and max";
  document.querySelector('.result-text').innerText = "";
  document.querySelector('.last-guess').innerText = "";
}





// ------- end of code ----- commented out sections --------- //


//disable clear button if user has not input anything//
// function disableClear() {
//   var inputLength = (document.querySelector('.user-data').value);
//   var minLength = (document.querySelector('.min-value').value);
//   var maxLength = (document.querySelector('.max-value').value);
//   if (inputlength.length < 1 || minLength.length < 1 || maxLength.length < 1)
//   document.querySelector('.resetButton').disabled = true;
// }
