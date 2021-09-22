/* Mostrar todos los numeros impares que hay entre dos números introducidos por el usuario*/

const num1=parseInt(prompt('Ingresa un numero'));
const num2=parseInt(prompt('Ingresa otro numero'));


if (num1<num2){
    var mayor=num2;
    var menor=num1;
}
else if(num2<num1){
    var mayor=num1;
    var menor=num2;
}
else{
    document.write('<h4>Los números son iguales. No existe un rango</h4></br>')
}

var rango=[];

for (var i=menor; i<=mayor; i++){
    rango.push(i);   
}

document.write('El rango entre los números de entrada es: '+rango);

var impar=[];

for (var n=0; n<=rango.length;n++){
    if(rango[n]%2){
        impar.push(rango[n]);
    }
}

document.write('</br>Los números impares son: '+impar)
 

