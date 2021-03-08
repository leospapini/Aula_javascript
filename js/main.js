function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    // console.log(document.getElementById("agradecimento"));
    //     alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.facebook.com/leonardo.papini.509/");
    //window.location.href="https://www.facebook.com/leonardo.papini.509/"
}

function trocar(elemento){
    elemento.innerHTML = "Você passou o mouse";
    //document.getElementById("mousemove").innerHTML = "Você passou o mouse";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

// function soma(n1, n2){
//     return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome)
// }

// function validaIdade(idade){
//     var validar;
//     if (idade>=18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual a sua idade?");
// console.log(validaIdade(idade));

// alert(soma(5, 10));
// alert (setReplace("Vai Japão", "Japão", "Brasil"));

// var d = new Date();
//     alert(d.getMonth());
//     alert(d.getDay());
//     alert(d.getMinutes());

// var count;
// for(count=0; count<=5; count++){
//     alert(count);
// }

// var count = 0;
// while (count<=5){
//     console.log(count);
//     count++
// }

// var idade = prompt("Qual a sua idade?");
// // var idade = 18;
// if (idade>=18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// }

// var lista = ["maçã", "pêra", "laranja"];
// lista.push("uva");
// console.log(lista.toString());
// console.log(lista.join(" - "));

// var frutas = [{nome:"Maçã", cor:"vermelha"}, {nome:"Uva", cor:"roxa"}]
// console.log(frutas);
// alert(frutas[1].nome);

// var fruta = {nome:"Maçã", cor:"vermelha"}
// console.log(fruta.nome);
// alert(fruta.cor);
var nome = "Leonardo Papini";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade);
// alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toLowerCase());
