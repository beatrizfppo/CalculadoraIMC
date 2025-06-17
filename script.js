const form = document.getElementById('form');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const result = document.getElementById('result');
const container = document.getElementById('container');

form.addEventListener('submit', function (event){
    event.preventDefault();
    calcIMC(peso.value, altura.value);
})

function calcIMC(peso, altura){
    const conta = peso/(altura*altura);
    let classificacao = ""

    if (conta <18.5){
        classificacao = "Baixo peso"
    }
    else if (conta >=18.5 && conta<=24.9){
        classificacao = "Normal"
    }
    else if (conta >=25 && conta<=29.9){
        classificacao = "Sobrepeso"
    }
    else if (conta >=30 && conta<=34.9){
        classificacao = "Obesidade grau I"
    }
    else if (conta >=35 && conta<=39.9){
        classificacao = "Obesidade grau II"
    }
    else{
        classificacao = "Obesidade grau III"
    }

    result.textContent = `${nome.value}, o seu IMC é: ${conta}. Essa é a sua classificação atual: ${classificacao}`

}