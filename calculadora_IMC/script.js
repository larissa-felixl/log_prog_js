function enviodados(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    alert("Seu peso é " + peso + " e sua altura é " + altura + "!");
}

function imc(peso, altura){
    return (peso/ altura**2).toFixed(2);
 }

 function classimc(peso,altura){
    let resultado = imc(peso, altura);
    let classificaçao;
    if (resultado<18.5){
        classificaçao = " De acordo com o seu IMC você está abaixo do peso";
    }else{
        if(resultado>18.5 && resultado<=24.9){
           classificaçao = "De acordo com o seu imc você está com o peso normal";
        }else{
            if(resultado>24.9 && resultado<=29.9){
                classificaçao = "De acordo com o seu IMC você está com excesso de peso";
            }else{
                if(resultado>29.9 && resultado<=34.9){
                    classificaçao = "De acordo com o seu IMC você está com obesidade classe I";
                }else{
                    if(resultado>34.9 && resultado<=39.9){
                       classificaçao = "De acordo com seu IMC você está com obesidade classe II";
                    }else{
                        if(resultado>40){
                            classificaçao = "De acordo com o seu IMC você está com obesidade classe III";
                        }
                    }
                }
            }
        }
    }
    return classificaçao;
}

 function exibir() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = imc(peso, altura);
    let classificaçao = classimc(peso, altura);
    document.getElementById("p1").innerHTML = "Seu IMC é " + resultado;
    document.getElementById("classimc").innerHTML = classificaçao;
}



