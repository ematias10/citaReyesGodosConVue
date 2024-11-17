<script setup>
import oferta from "./assets/oferta.jpg";
import { ref, computed } from "vue";
import { productos } from "./js/datos";
import { siguienteRey, PrimeraLetraMayus, cargarImagen, descuento } from "./js/funciones";

const contador = ref(0);
const url = ref('');
cargarImagen(productos, contador,url);

const avanzarClick = () => {
  siguienteRey(contador, productos);
  cargarImagen(productos, contador,url);
};

const hayDescuento = computed(()=>{
  return productos[contador.value].precio < 100;
})

</script>

<template>
<div class="principal">
  <h1>Cena {{ contador+1 }} con el rey godo
    <span>{{ PrimeraLetraMayus(productos[contador].nombre) }}</span>
  </h1>
  <p class="precio">Precio: <span>${{productos[contador].precio}}</span></p>
  
  <div v-if="productos[contador].finDeSemana" class="dias finDeSemana">(Solo fines de semana)</div>
  <div v-else class="dias todaSemana">(De lunes a domingo)</div>
  
  <div v-show="hayDescuento" class="descuento">Ahora un 10% dto:
    <span>${{ descuento(productos[contador].precio) }}</span>
    <img class="oferta-img" :src="oferta" alt="">
  </div>
    
  <img class="rey" :src="url" alt="">

  <button @click="avanzarClick">Siguiente ({{ contador+1 }}/{{productos.length}})</button>


</div>
</template>

<style scoped>


.principal {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 60%;
    border-radius: 2rem;
    border: 3px solid black;
    padding: 1rem;
    align-items: center;
    gap: 1rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

span{
  color:green;
  font-weight: bold;
}

.dias{
  color: white;
  width: 15rem;
  font-size: 1.2rem;
  padding: 0.3rem;
  text-align: center;
  border-radius: 4px;
  border: 2px solid black;
  /* box-shadow: 1px 1px 2px 0px black; */
}
.finDeSemana{
  background-color: orangered;
}
.todaSemana{
  background-color: rgb(28, 128, 46);
}
.rey{
  width: 15rem;
  height: auto;
}
.precio{
  font-size: 1.7rem;
}
.oferta-img{
  width: 4rem;
  height: auto;
}
.descuento{
  display: flex;
  align-items: center;
  font-size: 1.2rem;
}
</style>
