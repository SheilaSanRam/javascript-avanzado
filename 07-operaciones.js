/* Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo. */

const a=parseInt(prompt('Ingresa un numero'));
const b=parseInt(prompt('Ingresa un numero'));


if (a>b){
    var suma=a+b;
    var resta=a-b;
    document.write("El resultado de "+a+"+"+b+" es: "+suma+". </br> El resultado de "+a+"-"+b+" es: "+resta+".</br>");
}
else if (a<b){
    var producto=a*b;
    var cociente=a/b;
    document.write("El resultado de "+a+"*"+b+" es: "+producto+". </br> El resultado de "+a+"/"+b+" es: "+cociente+".</br>");
}
else{
    document.write("Los números son iguales");
}