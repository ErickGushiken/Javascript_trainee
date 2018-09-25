var html = document.querySelector("html");
var mensagens_JSON = new XMLHttpRequest();
mensagens_JSON.open("GET", "https://cors.io/?http://www.mocky.io/v2/5b9dc3933200001100db93e7");
mensagens_JSON.addEventListener("load", function() {
    var resposta=mensagens_JSON.responseText;
    var mensagens_dados= JSON.parse(resposta);
    mensagens_dados.forEach(function(mensagem){
        adicionaMensagem(mensagem);
    }); 
});
mensagens_JSON.send();