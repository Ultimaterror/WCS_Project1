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