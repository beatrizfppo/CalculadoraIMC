const form = document.getElementById('form');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const result = document.getElementById('result');

form.addEventListener('submit', function (event){
    event.preventDefault();
    calcIMC(peso, altura);
})

function calcIMC(p, a){
    const conta = p/(a*a);
    if (conta > 40){
        const imc = document.createElement('p')
    }
}