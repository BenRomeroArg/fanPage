//seccion comentarios

let convertir = document.querySelector('.convert');
let textarea = document.querySelector('.textarea');
let mostrar = document.querySelector('.mostrar');
let modif = document.querySelector('.modificar');

let saludo = "muchas gracias por visitar esta pagína web,...no dejes de compartir, nuevos contenidos y novedades todas las semanas, hasta pronto..Uwu!!";

let speech = new SpeechSynthesisUtterance();

convertir.addEventListener('click', () => {
    speech.text =  saludo;
    speech.pitch = 1; speech.volume = 2;
    speech.lang = "es-ES";
    speech.rate = 0.8;
    speechSynthesis.speak(speech);
    
})
mostrar.addEventListener('click', ()=>{
    modif.innerHTML =`<h2>${textarea.value}(179)</h2>`;
    modif.style.background = "violet";
    modif.style.padding = "5px";
})



