
let boton = document.querySelector('#btnMeGusta');
let text = "gracias por vistar....Fan page Trigun";
let numeros = 0;

boton.addEventListener('click', () => {
    console.log("click");
    numeros++;
    document.body.style.background ='radial-gradient(black,grey,brown,silver)';
    parrafo.innerHTML=`${text}`;
    let parrafoImp = document.createElement("p");
    document.body.appendChild(parrafoImp);
    parrafoImp.textContent = "Gracias por tu visita!";
});

let botonDos = document.querySelector('#btnMeEncanta');
botonDos.addEventListener('click', UnClickeo,false);
let meGusta ="muy bien, nuevos contenidos todas las semanas!";
function UnClickeo() {
    console.log("hecho");
    numeros++;
    parrafo.innerHTML=`<p>${meGusta}<u>MeEncanta:.</u>( ${numeros} )</p>`;
    document.body.style.background = "radial-gradient(brown,red,black,grey,black,brown,grey)";
    if(numeros >=10){
        parrafo.innerHTML=`<u>Es hora de trabaja!.MeEncanta:( ${numeros} )</u>`;
    }
    //botonDos.removeEventListener('click', UnClickeo);
};

let btnSacar = document.querySelector('#btnNoMegusta');
let noMeGusta = "gracias..tu valoracion nos ayuda a mejorar";
btnSacar.addEventListener('click', () => {
    numeros++;
    document.body.style.background = "white";
    parrafo.innerHTML=`<h4>${noMeGusta}.<u>NoMegusta:</u>( ${numeros} )</h4>`;
});

let gracias = "<h1>Muchas gracias!!!</h1>";

let parrafo = document.querySelector('.parrafo');
parrafo.addEventListener('click', ()=>{
    document.body.style.background = "linear-gradient(red,brown,black, silver,black, brown, grey)";
    parrafo.innerHTML=`${gracias}`;
});
   
    
        
        
        
    
    
