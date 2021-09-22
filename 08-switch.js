/* Switch
Estrutura de control de flujo
(Tipo if)
 */

/* const edad = parseInt(prompt("Ingresa tu edad"));
let mensaje = "";


/* Switch solo evalua igualdades. No aplica la evaluación en intervalos.
    Default es equivalente a "else" 


switch (edad){
    case 18:
        mensaje="Acaba de cumplir la mayoría de edad";
        break;
    case 25:
        mensaje="Ya eres un adulto";
        break;
    case 70:
        mensaje="Ya eres de la tercera edad";
        break;
    default:
        mensaje = "Fuera del rango de edad";
        break;
}
document.write(`<p>${mensaje}</p>`); */

const nombre = prompt("Ingresa tu nombre");
let mensaje = '';


switch (nombre){
    case 'carlos':
        mensaje="Eres administrador";
        break;
    case 'juan':
        mensaje="Eres usuario";
        break;
    default:
        mensaje = "No tienes permisos para usar el sistema";
        break;
}
document.write(`<p>${mensaje}</p>`);