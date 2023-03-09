let bonneReponse = document.getElementById('#');
let mauvaiseReponses = document.getElementById('#');





function colorReponse(){
   
    
    if(reponseSelectioner === mauvaiseReponses){
       reponseSelectioner.classList.add('mauvaiseReponse');
       bonneReponse = bonneReponse.classList.add('bonneReponse');
    }else{
       reponseSelectioner.classList.add('bonneReponse');
    }
}