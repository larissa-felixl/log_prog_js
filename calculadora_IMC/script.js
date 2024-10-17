
function imc(peso, altura){
    return (peso/ altura**2).toFixed(2);

 
 }
 function exibir() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = imc(peso, altura);
    document.getElementById("p1").innerHTML = "Seu IMC é" + resultado;
}


