var mensagem_container = document.querySelector("main");
function adicionaMensagem(mensagemVetor) {
    
// Extrai os dados do vetor
    var usuario= mensagemVetor.user;
    var mensagem=mensagemVetor.message;
    var usuarioPicture=mensagemVetor.imgUrl;
    if (!validaPost(mensagem)){
        // A função realiza a postagem apenas se a mensagem é menor que 140 caracteres e não é vazia
    }else{
    // Cria os elementos de um post
    var messageDiv = document.createElement("div");
    var imagemFriend = document.createElement("img");
    var corpoMensagem = document.createElement("p");
    var autor = document.createElement("p");
    var botoesDiv = document.createElement("div");
    var botaoDestacar = document.createElement("button");
    var botaoCurtir = document.createElement("button");
    var botaoEsconder = document.createElement("button");

// Atribui os dados 
    corpoMensagem.textContent=mensagem;
    imagemFriend.src=usuarioPicture;
    autor.textContent = "by: "+ usuario;
// Atribui dados padrão
    botaoDestacar.innerHTML = "Destacar" ;
    
    botaoCurtir.innerHTML = "Curtir";
    botaoEsconder.innerHTML = "Esconder";

// Forma a div com os botoes;
    botoesDiv.appendChild(botaoDestacar);
    
    botoesDiv.appendChild(botaoCurtir);
    botoesDiv.appendChild(botaoEsconder); 
// Forma o container inteiro da mensagem
    messageDiv.appendChild(imagemFriend);   
    messageDiv.appendChild(corpoMensagem);
    messageDiv.appendChild(autor);
    messageDiv.appendChild(botoesDiv);

// Define as classes de estilo
  
    messageDiv.classList.add("message");
    imagemFriend.classList.add("friend_profile_pic");
    autor.classList.add("autor");
    botoesDiv.classList.add("botoes_açao");
    botaoCurtir.classList.add("curtir");
    botaoDestacar.classList.add("destacar");
    botaoEsconder.classList.add("esconder");

// Adiciona todo o container na main
    mensagem_container.appendChild(messageDiv);
    eraseText();
};}