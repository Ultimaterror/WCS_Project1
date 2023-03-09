
let quiz = {
    infos : "plus d'info"
}

let submitButton = document.getElementById("submitButton");


submitButton.addEventListener('click', () => {
  let infoDiv = document.getElementById('infoDiv');
  let infoP = document.createElement('p');
    
    infoDiv.appendChild(infoP);
    infoP.classList.add('infoM');
    infoP.innerHTML = quiz.infos;

 })
