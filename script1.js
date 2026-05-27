function verificarPromocao(){
    let dia=document.getElementById("dia").value;
    let resultado=document.getElementById("resultado");
    //deixa tudo minusculo//
    dia=dia.toLowerCase();
    //estrutura switch case
    switch(dia){
        case "segunda":
            resultado.innerHTML="Pizza em dobro";
            break;
        case "terça":
            resultado.innerHTML="Refrigerante grátis";
            break;
        case "quarta":
            resultado.innerHTML="rodizio com desconto";
            break;
        case "quinta":
            resultado.innerHTML="sobre-mesa gratis";
            break;
        case "sexta":
            resultado.innerHTML="caipirinha gratis";
            break;
        case "sabado":
            resultado.innerHTML="menu especial";
            break;
        case "domingo":
            resultado.innerHTML="restaurante fechado";
            break;
        default:
        resultado.innerHTML="digite um dia valido"; 
    }
}