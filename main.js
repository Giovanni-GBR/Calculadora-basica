function bnt(botao){
    let resultado = document.querySelector("#resultado")
    resultado.value += botao.value
}
function Apagar(){
    let resultado = document.querySelector("#resultado")
    resultado.value = ""
}
function Resposta(){
    let resultado = document.querySelector("#resultado")
    let valor = eval(resultado.value)
    resultado.value = valor
}
