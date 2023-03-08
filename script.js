// finalResult : number of good answers
// quiz : le tableau où il y a toutes les questions

function showFinalResult() {
    let finalSentence;
    // Changer les conditions en fonction de quiz.length
    if (finalResult <= 1) {
        finalSentence = "Dommage ! Tu feras mieux la prochaine fois.";
    } else if (finalResult <= 3) {
        finalSentence = "Bien mais tu peux encore t'améliorer.";
    } else {
        finalSentence = "Bien joué ! Tu t'y connais en animaux !";
    }
    // return DOM.innerText = finalSentence;
}