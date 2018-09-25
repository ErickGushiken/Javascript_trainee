var nova_mensagem = document.querySelector("#novo_post");
var contador = document.querySelector(".contador");
var aviso = document.querySelector(".aviso");

// Analisa o input do usuario e conta
nova_mensagem.addEventListener("input", function() {
    var palavra=this.value;
    var num_palavras = palavra.length;
    contador.innerHTML="<p>"+num_palavras+" /140 caracteres </p>";

// Altera os estilos / aviso conforme o contador
    if(num_palavras==140){
        aviso.textContent="Pronto para postar ?";
        aviso.classList.add("highlight_blue");
        aviso.classList.remove("hide");
        nova_mensagem.classList.add("highlight_blue");
        contador.classList.add("texto_blue");

    }else if(num_palavras>140){
        // Remove os estilos de limite e adiciona estilos para limite excedido
        aviso.textContent="Você ultrapassou o limite de caracteres";
        aviso.classList.remove("highlight_blue");
        aviso.classList.add("highlight_red");
        aviso.classList.remove("hide");
        nova_mensagem.classList.remove("highlight_blue");
        nova_mensagem.classList.add("highlight_red");
        contador.classList.remove("texto_blue")
        contador.classList.add("texto_red");

    }else{
        // Remove todos os estilos e esconde os avisos
        aviso.classList.add("hide");
        aviso.classList.remove("highlight_red");
        aviso.classList.remove("highlight_blue");
        nova_mensagem.classList.remove("highlight_red");
        nova_mensagem.classList.remove("highlight_blue");
        contador.classList.remove("texto_blue");
        contador.classList.remove("texto_red");
    }
});


