//funcao para apertar enter e funcionar botao
window.onload = function () {
    var input = document.getElementById("pesquisa");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("botao").click(myFunction);
        }
    })
};



function myFunction() {
    


    if (document.getElementById("controlador").value == "1"){
        console.log("chmar funcao limpa");
        limpar(); //segunda iteracao
    }
    else{
        document.getElementById("botao1").className = "collapse show";    //Mando abrir todos os elementos "antigo DROPDOWN"
        document.getElementById("botao2").className = "collapse show";
        document.getElementById("botao3").className = "collapse show";
        document.getElementById("botao4").className = "collapse show";
        document.getElementById("botao5").className = "collapse show";
        document.getElementById("botao6").className = "collapse show";
        document.getElementById("botao7").className = "collapse show";
        document.getElementById("botao8").className = "collapse show";
        document.getElementById("botao9").className = "collapse show";
        document.getElementById("botao10").className = "collapse show";
        limpar(); //primeira iteracao
        console.log("chamou funcao Marcar texto");
        for (i = 0;  i <= 43 ; i++){
                if(i==43 ){
                    console.log("foi");
                    document.getElementById("controlador").value = "1";
                    document.getElementById("controlador2").value = res;
                }
                else{                                                                   //tratando INPUT
                    if(document.getElementById("pesquisa").value == "" || document.getElementById("pesquisa").value == " "){
                        window.location.href = "help";                                  
                    }
                    else{
                    var z = document.getElementById("pesquisa").value;                   //pego o text do INPUT 
                    var str = document.getElementsByClassName("child")[i].innerHTML;
                    var res = z.substring(0, z.length);					                 //IMPRIMO o ELEMENTO INTEIRO DO INPUT
                    var sRegExInput = new RegExp(res, "gi"); 
                    resultado = str.replace(sRegExInput, "<mark>"+res+"</mark>");
                    document.getElementsByClassName("child")[i].innerHTML = resultado;
                    }   
                }
        }
    }
}

function limpar(){
    for (i = 0;  i <= 43 ; i++){
        if(i==43){
            console.log("limpou agora valida o novo input");
            xx = document.getElementById("pesquisa").value;                         //atribuo novo valor de input
            document.getElementById("controlador2").value = xx;
            }
        else{
            if(document.getElementById("controlador").value == "1"){
                console.log("controlador2 é 1");
                var z = document.getElementById("controlador2").value;
                var str = document.getElementsByClassName("child")[i].innerHTML;        //pego elemento pela classe
                var res = z.substring(0, z.length);					                    //IMPRIMO o ELEMENTO INTEIRO DO INPUT
                var sRegExInput = new RegExp("<mark>"+res+"</mark>", "gi");             //procuro o mark antigo e substituo por nada
                resultado = str.replace(sRegExInput, res);
                document.getElementsByClassName("child")[i].innerHTML = resultado;
                console.log("chamar funcao marcar");
                //MARCO TEXTO                                                           //tratando INPUT
                if(document.getElementById("pesquisa").value == "" || document.getElementById("pesquisa").value == " "){
                    window.location.href = "help";                                  
                }
                else{
                    var z = document.getElementById("pesquisa").value;                      //pego o text do INPUT 
                    var str = document.getElementsByClassName("child")[i].innerHTML;        //pego elemento pela classe
                    var res = z.substring(0, z.length);					                    //IMPRIMO o ELEMENTO INTEIRO DO INPUT
                    var sRegExInput = new RegExp(res, "gi"); 
                    resultado = str.replace(sRegExInput, "<mark>"+res+"</mark>");           //faco um mark novo
                    document.getElementsByClassName("child")[i].innerHTML = resultado;
                    }
            }
            else{
                console.log("controlador nao é 1");     
            }
        } 
    }
}