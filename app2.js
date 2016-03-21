//A functin to do the if part of the questions


function yesOrNo(correctResponse, falseResponse, error){
  if (userResponse.toLowerCase() === correctResponse.toLowerCase()){
    var printCorrectAnswerQ1 = document.getElementById(Answer1);
    Answer1.textContent = "You are correct. Cooking is not one of my many fantastic talents. Don\'t worry - we\'ll order in!";
  } else if (userResponse.toLowerCase() === falseResponse.toLowerCase()) {
    var printFalseAnswerQ1 = document.getElementById(Answer1);
    Answer1.textContent = "Sorry, domestic Goddess I am not. No worries, we\'ll order a delicious Pizza if you come to my house."
  } else {
    alert('Please enter either "y" or "n"!');
  }
}


function testOne(){
  for (i = 0; i<3; i++) {
    if (i<2){
      var printCorrectAnswerQ1 = document.getElementById(Answer1);
      Answer1.textContent = "This is answer 1";
    } else{
      var printCorrectAnswerQ2 = document.getElementById(Answer2);
      Answer2.textContent = "This is answer 2";
    }
  }
}

testOne();
