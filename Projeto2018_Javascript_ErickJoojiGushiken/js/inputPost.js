var mensagem_container = document.querySelector("main");
var caixaPost = mensagem_container.firstChild;
var botaoAdicionar = document.querySelector(".botoes_flutuante");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var texto = document.querySelector("#novo_post");
    var mensagem = texto.value;
    var usuario = "SEU_NOME";
    var userPicture = "https://hollywoodmask.com/uploads/images/marshmello(2).jpg";

// Atribui os dados
    var mensagemVetor = {"user":usuario, "message":mensagem, "imgUrl":userPicture};
    adicionaMensagem(mensagemVetor);
});


