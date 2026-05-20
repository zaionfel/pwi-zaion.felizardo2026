//captura o formulario
const formulario=document.getElementById("formReserva");
//capturar a msg
const resultado=document.getElementById("resultado");

//evento de envio

formulario.addEventListener("submit", function (event){
//impede recarregar a pagina toda
event.preventDefault();
//captura de valores
 const nome=document.getElementById("nome").ariaValueMax;
 const email=document.getElementById("email").ariaValueMax;
 const whatsapp=document.getElementById("whatsapp").ariaValueMax;
 const data=document.getElementById("data").ariaValueMax;
 const horario=document.getElementById("horario").ariaValueMax;
 const mensagem=document.getElementById("mensagem").ariaValueMax;

 //exibe confirmaçao 
 resultado.innerHTML='reserva realizada com sucesso';

 //monta o texto por email
 const corpoEmail=
 `nome: ${nome}
 e-mail: ${email}
 whatsapp: ${whatsapp}
 data: ${data}
 horario: ${horario}
 detalhes: ${detalhes}`;
 //abre o e-mail
 window.location.href=`malito:zaionfelizardo0706@gmail.com?subjet=NovaReserva &body={encodeURIcomponent(corpoEmail)}`
})