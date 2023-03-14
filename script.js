let db = [
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
        inputValue1: "flamantRose",
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

let quiz = [];
function randomize(number) {
    for (let index = 0; index < number; index++) {
        quiz.push(db.splice(Math.floor(Math.random() * db.length), 1)[0]);
    }
    console.log(quiz);
    return;
}
randomize(2);

let form = document.querySelector("form");
// console.log(form);


let finalResult = 0;
let rightAnswer = document.getElementById('vrai');
let wrongAnswer = document.getElementById('faux');
let bonneReponse = document.getElementById('#');
let mauvaiseReponses = document.getElementById('#');
let infoDiv = document.getElementById('infoDiv');


function start() {
    const startButtonCard = document.getElementsByClassName("startButtonCard");
    startButtonCard.remove();
    nextQuestion();
}

let i = -1;

function nextQuestion() {
    i++;
    if (i < quiz.length) {
        showQuestion();
    } else {
        showFinalResult()
    }
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


// let userAnswer = document.querySelectorAll('input[name="inputRadio"]');
// for (const i of userAnswer) {
//     if (i.checked) {
//         answer = i.value;
//     }
// }



const nextQuestionButton = document.getElementById('questionSuivanteButton');
nextQuestionButton.disabled = true;

let submitButton = document.getElementById("submitButton");

function checkAnswer() {
    // Verifier qu'il y a un input selectionné
    let answer = form.elements.inputRadio.value;
    console.log(answer);
    if (answer === "") {
        // console.log("passe pas");
        return
    }
    // console.log("passe");

    if (answer == quiz[i].goodAnswer) {
        // Si bonne réponse

        // Afficher le texte "bonne réponse"
        rightAnswer.classList.add('vraiText');

        // Mettre la réponse en vert
        reponseSelectioner.classList.add('bonneReponse');

        // Ajouter au compteur
        addFinalResult();

    } else {
        // Si mauvaise réponse

        // Afficher le texte "mauvaise réponse"
        wrongAnswer.classList.add('fauxText');

        // Mettre la mauvaise réponse en rouge
        reponseSelectioner.classList.add('mauvaiseReponse');

        // Mettre la bonne réponse en vert
        bonneReponse.classList.add('bonneReponse');



        //document.getElementById('faux').style.display='flex'; //on affiche "Faux"
    }

    // Affiche la div infos
    let infoP = document.createElement('p');

    infoDiv.appendChild(infoP);
    infoP.classList.add('infoM');
    infoP.innerHTML = quiz.infos;


    // Le bouton question suivante est disponible
    nextQuestion.disabled = false;//on rend le bouton "question suivante" visible/cliquable


}

// Question suivante


// Une fois toutes les questions finies
// Afficher le résultat final




//FIN -- Checker les réponses --------------------------------------


function addFinalResult() {
    finalResult++;
}

function showFinalResult() {
    let finalSentence;
    // Changer les conditions en fonction de quiz.length
    if (finalResult <= Math.floor(quiz.length / 5)) {
        finalSentence = "Dommage ! Tu feras mieux la prochaine fois.";
    } else if (finalResult <= Math.floor(quiz.length / 5 * 3)) {
        finalSentence = "Bien mais tu peux encore t'améliorer.";
    } else {
        finalSentence = "Bien joué ! Tu t'y connais en animaux !";
    }
    // return DOM.innerText = finalSentence;
}










// Function pour colorer les réponses
//
// function colorReponse() {
//     if (reponseSelectioner === mauvaiseReponses) {
//         reponseSelectioner.classList.add('mauvaiseReponse');
//         bonneReponse.classList.add('bonneReponse');
//     } else {
//         reponseSelectioner.classList.add('bonneReponse');
//     }
// }




// submitButton.addEventListener('click', () => {
//     let infoDiv = document.getElementById('infoDiv');
//     let infoP = document.createElement('p');

//     infoDiv.appendChild(infoP);
//     infoP.classList.add('infoM');
//     infoP.innerHTML = quiz.infos;

// })


// function affiche texte bonne ou mauvaise reponse.


// function textAnswer() {
//     if (rightAnswer === true) {
//         rightAnswer.classList.add('vraiText');
//     } else {
//         wrongAnswer.classList.add('fauxText');
//     }
// }