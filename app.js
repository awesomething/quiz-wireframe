/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which of the following is not a number type variable?',
      imgSrc: "img/avengerslogo.jpg",
      answers: [
        'How_many_Avengers = 6',
        'Number_of_releases = 23.0',
        'Thors_age = 1500',
        "Non-avenger = 'Loki'"
      ],
      correctAnswer: "Non-avenger = 'Loki'"
    },
    {
      question: 'Every movie has a script. What is the most popular coding language below?',
      imgSrc : "img/JS.png",
      answers: [
        'EcmaScript',
        'TypeScript',
        'JavaScript',
        'JustScript'
      ],
      correctAnswer: 'JavaScript'
    },
    {
      question: 'Iron man is the richest Avenger. The value of boolean type variables could be _?',
      imgSrc : "img/ironmask.jpg",
      answers: [
        'True or False',
        'Yes or No',
        '"True or False"',
        'Positive or Negative'
      ],
      correctAnswer: 'True or False'
    },
    {
      question: 'The second most sold Avenger movie is "Black Panther". This is a _?',
      imgSrc : "img/blackpanther.png",
      answers: [
        'sting',
        'string',
        'spring',
        'sprint'
      ],
      correctAnswer: 'string'
    },
     {
      question: 'The idea that Hulk is the strongest avenger is false. What data type variable is this?',
      imgSrc : "img/hulkface.jpg",
      answers: [
        'data',
        'boolean',
        'string',
        'method'
      ],
      correctAnswer: 'boolean'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  view:"home"
};