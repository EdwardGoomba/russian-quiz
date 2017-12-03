var questions = [
  {
    question: 'What do Russians love to drink',
    answer: 'Vodka'
  },
  {
    question: 'What are Russians favorite vegetable?',
    answer: 'Potatoes'
  },
  {
    question: 'What is the Russians favorite animal?',
    answer: 'Bear'
  }
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var incorrect = [];

// Use to print message to page
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

// Parse through array and add items to an ordered list
function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i++) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

// Loop through array, access object and return responses
for (var i = 0; i < questions.length; i += 1) {
  question = questions[i].question;
  answer = questions[i].answer;
  response = prompt(question);
  response = response;
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    incorrect.push(question);
  }
}

//Concats answers and displays correct and incorrect answers as an ordered list
html = "You got " + correctAnswers + " question(s) right."
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(incorrect);
print(html);
