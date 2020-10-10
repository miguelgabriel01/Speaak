const utterance = new SpeechSynthesisUtterance();
utterance.lang = "pt-BR";//idioma
utterance.rate = 1;//velocidade

//função que inicia a fala do texto
function speak(){
  speechSynthesis.speak(utterance);
}

//função para parar o texto
function stop(){
 speechSynthesis.cancel();
}

//função que recebe o texto do input
function setText(event){
  utterance.text = event.target.innerText;
 }