//Guessing Game Revisited

//Variable to tally correct Answers

var correctAnswers = 0;

//Finding out User Name and printing it to Webpage

var userName = prompt('Please tell me your name!');
console.log('The user\'s name is ' + userName);

var printMsg = document.getElementById(WelcomeMsg);
WelcomeMsg.textContent = 'Welcome ' + userName + '! Let\'s see how well you know me!';


function yesOrNo(correctResponse, falseResponse, error){
  if (userResponse.toLowerCase() === correctResponse.toLowerCase()){
    if(printCorrectAnswerQ1 = document.getElementById(Answer1)) {
    Answer1.textContent = "You are correct. Cooking is not one of my many fantastic talents. Don\'t worry - we\'ll order in!";
    } else {
      Answer2.textContent = "You are right! It must be my germanic roots. I\'m usually at least 10 minutes early."
    }
  } else if (userResponse.toLowerCase() === falseResponse.toLowerCase()) {
    if (printFalseAnswerQ1 = document.getElementById(Answer1)) {
    Answer1.textContent = "Sorry, domestic Goddess I am not. No worries, we\'ll order a delicious Pizza if you come to my house."
    } else {
      Answer2.textContent = "Sorry, you are very wrong on this one. I am pathologically punctual - and usually early.";
    }
  } else {
    alert('Please enter either "y" or "n"!');
  }
}

//Question 1
var keepAskingQ1 = true;

while (keepAskingQ1){
var printQ1 = document.getElementById(Question1);
var printCorrectAnswerQ1 = document.getElementById(Answer1);
var printFalseAnswerQ1 = document.getElementById(Answer1);
Question1.textContent = "Am I a passionate cook who loves creating tasty treats for friends and family?";
var userResponse = prompt('Am I a passionate cook who loves creating tasty treats for friends and family? Please answer Y or N.');
console.log('userResponse: ' + userResponse);
yesOrNo('n','y')
}















//First Question
// var keepAskingQ1 = true;
//
// while (keepAskingQ1){
// var printQ1 = document.getElementById(Question1);
// Question1.textContent = "Am I a passionate cook who loves creating tasty treats for friends and family?";
// var userResponse1 = prompt('Am I a passionate cook who loves creating tasty treats for friends and family? Please answer Y or N.');
// console.log('userResponse1: ' + userResponse1);
// if (userResponse1.toLowerCase() === 'n' || userResponse1.toUpperCase() === 'NO') {
//   var printCorrectAnswerQ1 = document.getElementById(Answer1);
//   Answer1.textContent = "You are correct. Cooking is not one of my many fantastic talents. Don\'t worry - we\'ll order in!";
//   correctAnswers += 1;
//   keepAskingQ1 = false;
// } else if (userResponse1.toUpperCase() === 'Y' || userResponse1.toLowerCase() === 'no') {
//   var printFalseAnswerQ1 = document.getElementById(Answer1);
//   Answer1.textContent = "Sorry, domestic Goddess I am not. No worries, we\'ll order a delicious Pizza if you come to my house."
//   keepAskingQ1 = false;
// } else {
//   alert('Please enter either "y" or "n"!');
//   }
// }

// //Second Question
// var keepAskingQ2 = true;
//
// while (keepAskingQ2){
// var printQ2 = document.getElementById(Question2);
// Question2.textContent = "Am I a punctual person?";
// var userResponse2 = prompt('Am I a punctual person? Please answer Y or N.');
// console.log('userResponse2: ' + userResponse2);
//
// if (userResponse2.toLowerCase() === 'n' || userResponse2.toLowerCase() === 'no') {
//   var printCorrectAnswerQ2 = document.getElementById(Answer2);
//   Answer2.textContent = "Sorry, you are very wrong on this one. I am pathologically punctual - and usually early.";
//   keepAskingQ2 = false;
// } else if(userResponse2.toUpperCase() === 'Y' || userResponse2.toUpperCase() === 'YES') {
//   var printFalseAnswerQ2 = document.getElementById(Answer2);
//   Answer2.textContent = "You are right! It must be my germanic roots. I\'m usually at least 10 minutes early."
//   keepAskingQ2 = false;
//   correctAnswers += 1;
// } else {
//   alert('Please enter either "y" or "n"!');
// }
// }
