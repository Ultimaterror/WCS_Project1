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