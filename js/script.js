async function getAdvice() {
    let resposta = await fetch("https://api.adviceslip.com/advice");
    const data = await resposta.json();
    
    document.querySelector("#advice").innerHTML = data.slip.advice;
  }
 
  let btnAdvice = document.querySelector("#get-advice");
  btnAdvice.addEventListener("click", function() { getAdvice(); });