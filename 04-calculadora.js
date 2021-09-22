const anio=parseInt(prompt('Ingresa tu año de nacimiento (aaaa)'));
const mes=parseInt(prompt('Ingresa tu mes de nacimiento (mm)'));
const dia=parseInt(prompt('Ingresa tu día de nacimiento(dd)'));


if (mes<=09 & dia<21){
   
    edad=2021-anio;
}
else if(mes>09){
    edad=2020-anio;
}
else if(mes==09 && dia>21){
    edad=2021-anio;
}

document.write('Tu edad es '+ edad);