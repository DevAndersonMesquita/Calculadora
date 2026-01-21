function inserir(num) {
document.getElementById('resultado').innerHTML += num;


}
function limpar(){
    document.getElementById('resultado').innerHTML = "";
}
function apagar(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}
function cacular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
} else{
   window.alert("Nada para calcular");
}
}