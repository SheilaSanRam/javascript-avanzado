/* Try catch permite ejecutar código propenso a fallas, de una manera segura */

const gravedad = 9.8;
console.log(gravedad);

/* Intenta ejecutar el códifo, si hay un error ejecuta el catch */
try {
    gravedad = 10.1;
} catch (error) {
    /* El catch se ejecuta si hay un error, recibe como primer parametro el error */
    console.log(error);
}finally{
    /* El finally siempre se ejecuta */
    console.log('Soy el finally');
}
console.log(gravedad);