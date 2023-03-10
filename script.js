let i = 0;

//Checker les réponses --------------------------------------------
function submitQuestion(){
    showQuestion();
    i++;
}
//let answer = quiz[goodAnswer]; // BUG CAR PAS LE QUIZZ
let userAnswer = document.querySelectorAll('input[name="inputRadio"]');
for (const i of userAnswer){
    if(i.checked){
        answer = i.value;
    }
}

const nextQuestionButton = document.getElementById('questionSuivanteButton');
nextQuestionButton.disabled = true;
function checkAnswer() {
    if(answer == quiz[answer]){        
        //document.getElementById('vrai').style.display='flex'; //on affiche "Vrai"
        nextQuestion.disabled = false;//on rend le bouton "question suivante" visible/cliquable
        addFinalResult();//incrémentation du score
    } //document.getElementById('faux').style.display='flex'; //on affiche "Faux"
}
//FIN -- Checker les réponses --------------------------------------

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
let quiz = [
    {
        question: "Comment s'appelle la peur d'être regardé par un canard ?",
        label1: "L'hippophobie",
        inputValue1: "hippophobie",
        label2: "L'anatidaephobie",
        inputValue2: "anatidaephobie",
        label3: "La cynophobie",
        inputValue3: "cynophobie",
        label4: "L'arachnophobie'",
        inputValue4: "arachnophobie",
        goodAnswer: "anatidaephobie",
        infos: "On ne sait jamais si un canard est dans le coin et qu'il vous regarde du coin de l'oeil"
    },
    {
        question: "Quel animal produit du lait de couleur rose ?",
        label1: "Le flamant rose",
        inputValue1: "flammentRose",
        label2: "L'hippopotame",
        inputValue2: "hippopotame",
        label3: "Le cochon",
        inputValue3: "cochon",
        label4: "Le babouin bleu",
        inputValue4: "babouinBleu",
        goodAnswer: "hippopotame",
        infos: " La raison ? L'hippopotame sécrète deux types d'acides, l'acide hipposudoric et l'acide norhipposudoric. Le premier est de couleur rouge vif, alors que le deuxième est de couleur orange vif"
   
    },
    {
    question: "Quelle espèce de requin n'existe pas ?",
        label1: "Le requin à lunettes",
        inputValue1: "requinLunettes",
        label2: "Le requin bull-dog",
        inputValue2: "requinBullDog",
        label3: "Le requin citron",
        inputValue3: "leRequinCitron",
        label4: "Le requin lutin",
        inputValue4: "requinLutin",
        goodAnswer: "requinLunettes",
        infos: "Savez-vous qu'il existe aussi le requin lézard, le requin taureau, le requin dormeur, le requin vache ou encore le squale à peau douce."
}
]