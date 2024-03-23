
function validacion() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let numero3 = document.getElementById("numero3").value;

    if (!(/^[0-9]{7,10}$/.test(numero1))) {
        alert("ERROR solo debe ingresar numeros");
    } else if (!(/^[0-9]{7,10}$/.test(numero2))) {
        alert("ERROR solo debe ingresar numeros");
    } else if (!(/^[0-9]{7,10}$/.test(numero3))) {
        alert("ERROR solo debe ingresar numeros");
    }else {

        alert("Validacion Correcta");
    }
}