const urlParams = new URLSearchParams(window.location.search);
document.getElementById("nombre1Value").innerHTML = urlParams.get('nombre1');
document.getElementById("apellido1Value").innerHTML = urlParams.get('apellido1');
document.getElementById("codigo1Value").innerHTML = urlParams.get('codigo1');
document.getElementById("nombre2Value").innerHTML = urlParams.get('nombre2');
document.getElementById("apellido2Value").innerHTML = urlParams.get('apellido2');
document.getElementById("codigo2Value").innerHTML = urlParams.get('codigo2');
document.getElementById("nombre3Value").innerHTML = urlParams.get('nombre3');
document.getElementById("apellido3Value").innerHTML = urlParams.get('apellido3');
document.getElementById("codigo3Value").innerHTML = urlParams.get('codigo3');
document.getElementById("nombre4Value").innerHTML = urlParams.get('nombre4');
document.getElementById("apellido4Value").innerHTML = urlParams.get('apellido4');
document.getElementById("codigo4Value").innerHTML = urlParams.get('codigo4');
document.getElementById("nombre5Value").innerHTML = urlParams.get('nombre5');
document.getElementById("apellido5Value").innerHTML = urlParams.get('apellido5');
document.getElementById("codigo5Value").innerHTML = urlParams.get('codigo5');










// urlParams = {
//     nombre1: "Cristopher",
//     apellido1: "apellido 1",
// }



// string url= "nombre1=Cristopher&apellido1=Vargas+Ruda&codigo1=1111111111&nombre2=nombre+2&apellido2=apellido+2&codigo2=2222222222&nombre3=nombre+3&apellido3=apellido+3&codigo3=3333333333&nombre4=nombre+4&apellido4=apellido+4&codigo4=4444444444&nombre5=nombre+5&apellido5=apellido+5&codigo5=5555555555"
// arrayVariables = url.split("&");
// ["nombre1=Cristopher", "apellido1=Vargas+Ruda"]
// for (var i=0; arrayVariables.legth; i++){
//     "nombre1=Cristopher" .split("=")
//     ["nombre1", "Cristopher"]
// }
