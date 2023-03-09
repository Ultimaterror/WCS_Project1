let db = [
    {
        question: "A1"
    },
    {
        question: "B2"
    },
    {
        question: "C3"
    },
    {
        question: "D4"
    },
    {
        question: "K6"
    },
]

let quiz = [];

function randomize (number) {
    for (let index = 0; index < number; index++) {
        quiz.push(db.splice(Math.floor(Math.random() * db.length), 1));
    }
    return;
}
randomize(2);


let i = 0;

function nextQuestion(){
    showQuestion();
    i++;
}
//Conditions if
//ESSAI n°1
let answer = quiz[goodAnswer];//vérifier comment est enregistré les réponses dans le JS
let response = document.getElementById().value//trouver l'ID des boutons radio
let score = 0;
if(response == quiz[answer]){
    //on modifie les couleurs des réponses (vert = OK, rouge = BAD)
    //on affiche "Vrai" ou "Faux"
    //on rend le bouton "question suivante" visible/cliquable
    score++;
}

//DOM


//Enregistrer le résultat


//Renvoyer si juste ou faux


let finalResult = 0;
// quiz : le tableau où il y a toutes les questions
function addFinalResult () {
    finalResult++;
}

function showFinalResult() {
    let finalSentence;
    // Changer les conditions en fonction de quiz.length
    // if (finalResult <= Math.round(quiz.length / 5)) {
    if (finalResult <= 1) {
        finalSentence = "Dommage ! Tu feras mieux la prochaine fois.";

    // if (finalResult <= Math.round(quiz.length / 5 * 3)) {
    } else if (finalResult <= 3) {
        finalSentence = "Bien mais tu peux encore t'améliorer.";
    } else {
        finalSentence = "Bien joué ! Tu t'y connais en animaux !";
    }
    // return DOM.innerText = finalSentence;
}
function showQuestion() {
    // Bien changer le DOM

    let qNumber = document.getElementById("questionNumber");
    qNumber.innerText = i + 1;

    let question = document.getElementById("question");
    question.innerText = quiz[i].question;

    let radio1 = document.getElementById("radio1");
    radio1.value = quiz[i].inputValue1;
    
    let label1 = document.getElementById("label1");
    label1.innerText = quiz[i].label1;
    
    let radio2 = document.getElementById("radio2");
    radio2.value = quiz[i].inputValue2;
    
    let label2 = document.getElementById("label2");
    label2.innerText = quiz[i].label2;

    let radio3 = document.getElementById("radio3");
    radio3.value = quiz[i].inputValue3;
    
    let label3 = document.getElementById("label3");
    label3.innerText = quiz[i].label3;

    let radio4 = document.getElementById("radio4");
    radio4.value = quiz[i].inputValue4;
    
    let label4 = document.getElementById("label4");
    label4.innerText = quiz[i].label4;

}