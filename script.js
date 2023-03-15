let db = [
    {
        statement: "Comment s'appelle la peur d'être regardé par un canard ?",
        labels: ["L'hippophobie", "L'anatidaephobie", "La cynophobie", "L'arachnophobie"],
        goodAnswer: 2,
        infos: "On ne sait jamais si un canard est dans le coin et qu'il vous regarde du coin de l'oeil."
    },
    {
        statement: "Quel animal produit du lait de couleur rose ?",
        labels: ["Le flamant rose", "L'hippopotame", "Le cochon", "Le babouin bleu"],
        goodAnswer: 2,
        infos: " La raison ? L'hippopotame sécrète deux types d'acides, l'acide hipposudoric et l'acide norhipposudoric. Le premier est de couleur rouge vif, alors que le deuxième est de couleur orange vif."

    },
    {
        statement: "Quelle espèce de requin n'existe pas ?",
        labels: ["Le requin à lunettes", "Le requin bull-dog", "Le requin citron", "Le requin lutin"],
        goodAnswer: 1,
        infos: "Savez-vous qu'il existe aussi le requin lézard, le requin taureau, le requin dormeur, le requin vache ou encore le squale à peau douce."
    },
    {
        statement: "Lequel de ces éléments anatomiques ne permet PAS de distinguer les éléphants d'Asie et ceux d'Afrique ?",
        labels: ["La longueur de la trompe", "La taille des oreilles", "La forme de la trompe", "La taille des défenses"],
        goodAnswer: 1,
        infos: "Savez-vous que leur peau fait environ 2,5 cm d'épaisseur."
    },
    {
        statement: "Le dindon glougloute, le cheval hennit, le chien aboie et la cigale...",
        labels: ["Jase", "Grisolle", "Stridule", "Blatère"],
        goodAnswer: 3,
        infos: "Le chameau blatère, la pie jase et l'alouette grisolle."
    },
    {
        statement: "Quel animal manipule des cailloux pour casser des coquillages ?",
        labels: ["La loutre", "Le manchot", "Le morse", "Le raton laveur"],
        goodAnswer: 1,
        infos: "la loutre de mer possède une densité de poils de 170 000 poils au cm2 alors que l'homme n'a que 20 000 poils sur sa tête."
    },
    {
        statement: "Où se situent les glandes sudoripares d'un chien ?",
        labels: ["Dans la truffe", "Sur la langue", "Sous les pattes", "Sur la queue"],
        goodAnswer: 3,
        infos: "Elles permettent de réguler la température et de suer. C'est pourquoi il ne transpire pas."
    },
    {
        statement: "Quel oiseau pond les oeufs les plus gros ?",
        labels: ["La pie", "Le dodo", "L'autruche", "Le perroquet jaco"],
        goodAnswer: 3,
        infos: "Un oeuf d'autruche pèse entre 1,2 et 1,8kg."
    }
]

let quizLength = 3;
let quiz = [];
function randomize(number) {
    for (let index = 0; index < number; index++) {
        quiz.push(db.splice(Math.floor(Math.random() * db.length), 1)[0]);
    }
    return;
}
randomize(quizLength);

let form = document.querySelector("form");

let finalResult = 0;

let main = document.querySelector(".main");
let wrongRightText = document.querySelector('.wrongRight');
let infoArea = document.querySelector('.infosReponse');
let infoDiv = document.getElementById('infoDiv');
let nextQuestionButton = document.querySelector('.nextQuestionButton');
nextQuestionButton.disabled = true;
let submitButton = document.querySelector(".submitButton");
submitButton.disabled = true;


function start() {
    //on affiche le nombre total de questions à côté du numéro de la question actuelle :
    const totalQuestions = document.getElementById("quizLength");
    totalQuestions.innerHTML = quizLength;

    // on supprime le bouton start
    const startButtonCard = document.querySelector(".startButtonCard");
    startButtonCard.remove();

    // on affiche la question
    main.classList.add('visible');
    nextQuestion();
}

let i = -1;

