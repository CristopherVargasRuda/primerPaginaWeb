const urlParams = new URLSearchParams(window.location.search);
document.getElementById("nombre1Value").innerHTML = urlParams.get('nombre1');
document.getElementById("apellido1Value").innerHTML = urlParams.get('apellido1');


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
