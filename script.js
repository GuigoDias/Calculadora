let operacao = document.getElementById("operacao");
let resposta = document.getElementById("resposta");
let N1 = document.getElementById("N1");
let N2 = document.getElementById("N2");
let hist = document.createElement("h2");



function Calcular(){
    if(operacao.value == ""){
        alert("Operação não Informada");
        return;
    }
    if(N1.value == "" || N2.value == ""){
        alert("Informar valores a serem calculados!");
        return;
    }
        switch(operacao.value){
            case "1":
                resposta.innerHTML = parseInt(N1.value) + parseInt(N2.value);
                let resultado = parseInt(N1.value) + parseInt(N2.value);
                let text = document.createTextNode(resultado);
                let list = document.createElement("h2");

                list.appendChild(text)
                document.getElementById("Hist").appendChild(list);
                break;
            case "2":
                resposta.innerHTML = parseInt(N1.value) - parseInt(N2.value);
                break;
            case "3":
                resposta.innerHTML = parseInt(N1.value) * parseInt(N2.value);
                break;
            case "4":
                resposta.innerHTML = parseInt(N1.value) / parseInt(N2.value);
                break;
            default:
                resposta.innerHTML = "Operação Inválida"
                break;
        }

}

