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
var rate = 1000;
var countDown;
var secondsCount = 20;
var champ;
var champScore=0;
var losers;
var looserNameInput;
var winnerNameInput;
var youWin;
var finalScore;
var winnerNameInput
var looserNameInput;
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


    champ=localStorage.getItem("champ");
    champScore=localStorage.getItem("champScore");
    losers=JSON.parse(localStorage.getItem("losers"));
    


    function setChampionDisplay(){
        if (champ!==undefined){
     
            var championNameDisplay = document.createElement("div");
            
         championNameDisplay.textContent=champ;
        //  championNameDisplay.setAttribute("class","ChampionNameDisplay");
            championDisplay.appendChild(championNameDisplay);}
    if(champScore!==undefined){
        var championScoreDisplay=document.createElement("div");
        championScoreDisplay.textContent=champScore;
        championDisplay.appendChild(championScoreDisplay);

    };
    };
     
 function setLoserWall(){

    if(losers!== undefined&&losers !== null){
         for (var i=0; i<losers.length; i++){
             var loserSpot = document.createElement("div");
             loserSpot.textContent=losers[i].name;
             wallOfShameDisplay.appendChild(loserSpot);

         };}
     }
function calculateScore(){
    finalScore=score+secondsCount;
}
function showScore(){
    var showFinalScore = document.createElement("div");
    showFinalScore.textContent="score"+ finalScore;
    showFinalScore.setAttribute("class","showFinalScore");
    youWin.appendChild(showFinalScore);
}
function storeWinner(){
    
    
    // if (finalScore > champScore||champScore===undefined||champScore===null){
    localStorage.setItem("champScore", finalScore);
    var winnerNameSubmit = winnerNameInput.value;
    
    localStorage.setItem("champ", winnerNameSubmit);
    // openingPage.removeChild(youWin);
    
    // }
}

function storeLooser(){
    
    
    var looserSubmit= looserNameInput.value;
    console.log(looserSubmit);
    
    // if (losers === undefined||losers===null){
        
        looserNameSubmit={"name":looserSubmit};
        losers.push(looserNameSubmit);
    // };
    localStorage.setItem("losers",JSON.stringify(losers));
    // openingPage.removeChild(youLoose);
    
}

function startQuiz(){
    
     i=0;
     score=0;
     rate = 1000;
     countDown;
     secondsCount = 20;
    openingPage.setAttribute("style","visibility:hidden;");
    
    StartQuestioning()};
function StartQuestioning(){
    if(score!==questions.length){
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
        }; }
function timer(){
 countDown = setInterval(function(){
        timeCounter.firstChild.textContent=secondsCount;
        secondsCount--;
        if (secondsCount===0){
            clearInterval(countDown);
            openingPage.setAttribute("style","visibility:visible");
            var youLoose = document.createElement("div");
            youLoose.textContent="YOU LOOSE!" 
            youLoose.setAttribute("class","youLoose");
            openingPage.appendChild(youLoose);
            var looserNameForm = document.createElement("form");
            looserNameForm.setAttribute("class","looserNameForm");
            looserNameInput=document.createElement("input");
            looserNameInput.placeholder="your name";
            looserNameInput.setAttribute("class","looserNameInput");
            var looserNameSubmit= document.createElement("input");
            looserNameSubmit.setAttribute("type","submit");
            looserNameForm.appendChild(looserNameSubmit);
            youLoose.appendChild(looserNameForm);
            looserNameForm.appendChild(looserNameInput);
            looserNameForm.addEventListener("submit", storeLooser);
            
            
        };
        if(score===questions.length){
            clearInterval(countDown);
            openingPage.setAttribute("style","visibility:visible");
            youWin = document.createElement("div");
            youWin.textContent="COMPLETE!!"; 
            youWin.setAttribute("class","youWin");
            openingPage.appendChild(youWin);
            calculateScore();
            showScore();
            var winnerNameForm = document.createElement("form");
            winnerNameForm.setAttribute("class","winnerNameForm");
            winnerNameInput=document.createElement("input");
            winnerNameInput.placeholder="your good name";
            winnerNameInput.setAttribute("class","winnerNameInput");
            var winnerNameSubmit= document.createElement("input");
            winnerNameSubmit.setAttribute("type","submit");
            winnerNameForm.appendChild(winnerNameSubmit);
            youWin.appendChild(winnerNameForm);
            winnerNameForm.appendChild(winnerNameInput);
            winnerNameForm.addEventListener("submit",storeWinner);
            
            
        };
        },rate)
    };

    
    
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
               
                wrong.textContent="WRONG!"
                wrong.setAttribute("class","wrong");
                element.appendChild(wrong);
                element.classList.add("shakeAnimation");
                rate*=0.8;
                setTimeout(function(){
                element.removeChild(wrong);
                element.classList.remove("shakeAnimation");},1000);
                clearInterval(countDown);
                timer();

            };
        }
           
        
 answerBlock[0].addEventListener("click", pickAnswer);
 answerBlock[1].addEventListener("click", pickAnswer);
 answerBlock[2].addEventListener("click", pickAnswer);
 answerBlock[3].addEventListener("click", pickAnswer);

 
 




//  if(winnerNameInput){
     

//  winnerNameForm.addEventListener("submit",storeWinner);}

//  if(looserNameInput){

// looserNameForm.addEventListener("submit", storeLooser);
//  }


setChampionDisplay();
setLoserWall();
     

if(startButton){
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", timer);}





// function storeTodos() {
//     // Stringify and set "todos" key in localStorage to todos array
//     localStorage.setItem("todos", JSON.stringify(todos));

// function init() {
//     // Get stored todos from localStorage
//     // Parsing the JSON string to an object
//     var storedTodos = JSON.parse(localStorage.getItem("todos"));