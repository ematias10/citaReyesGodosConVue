export const siguienteRey = (contador, productos) => {

    contador.value < (productos.length - 1) ? contador.value++ : contador.value = 0;
    console.log(contador.value);
}

export const PrimeraLetraMayus = (texto) => {
    if (!texto) return ''; // Manejar caso de string vacío o null
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  }


export const cargarImagen = (productos, contador,url) => {
    console.log(productos);
    
    const rey = productos[contador.value];
    
    const nombre = rey.nombre.toLowerCase();
    url.value = `https://www.html6.es/img/rey_${nombre}.png`;
}

export const descuento = (precio) => {
    return (precio*0.9).toFixed(2);
}