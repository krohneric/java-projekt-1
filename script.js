const startButton = documnet.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')

const questionElement = documnet.getElementById('question')
const answerButtonsElement = documnet.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex


startButton.addEventListner('click', startGame)



function startGame() {
 console.log('Started')
 startButton.classList.add('hide') kolla denna sen
 shuffledQuestions = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 questionContainerElement.classList.remove('hide')
 setNextQuestion()
}




function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer(){

}


function showQuestion(question){
questionElement.innerText = question.question
question.answers.forEach(answer =>
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')

){

}

}



const questions =[
   {
    question: 'what s the name of swedish king',
    answers:[
        {text: '4', correct:true}
        {text:'22', correct: false}   
    ]

}

]


