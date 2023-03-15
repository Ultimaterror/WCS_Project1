let db = [
    {
        question: "Comment s'appelle la peur d'être regardé par un canard ?",
        labels: ["L'hippophobie", "L'anatidaephobie", "La cynophobie", "L'arachnophobie"],
        goodAnswer: 2,
        infos: "On ne sait jamais si un canard est dans le coin et qu'il vous regarde du coin de l'oeil"
    },
    {
        question: "Quel animal produit du lait de couleur rose ?",
        labels: ["Le flamant rose", "L'hippopotame", "Le cochon", "Le babouin bleu"],
        goodAnswer: 2,
        infos: " La raison ? L'hippopotame sécrète deux types d'acides, l'acide hipposudoric et l'acide norhipposudoric. Le premier est de couleur rouge vif, alors que le deuxième est de couleur orange vif"

    },
    {
        question: "Quelle espèce de requin n'existe pas ?",
        labels: ["Le requin à lunettes", "Le requin bull-dog", "Le requin citron", "Le requin lutin"],
        goodAnswer: 1,
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

let rightText = document.getElementById('vrai');
let wrongText = document.getElementById('faux');

let infoArea = document.querySelector('.infosReponse')
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
        //bouton "submit" apparait
        submitButton.disable = false;
        //bouton "question suivante" disparait
        nextQuestion.disabled = true;
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

    for (let index = 0; index < quiz[i].labels.length; index++) {
        const element = quiz[i].labels[index]; // récupère le texte dans les questions
        let label = document.getElementById("label"+(index+1))  //je récupère mon label dans l'HTML
        label.innerText = element; //change le label
    }
}


// let userAnswer = document.querySelectorAll('input[name="inputRadio"]');
// for (const i of userAnswer) {
//     if (i.checked) {
//         answer = i.value;
//     }
// }



const nextQuestionButton = document.getElementById('questionSuivanteButton');
// nextQuestionButton.disabled = true;

let submitButton = document.getElementById("submitButton");

function checkAnswer() {
    // Verifier qu'il y a un input selectionné
    let answer = form.elements.inputRadio.value;
    //console.log(answer);
    if (answer === "") {
        // Message d'erreur
        return
    }

    if (answer == quiz[i].goodAnswer) {
        // Si bonne réponse

        // Afficher le texte "bonne réponse"
        rightText.classList.add('visible');

        // Mettre la réponse en vert
        let bonneReponse = document.getElementById("label"+quiz[i].goodAnswer);
        bonneReponse.classList.add('bonneReponse');
        console.log(bonneReponse);

        // Ajouter au compteur
        addFinalResult();

    } else {
        // Si mauvaise réponse

        // Afficher le texte "mauvaise réponse"
        wrongText.classList.add('visible');

        // Mettre la mauvaise réponse en rouge
        let mauvaiseReponse = document.getElementById("label"+answer);
        mauvaiseReponse.classList.add('mauvaiseReponse');

        // Mettre la bonne réponse en vert
        let bonneReponse = document.getElementById("label"+quiz[i].goodAnswer);
        bonneReponse.classList.add('bonneReponse');



        //document.getElementById('faux').style.display='flex'; //on affiche "Faux"
    }

    // Affiche la div infos
    let infoP = document.createElement('p');

    infoArea.classList.add('visible')
    infoDiv.appendChild(infoP);
    infoP.innerHTML = quiz[i].infos;



    // Le bouton question suivante est disponible
    nextQuestion.disabled = false;//on rend le bouton "question suivante" visible/cliquable
    //bouton "submit" disparait
    submitButton.disable = true;

}

// Question suivante


// Une fois toutes les questions finies
// Afficher le résultat final


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




submitButton.addEventListener('click', () => {
    let infoDiv = document.getElementById('infoDiv');
    let infoP = document.createElement('p');

    infoDiv.appendChild(infoP);
    infoP.classList.add('infoM');
    infoP.innerHTML = quiz.infos;

})


// function affiche texte bonne ou mauvaise reponse.



function textAnswer() {
     if (rightAnswer === true) {
         rightAnswer.classList.add('vraiText');
     } else {
         wrongAnswer.classList.add('fauxText');
     }
 }

// function textAnswer() {
//     if (rightText === true) {
//         rightText.classList.add('vraiText');
//     } else {
//         wrongText.classList.add('fauxText');
//     }
// }

