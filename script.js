const h1 = document.querySelector('h1');

const suma = () =>{
    resultado = s1.value + s2.value;
    parrafo.textContent = resultado;
}



let s1 = document.querySelector('#calculo1')

let s2 = document.querySelector('#calculo2')

const btn = document.querySelector('#btnCalcular');

let parrafo = document.querySelector('#parrafo');

btn.addEventListener('click', suma);











