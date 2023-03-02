
const txt1 = document.getElementById("op1")
const txtOperador = document.getElementById("operador")
const txt2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

function calcular(){
    const operador = txtOperador.value
    const op1 = pasrseFloat (txt1.value)
    const op2 = pasrseFloat (txt2.value)

    if(operador == "+" || operador == "*" || operador == "-" || operador == "/") {
        let resultado;
        switch (operador){
            case "+" :
            resultado = op1 + op2
            break;
            case "-" :
            resultado = op1 - op2
            break;
            case "*" :
            resultado = op1 * op2
            break;
            case "/" :
            resultado = op1 / op2
            break;
        }
        pResultado.innerText = "= "+ resultado
    }else{
        pResultado.innerText = "NO ES UN OPERADOR"
    }


}


console.log("Hola");
function agregarComanda (){
    console.log("Agregar platos")
}