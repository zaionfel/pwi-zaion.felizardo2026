var pratos = ["lasanha", "risotto", "strogonoff", "macarrao", "pizza", "salada"];

function mostrarPratos() {
    // matriz
    let pratos = ["lasanha", "risotto", "strogonoff", "macarrao", "pizza", "salada"];
    //div resultado
    let resultado1 = document.getElementById("resultado");
    resultado1.innerHTML = "";
    //percorrer a matriz
    for (let i = 0; i < pratos.length; i++) {
       resultado1.innerHTML += "<p>" + pratos[i] + "</p>";
    }
}
function mostrarBebidas() {
    // matriz
    let bebidas = ["coca-cola", "fanta", "guarana", "sprite", "pepsi", "soda"];
    //div resultado
    let resultado2 = document.getElementById("resultado");
    resultado2.innerHTML = "";
    //percorrer a matriz
    for (let i = 0; i < bebidas.length; i++) {
       resultado2.innerHTML += "<p>" + bebidas[i] + "</p>";
    }
}
function escolherPrato() {
    let numeroPrato = document.getElementById("numeroPrato").value;
    let resultado3 = document.getElementById("resultado");
    resultado3.innerHTML=pratos[numeroPrato - 1];   
    } 