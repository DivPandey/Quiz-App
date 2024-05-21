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
let option1 = document.getElementsByClassName('option-text')[0];
let option2 = document.getElementsByClassName('option-text')[1];
let option3 = document.getElementsByClassName('option-text')[2];
let option4 = document.getElementsByClassName('option-text')[3];

let question = document.getElementsByClassName('question')[0];
let scorenumber = document.getElementsByClassName('scorenumber')[0];
let questioncounter = document.getElementsByClassName('questioncount')[0];
let currentQuestion = 0;
let score = 0;
// let options = document.getElementsByClassName('option')
shuffle(questions);
loadQuestion(0);
function loadQuestion(questionindex) {
    let q = questions[questionindex];
    option1.innerText = q.choice1;
    option2.innerText = q.choice2;
    option3.innerText = q.choice3;
    option4.innerText = q.choice4;

    question.innerText = q.question;
}

function shuffle(questions) {
    let curr = questions.length;
    while (curr != 0) {
        let random = Math.floor(Math.random() * curr);
        curr--;
        let temp = questions[curr];
        questions[curr] = questions[random];
        questions[random] = temp;
    }
}

let questionindex = 0;
let options = document.getElementsByClassName('option');
Array.from(options).forEach(option => {
    option.addEventListener('click', () => {
        if (option.id == questions[questionindex].answer) {
            option.style.backgroundColor = 'green';
        }
        else {
            option.style.backgroundColor = 'red';
        }
        questionindex++;
        if (questionindex < questions.length) {
            setTimeout(() => {
                option.style.backgroundColor = 'white';
                loadQuestion(questionindex);
            }, 2000);
        } else {
            setTimeout(() => {
                window.location.href = 'result.html'
            }, 2000);
        }

    });
});



