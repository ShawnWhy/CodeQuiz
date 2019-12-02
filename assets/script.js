var championDisplay = document.querySelector("#champion-display");
var wallOfShameDisplay= document.querySelector("#wall-of-shame");
var questionDisplay = document.querySelector("#question-display");
var answerBlock = document.querySelectorAll(".answer-block");

var startButton = document.querySelector("#start-button");
var openingPage= document.querySelector("#open-screen");
var timeCounter = document.querySelector("#time-counter");
var timeCounterText = document.querySelector("#counter-text");
var scoreCounter = document.querySelector("#score-counter");
var i=0;
var score=0;
var rate = 1;
var countDown;
var secondsCount = 20;
var questions = [
    {"question" : "what is the symbol that calls a element by ID?",
    "trueAnswer":"#",
    "answers":["#","%","&","|" ]
    },
    {"question":"what is the symbol that means 'or'?",
     "trueAnswer":"||",
     "answers":["&&","**","@@","||"],
    },
    {"question":"if a element does not exist inside of an awway, what is its index number?",
     "trueAnswer":"-1",
    "answers":["nope","-1","@","^^"] },
    {"question":"what is the sign for get the remainder?",
    "trueAnswer":"%",
    "answers":["*","^","$","%"],},
    {"question":"what built-in function adds one html elements as a child to another?",
     "trueAnswer":".push",
    "answers":[".add",".splice",".merge",".push"]},
    ];
    // var champion=localStorage.getItem(Champ);
    // if(champion){
    //     championDisplay.textcontent=champion;
    // };



function startQuiz(){
     i=0;
     score=0;
     rate = 1;
     countDown;
     secondsCount = 20;
    openingPage.setAttribute("style","visibility:hidden;");
    StartQuestioning()};
function StartQuestioning(){
    questionDisplay.textContent=questions[i].question;
    var tempAnswers=questions[i].answers;
    for(j=tempAnswers.length-1; j>0;j--){
        var rdmPosition = Math.floor(Math.random()*(j+1));
        var holderBox=tempAnswers[j];
        tempAnswers[j]=tempAnswers[rdmPosition];
        tempAnswers[rdmPosition]=holderBox;};
  for(j=0; j<4;j++){
        answerBlock[j].firstChild.textContent=tempAnswers[j];
        answerBlock[j].setAttribute("value",tempAnswers[j]);}
        }; 
function timer(){
    var countDown = setInterval(function(){
        timeCounter.firstChild.textContent=secondsCount;
        secondsCount--;
        if (secondsCount===0){
            clearInterval(countDown);
            openingPage.setAttribute("style","visibility:visible");
            var youLoose = document.createElement("div");
            youLoose.textContent="YOU LOOSE!" 
            youLoose.setAttribute("class","youLoose");
            openingPage.appendChild(youLoose);
            var looserNameInput = document.createElement("input")
            looserNameInput.setAttribute("class","looserNameInput");
            looserNameInput.placeholder="your name";
            openingPage.appendChild(looserNameInput);
        };},rate*1000)
    
    
 function pickAnswer(event){
             event.stopPropagation();
            var element = event.currentTarget;
            if(element.firstChild.textContent === questions[i].trueAnswer){
                var correct = document.createElement("div");
                correct.textContent="CORRECT!";
                correct.setAttribute("class","correct");
                element.appendChild(correct);
                element.classList.add("toothExtractAnimation");
                secondsCount+=5;
                score++;
                scoreCounter.firstChild.textContent=score;
                i++
                setTimeout(function(){
                element.removeChild(correct);
                element.classList.remove("toothExtractAnimation")},2000);
                StartQuestioning();
            
            
            
            
            }
            else{
                var wrong = document.createElement("div");
                wrong.setAttribute("class","wrong");
                element.appendChild(wrong);
                element.classList.add("shakeAnimation");
                rate /=2;
                setTimeout(function(){
                element.removeChild(wrong);
                element.classList.remove("shakeAnimation");},1000);
            };
           
        }
answerBlock[0].addEventListener("click", pickAnswer);
 answerBlock[1].addEventListener("click", pickAnswer);
 answerBlock[2].addEventListener("click", pickAnswer);
 answerBlock[3].addEventListener("click", pickAnswer);
};

if(score===5){
    console.log(questions.length);
    clearInterval(countDown);
    openingPage.setAttribute("style","visibility:visible");
    var youLoose = document.createElement("div");
    youLoose.textContent="YOU LOOSE!" 
    youLoose.setAttribute("class","youLoose");
    openingPage.appendChild(youLoose);
    var looserNameInput = document.createElement("input")
    looserNameInput.setAttribute("class","looserNameInput");
    looserNameInput.placeholder="your name";
    openingPage.appendChild(looserName);

};
        


     

if(startButton){
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", timer);}







  