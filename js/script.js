function suma (n1, n2){
    var n1=parseFloat(document.getElementById('numero1').value);
    var n2=parseFloat(document.getElementById('numero2').value);
    var res =n1+n2;

document.getElementById('resultado').value = res;

}

function resta (n1, n2){
    var n1=parseFloat(document.getElementById('numero1').value);
    var n2=parseFloat(document.getElementById('numero2').value);
    var res =n1-n2;

document.getElementById('resultado').value = res;

}


function multiplicacion (n1, n2){
    var n1=parseFloat(document.getElementById('numero1').value);
    var n2=parseFloat(document.getElementById('numero2').value);
    var res =n1*n2;

document.getElementById('resultado').value = res;

}

function division  (n1, n2){
    var n1=parseFloat(document.getElementById('numero1').value);
    var n2=parseFloat(document.getElementById('numero2').value);
    var res =n1/n2;

document.getElementById('resultado').value = res;

}

