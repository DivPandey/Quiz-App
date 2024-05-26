let questions = [
    {
        question: 'Which HTML tag is used to define an inline style?',
        choice1: '<script>',
        choice2: '<css>',
        choice3: '<style>',
        choice4: '<span>',
        answer: 3,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choice1: 'text-color',
        choice2: 'font-color',
        choice3: 'text-style',
        choice4: 'color',
        answer: 4,
    },
    {
        question: 'Which of the following is the correct way to comment in HTML?',
        choice1: '// Comment',
        choice2: '<!-- Comment -->',
        choice3: '/* Comment */',
        choice4: '<! Comment>',
        answer: 2,
    },
];

function shuffle(Array) {
    let curr = Array.length;
    let random;
    while (curr != 0) {
        random = Math.floor(Math.random() * curr);
        curr--;
        let temp = Array[curr];
        Array[curr] = Array[random];
        Array[random] = temp;
    }
    return questions;
}

let option1 = document.getElementsByClassName('option-text')[0];
let option2 = document.getElementsByClassName('option-text')[1];
let option3 = document.getElementsByClassName('option-text')[2];
let option4 = document.getElementsByClassName('option-text')[3];

let question = document.getElementsByClassName('question')[0];
let scorenumber = document.getElementsByClassName('scoreCount')[0];
let questioncounter = document.getElementsByClassName('question-seq')[0];
let currentQuestion = 0;
let score = 0;
let options = document.getElementsByClassName('option');
questions = shuffle(questions);
let AllQuestions = questions.length;

function loadQuestion(questionindex) {
    let q = questions[questionindex];
    option1.innerText = q.choice1;
    option2.innerText = q.choice2;
    option3.innerText = q.choice3;
    option4.innerText = q.choice4;

    question.innerText = q.question;
}



loadQuestion(currentQuestion);
let isSelected = false;
Array.from(options).forEach(option => {
    option.addEventListener('click', () => {
        if (isSelected) return;
        isSelected = true;
        currentQuestion++;
        if (option.id == questions[currentQuestion-1].answer) {
            option.style.backgroundColor = 'green';
            score+=10;
            scorenumber.innerText = score;
            localStorage.setItem('scoreOverview',score);
        }
        else {
            option.style.backgroundColor = 'red';
        }
        if (currentQuestion < AllQuestions) {
            setTimeout(() => {
                loadQuestion(currentQuestion);
                questioncounter.innerText=`${currentQuestion+1}/${AllQuestions}`;
                option.style.backgroundColor = 'white';
                isSelected = false;
            }, 2000);
        } else {
            setTimeout(() => {
                window.location.href = 'result.html'
            }, 2000);
        }

    });
});