function nextQuestion() {
    i++;

    // Cachez la div infos
    infoArea.classList.remove('visible');

    //bouton "question suivante" disparait
    nextQuestionButton.disabled = true;
    nextQuestionButton.classList.remove('visible');

    // Reset du message
    wrongRightText.classList.remove('wrong');
    wrongRightText.classList.remove('right');
    wrongRightText.innerHTML = "";

    infoArea.classList.remove('visible');

    if (i < quiz.length) {
        showQuestion();
        //bouton "submit" apparait
        submitButton.disabled = false;
        submitButton.classList.add('visible');

        if (infoDiv.childElementCount > 0) {
            infoDiv.removeChild(infoDiv.children[0])
        }

    } else {
        main.classList.remove('visible');
        showFinalResult()
    }
}

function showQuestion() {

    let qNumber = document.getElementById("questionNumber");
    qNumber.innerText = i + 1;

    let question = document.getElementById("question");
    question.innerText = quiz[i].statement;

    for (let index = 0; index < quiz[i].labels.length; index++) {
        const element = quiz[i].labels[index]; // récupère le texte dans les questions
        let label = document.getElementById("label" + (index + 1))  //je récupère mon label dans l'HTML
        label.innerText = element; //change le label
        //pour enlever la couleur des labels
        label.classList.remove('goodInput');
        label.classList.remove('wrongInput');
        label.parentElement.classList.remove('hidePhone');
    }
}

function checkAnswer() {
    let answer = form.inputRadio.value;

    // Verifier qu'il y a un input selectionné
    if (answer === "") {
        return wrongRightText.innerHTML = "Veuillez sélectionner une réponse."
    }

    for (let index = 0; index < quiz[i].labels.length; index++) {
        let label = document.getElementById("label" + (index + 1))  //je récupère mon label dans l'HTML
        //pour cacher les labels sur phone
        label.parentElement.classList.add('hidePhone');
    }

    if (answer == quiz[i].goodAnswer) {
        // Si bonne réponse

        // Afficher le texte "bonne réponse"
        wrongRightText.classList.add('right');
        wrongRightText.innerHTML = "Bonne réponse 😎";
        
        
        // Mettre la réponse en vert
        let goodInput = document.getElementById("label" + quiz[i].goodAnswer);
        goodInput.parentElement.classList.remove('hidePhone');
        goodInput.classList.add('goodInput');

        // Ajouter au compteur
        addFinalResult();

    } else {
        // Si mauvaise réponse

        // Afficher le texte "mauvaise réponse"
        wrongRightText.classList.add('wrong');
        wrongRightText.innerHTML = "Mauvaise réponse 😕";


        // Mettre la mauvaise réponse en rouge
        let wrongInput = document.getElementById("label" + answer);
        wrongInput.parentElement.classList.remove('hidePhone');
        wrongInput.classList.add('wrongInput');

        // Mettre la bonne réponse en vert
        let goodInput = document.getElementById("label" + quiz[i].goodAnswer);
        goodInput.parentElement.classList.remove('hidePhone');
        goodInput.classList.add('goodInput');
    }

    // Affiche la div infos
    let infoP = document.createElement('p');
    infoArea.classList.add('visible');
    infoDiv.appendChild(infoP);
    infoP.innerHTML = quiz[i].infos;

    // Le bouton question suivante est disponible
    nextQuestionButton.disabled = false;
    nextQuestionButton.classList.add('visible');

    // Changez le texte du bouton si il n'y a plus de question
    if (i + 1 === quizLength) {
        nextQuestionButton.innerText = "Résultat final"
    }

    //bouton "submit" disparait
    submitButton.disabled = true;
    submitButton.classList.remove('visible');
}

function addFinalResult() {
    finalResult++;
}

// Une fois toutes les questions finies
// Afficher le résultat final

function showFinalResult() {
    let finalSentence = document.createElement('p');
    // Changer les conditions en fonction de quiz.length
    if (finalResult <= Math.floor(quiz.length / 5)) {
        finalSentence.innerText = "Dommage ! Tu feras mieux la prochaine fois.";
    } else if (finalResult <= Math.floor(quiz.length / 5 * 3)) {
        finalSentence.innerText = "Bien mais tu peux encore t'améliorer.";
    } else {
        finalSentence.innerText = "Bien joué ! Tu t'y connais en animaux !";
    }
    let finalScore = document.createElement('p');
    finalScore.innerText = "Score final : " + finalResult + " / " + quizLength;

    let resultDiv = document.querySelector(".result");
    resultDiv.classList.add('visible');
    resultDiv.appendChild(finalSentence);
    resultDiv.appendChild(finalScore);

    return
}