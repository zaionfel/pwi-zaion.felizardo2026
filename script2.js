// Matriz de usuários cadastrados: [Usuário, Senha]
const usuariosCadastrados = [
    ["zaion", "1234"],
    ["vinicius", "abc@2026"],
    ["nicolas", "senhaSegura"],
    ["lucas", "p3dr0!"]
];

function efetuarLogin() {
    // Captura os valores digitados pelo usuário
    const usuarioDigitado = document.getElementById("usuario").value;
    const senhaDigitada = document.getElementById("senha").value;
    const msgElemento = document.getElementById("mensagem");

    // Variável de controle para saber se encontramos o usuário
    let loginSucesso = false;

    // Percorre a matriz para verificar as credenciais
    for (let i = 0; i < usuariosCadastrados.length; i++) {
        let usuarioMatriz = usuariosCadastrados[i][0]; // Coluna 0 é o Usuário
        let senhaMatriz = usuariosCadastrados[i][1];   // Coluna 1 é a Senha

        // Se o usuário E a senha coincidirem com a linha atual da matriz
        if (usuarioDigitado === usuarioMatriz && senhaDigitada === senhaMatriz) {
            loginSucesso = true;
            break; // Usuário encontrado, podemos parar o loop
        }
    }

    // Exibe o resultado na tela
    if (loginSucesso) {
        msgElemento.style.color = "green";
        msgElemento.innerHTML = `Bem-vindo, ${usuarioDigitado}! Login efetuado com sucesso.`;
    } else {
        msgElemento.style.color = "red";
        msgElemento.innerHTML = "Usuário ou senha incorretos. Tente novamente.";
    }
}