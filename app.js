//Create Questions
var questions = [
    new Question("What is a Russians favorite drink?", [ "Vodka", "Beverages that are not Vodka" ], "Vodka"),

    new Question("What is a Russians favorite animal?", ["Giraffe","Bear"], "Bear"),

    new Question("What is a Russians favorite vegetable?", ["Potato","Other Lame Vegetables"], "Potato")

];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
