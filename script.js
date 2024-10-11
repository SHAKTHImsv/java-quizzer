document.addEventListener('contextmenu', event => event.preventDefault());

const questions = [
    {
        question: "What is the size of an int variable in Java?",
        answers: [
            { text: "16 bits", correct: false },
            { text: "32 bits", correct: true },
            { text: "64 bits", correct: false },
            { text: "8 bits", correct: false }
        ]
    },
    {
        question: "Which of these is not a Java feature?",
        answers: [
            { text: "Object-oriented", correct: false },
            { text: "Use of pointers", correct: true },
            { text: "Platform independent", correct: false },
            { text: "Multithreaded", correct: false }
        ]
    },
    {
        question: "What is the default value of a boolean variable in Java?",
        answers: [
            { text: "true", correct: false },
            { text: "false", correct: true },
            { text: "0", correct: false },
            { text: "null", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'synchronized' keyword in Java?",
        answers: [
            { text: "To prevent a method from being overridden", correct: false },
            { text: "To control access to a method or block by multiple threads", correct: true },
            { text: "To declare a method as static", correct: false },
            { text: "To indicate a method is private", correct: false }
        ]
    },
    
    {
        question: "Which method is used to start a thread in Java?",
        answers: [
            { text: "run()", correct: false },
            { text: "start()", correct: true },
            { text: "begin()", correct: false },
            { text: "init()", correct: false }
        ]
    },
    {
        question: "What is the main function in a Java program?",
        answers: [
            { text: "main()", correct: true },
            { text: "start()", correct: false },
            { text: "init()", correct: false },
            { text: "run()", correct: false }
        ]
    },
    {
        question: "What keyword is used to inherit a class in Java?",
        answers: [
            { text: "inherits", correct: false },
            { text: "extends", correct: true },
            { text: "implements", correct: false },
            { text: "instanceof", correct: false }
        ]
    },
    {
        question: "Which of the following is a valid declaration of a char?",
        answers: [
            { text: "char c = 'ab';", correct: false },
            { text: "char c = 'a';", correct: true },
            { text: "char c = \"a\";", correct: false },
            { text: "char c = 97;", correct: false }
        ]
    },
    {
        question: "What is the return type of the main method in Java?",
        answers: [
            { text: "void", correct: true },
            { text: "int", correct: false },
            { text: "String", correct: false },
            { text: "Main", correct: false }
        ]
    },
    {
        question: "Which of the following is not a Java primitive type?",
        answers: [
            { text: "int", correct: false },
            { text: "boolean", correct: false },
            { text: "String", correct: true },
            { text: "char", correct: false }
        ]
    },
    {
        question: "What does JVM stand for?",
        answers: [
            { text: "Java Virtual Machine", correct: true },
            { text: "Java Variable Method", correct: false },
            { text: "Java Visual Machine", correct: false },
            { text: "Java Version Manager", correct: false }
        ]
    },
    {
        question: "Which exception is thrown when an array is accessed with an illegal index?",
        answers: [
            { text: "ArrayIndexOutOfBoundsException", correct: true },
            { text: "IndexOutOfBoundsException", correct: false },
            { text: "NullPointerException", correct: false },
            { text: "IllegalArgumentException", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'static' keyword in Java?",
        answers: [
            { text: "It allows a variable to be accessed without an instance", correct: true },
            { text: "It restricts access to a variable", correct: false },
            { text: "It makes a variable constant", correct: false },
            { text: "It denotes a method that is asynchronous", correct: false }
        ]
    },
    {
        question: "Which class is the superclass of all classes in Java?",
        answers: [
            { text: "Object", correct: true },
            { text: "Class", correct: false },
            { text: "String", correct: false },
            { text: "Main", correct: false }
        ]
    },
    {
        question: "What does the 'final' keyword indicate when applied to a variable?",
        answers: [
            { text: "The variable cannot be changed", correct: true },
            { text: "The variable must be initialized", correct: false },
            { text: "The variable can be overridden", correct: false },
            { text: "The variable can be static", correct: false }
        ]
    },
    {
        question: "Which of the following is a method to create a thread?",
        answers: [
            { text: "Thread.start()", correct: true },
            { text: "Thread.create()", correct: false },
            { text: "Thread.run()", correct: false },
            { text: "Thread.new()", correct: false }
        ]
    },
    {
        question: "What is the default value of an object reference in Java?",
        answers: [
            { text: "0", correct: false },
            { text: "false", correct: false },
            { text: "null", correct: true },
            { text: "undefined", correct: false }
        ]
    },
    {
        question: "Which of these interfaces does not belong to the Collections Framework?",
        answers: [
            { text: "List", correct: false },
            { text: "Set", correct: false },
            { text: "Map", correct: false },
            { text: "Thread", correct: true }
        ]
    },
    {
        question: "What is the correct way to create an array in Java?",
        answers: [
            { text: "int[] arr = new int[5];", correct: true },
            { text: "int arr = new int[5];", correct: false },
            { text: "int arr[] = new int(5);", correct: false },
            { text: "int arr[5];", correct: false }
        ]
    },
    // Additional questions (21 more)
    {
        question: "What is the size of a float variable in Java?",
        answers: [
            { text: "32 bits", correct: true },
            { text: "64 bits", correct: false },
            { text: "16 bits", correct: false },
            { text: "8 bits", correct: false }
        ]
    },
    {
        question: "What is the default value of an int variable in Java?",
        answers: [
            { text: "0", correct: true },
            { text: "null", correct: false },
            { text: "undefined", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "Which interface does the List interface extend?",
        answers: [
            { text: "Collection", correct: true },
            { text: "Iterable", correct: false },
            { text: "Map", correct: false },
            { text: "Set", correct: false }
        ]
    },
    {
        question: "Which of these statements is true about constructors?",
        answers: [
            { text: "They have a return type", correct: false },
            { text: "They cannot be overloaded", correct: false },
            { text: "They must have the same name as the class", correct: true },
            { text: "They are called explicitly", correct: false }
        ]
    },
    {
        question: "Which exception is thrown when an illegal argument is passed to a method?",
        answers: [
            { text: "IllegalArgumentException", correct: true },
            { text: "IllegalStateException", correct: false },
            { text: "NullPointerException", correct: false },
            { text: "IndexOutOfBoundsException", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'final' keyword when applied to a class?",
        answers: [
            { text: "The class cannot be subclassed", correct: true },
            { text: "The class cannot be instantiated", correct: false },
            { text: "The class cannot have static members", correct: false },
            { text: "The class cannot have constructors", correct: false }
        ]
    },
    {
        question: "Which of the following is a Java annotation?",
        answers: [
            { text: "@Override", correct: true },
            { text: "public", correct: false },
            { text: "class", correct: false },
            { text: "void", correct: false }
        ]
    },
    {
        question: "What is a marker interface in Java?",
        answers: [
            { text: "An interface with no methods", correct: true },
            { text: "An interface with default methods", correct: false },
            { text: "An interface that defines constants", correct: false },
            { text: "An interface with static methods", correct: false }
        ]
    },
    {
        question: "Which keyword is used to define a constant in Java?",
        answers: [
            { text: "const", correct: false },
            { text: "final", correct: true },
            { text: "static", correct: false },
            { text: "constant", correct: false }
        ]
    },
    {
        question: "Which of the following can be used to handle exceptions?",
        answers: [
            { text: "try-catch block", correct: true },
            { text: "if-else statement", correct: false },
            { text: "for loop", correct: false },
            { text: "switch case", correct: false }
        ]
    },
    {
        question: "What is the default access modifier for a class in Java?",
        answers: [
            { text: "public", correct: false },
            { text: "private", correct: false },
            { text: "protected", correct: false },
            { text: "package-private", correct: true }
        ]
    },
    {
        question: "Which method is used to obtain the length of an array in Java?",
        answers: [
            { text: "length()", correct: false },
            { text: "size()", correct: false },
            { text: "length", correct: true },
            { text: "getLength()", correct: false }
        ]
    },
    {
        question: "Which of the following is used to create a new thread?",
        answers: [
            { text: "new Thread()", correct: true },
            { text: "Thread.create()", correct: false },
            { text: "Thread.run()", correct: false },
            { text: "Thread.start()", correct: false }
        ]
    },
    {
        question: "What is the return type of the clone() method?",
        answers: [
            { text: "Object", correct: true },
            { text: "void", correct: false },
            { text: "Cloneable", correct: false },
            { text: "String", correct: false }
        ]
    },
    {
        question: "Which of the following keywords is used to create an interface?",
        answers: [
            { text: "interface", correct: true },
            { text: "class", correct: false },
            { text: "implements", correct: false },
            { text: "extends", correct: false }
        ]
    },
    {
        question: "What is the output of the following code: System.out.println(5 + 5)?",
        answers: [
            { text: "10", correct: true },
            { text: "55", correct: false },
            { text: "Error", correct: false },
            { text: "None", correct: false }
        ]
    },
    {
        question: "Which of the following is a non-primitive data type?",
        answers: [
            { text: "int", correct: false },
            { text: "char", correct: false },
            { text: "String", correct: true },
            { text: "boolean", correct: false }
        ]
    },
    {
        question: "What does the 'super' keyword refer to?",
        answers: [
            { text: "The parent class", correct: true },
            { text: "The current class", correct: false },
            { text: "The current object", correct: false },
            { text: "The static members", correct: false }
        ]
    },
    {
        question: "What is the purpose of the 'this' keyword?",
        answers: [
            { text: "To refer to the current object", correct: true },
            { text: "To refer to the parent object", correct: false },
            { text: "To refer to the static members", correct: false },
            { text: "To refer to other classes", correct: false }
        ]
    },
    {
        question: "Which operator is used to compare two values?",
        answers: [
            { text: "=", correct: false },
            { text: "==", correct: true },
            { text: "!=", correct: false },
            { text: ">", correct: false }
        ]
    },
    {
        question: "Which of the following is a valid string declaration?",
        answers: [
            { text: "String s = 'Hello';", correct: false },
            { text: "String s = \"Hello\";", correct: true },
            { text: "String s = Hello;", correct: false },
            { text: "String s = new String('Hello');", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let takeCount = 0; // Initialize take counter

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    shuffle(questions); // Shuffle questions before starting
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none"; // Hide the next button initially
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    answerButton.innerHTML = ""; // Clear previous buttons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer, button)); // Pass the button to the function
        answerButton.appendChild(button);
    });
}

function selectAnswer(answer, selectedButton) {
    const buttons = answerButton.querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = true; // Disable all buttons after an answer is selected

        // Change the button color based on the answer
        if (button.innerHTML === answer.text) {
            if (answer.correct) {
                button.style.backgroundColor = "green"; // Correct answer
                score++; // Increment score for a correct answer
            } else {
                button.style.backgroundColor = "red"; // Selected wrong answer
            }
        } else if (button.innerHTML === getCorrectAnswerText()) {
            button.style.backgroundColor = "green"; // Correct answer button
        }
    });

    nextButton.style.display = "block"; // Show the next button
}

function showScore() {
    takeCount++;
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}. Takes: ${takeCount}`;
    answerButton.innerHTML = ""; // Clear buttons
    nextButton.style.display = "none"; // Hide the next button

    // Create a retake button
    const retakeButton = document.createElement("button");
    retakeButton.innerHTML = "Retake Quiz";
    retakeButton.classList.add("btn", "retake-btn"); // Add 'retake-btn' class
    retakeButton.addEventListener("click", startQuiz);
    answerButton.appendChild(retakeButton); // Append retake button
}

function getCorrectAnswerText() {
    const currentQuestion = questions[currentQuestionIndex];
    return currentQuestion.answers.find(answer => answer.correct).text; // Find the correct answer text
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none"; // Hide the next button again
    } else {
        showScore(); // Show final score
    }
});

startQuiz();
