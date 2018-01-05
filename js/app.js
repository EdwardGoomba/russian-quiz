//Create questions
var questions = [
  new Question("What is a Russians favorite drink?",
  ["Vodka", "Beverages that are not fit for Russians"], "Vodka"),

  new Question("What is a Russians favorite animal?",
  ["Giraffes", "Bears"], "Bears"),

  new Question("What is a Russians favorite vegetable?",
  ["Communist Carrots", "American Apples"], "Communist Carrots")

];

// Create Quiz
var quiz = new Quiz(questions);

// Display Quiz
QuizUI.displayNext();
