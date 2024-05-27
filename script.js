const startButton = documnet.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')

startButton.addEventListner('click', startGame)



function startGame() {
 console.log('Started')
 startButton.classList.add('hide') kolla denna sen
 questionContainerElement.classList.remove('hide')
 setNextQuestion()
}




function setNextQuestion() {

}

function selectAnswer(){

}


const questions =[
   {
    question: 'What is 2 + 2',
    answers:[
        {text: '4', correct:true}
    ]
}

]


