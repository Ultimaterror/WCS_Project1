let db = [
    {
        question: "Comment s'appelle la peur d'être regardé par un canard ?",
        labels: ["L'hippophobie", "L'anatidaephobie", "La cynophobie", "L'arachnophobie"],
        goodAnswer: 2,
        infos: "On ne sait jamais si un canard est dans le coin et qu'il vous regarde du coin de l'oeil."
    },
    {
        question: "Quel animal produit du lait de couleur rose ?",
        labels: ["Le flamant rose", "L'hippopotame", "Le cochon", "Le babouin bleu"],
        goodAnswer: 2,
        infos: " La raison ? L'hippopotame sécrète deux types d'acides, l'acide hipposudoric et l'acide norhipposudoric. Le premier est de couleur rouge vif, alors que le deuxième est de couleur orange vif."

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

// let rightText = document.getElementById('vrai');
// let wrongText = document.getElementById('faux');
let wrongRightText = document.querySelector('.wrongRight');

let infoArea = document.querySelector('.infosReponse');
let infoDiv = document.getElementById('infoDiv');
let main = document.querySelector(".main");


function start() {
    const startButtonCard = document.querySelector(".startButtonCard");
    startButtonCard.remove();
    main.classList.add('visible');
    nextQuestion();
}

let i = -1;

function nextQuestion() {
    i++;
    infoArea.classList.remove('visible');

    //bouton "question suivante" disparait
    nextQuestionButton.disabled = true;
    nextQuestionButton.classList.remove('visible');

    wrongRightText.classList.remove('wrong');
    wrongRightText.classList.remove('right');
    wrongRightText.innerHTML = "";

    infoArea.classList.remove('visible');

    if (i < quiz.length) {
        showQuestion();
        //bouton "submit" apparait
        submitButton.disabled = false;
        submitButton.classList.add('visible');

        // rightText.classList.remove('visible');
        // wrongText.classList.remove('visible');

        if (infoDiv.childElementCount > 0) {
            infoDiv.removeChild(infoDiv.children[0])
        }

    } else {
        main.classList.remove('visible');
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
        let label = document.getElementById("label" + (index + 1))  //je récupère mon label dans l'HTML
        label.innerText = element; //change le label
        //pour enlever la couleur des labels
        label.classList.remove('goodInput');
        label.classList.remove('wrongInput');
    }
}


// let userAnswer = document.querySelectorAll('input[name="inputRadio"]');
// for (const i of userAnswer) {
//     if (i.checked) {
//         answer = i.value;
//     }
// }



const nextQuestionButton = document.querySelector('.nextQuestionButton');
// nextQuestionButton.disabled = true;

let submitButton = document.querySelector(".submitButton");

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
        // rightText.classList.add('visible');
        wrongRightText.classList.add('right');
        wrongRightText.innerHTML = "Bonne réponse 😎";


        // Mettre la réponse en vert
        let goodInput = document.getElementById("label" + quiz[i].goodAnswer);
        goodInput.classList.add('goodInput');
        // console.log(goodInput);

        // Ajouter au compteur
        addFinalResult();

    } else {
        // Si mauvaise réponse

        // Afficher le texte "mauvaise réponse"
        // wrongText.classList.add('visible');
        wrongRightText.classList.add('wrong');
        wrongRightText.innerHTML = "Mauvaise réponse 😕";


        // Mettre la mauvaise réponse en rouge
        let wrongInput = document.getElementById("label" + answer);
        wrongInput.classList.add('wrongInput');

        // Mettre la bonne réponse en vert
        let goodInput = document.getElementById("label" + quiz[i].goodAnswer);
        goodInput.classList.add('goodInput');



        //document.getElementById('faux').style.display='flex'; //on affiche "Faux"
    }

    // Affiche la div infos
    let infoP = document.createElement('p');

    infoArea.classList.add('visible');
    infoDiv.appendChild(infoP);
    infoP.innerHTML = quiz[i].infos;



    // Le bouton question suivante est disponible
    nextQuestionButton.disabled = false;
    nextQuestionButton.classList.add('visible');

    //bouton "submit" disparait
    submitButton.disabled = true;
    submitButton.classList.remove('visible');

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
    let resultDiv = document.querySelector(".result");
    resultDiv.classList.add('visible');
    return resultDiv.innerHTML = finalSentence;
}










// Function pour colorer les réponses
//
// function colorReponse() {
//     if (reponseSelectioner === wrongInputs) {
//         reponseSelectioner.classList.add('wrongInput');
//         goodInput.classList.add('goodInput');
//     } else {
//         reponseSelectioner.classList.add('goodInput');
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
//     if (rightText === true) {
//         rightText.classList.add('vraiText');
//     } else {
//         wrongText.classList.add('fauxText');
//     }
// }

