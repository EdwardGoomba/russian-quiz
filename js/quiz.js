var questions = [
  ['What do Russians love to drink'], ['Vodka'],
  ['What are Russians favorite vegetable?'], ['Potatoes'],
  ['What is the Russians favorite animal?'], ['Bear']
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i ++) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));

  if (response === answer) {
    correctAnswers++;
  }
}
