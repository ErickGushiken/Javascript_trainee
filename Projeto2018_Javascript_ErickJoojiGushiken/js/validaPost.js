

function validaPost(mensagem) {
    if(mensagem.length > 140 || mensagem.length==0){
        return false;   
    }else {
        return true;
    }
    };
