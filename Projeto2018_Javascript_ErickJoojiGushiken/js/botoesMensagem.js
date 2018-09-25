
var mensagensPai = document.querySelector(".geral");
mensagensPai.addEventListener("click",function(event){
    var alvo = event.target;
    var messagePai=alvo.closest(".message");
    if (alvo.classList.contains("esconder")){
        messagePai.remove();
    }else if(alvo.classList.contains("curtir")){
        // A ideia é colocar uma ação de curtir no futuro
    }else if(alvo.classList.contains("destacar")){
        classesMensagem=messagePai.classList;
        if(classesMensagem.contains("destaqueStyle")){
            classesMensagem.remove("destaqueStyle");
            classesMensagem.remove("primeiro");
        }else{
            classesMensagem.add("destaqueStyle");
            classesMensagem.add("primeiro")
        }
    };
})


