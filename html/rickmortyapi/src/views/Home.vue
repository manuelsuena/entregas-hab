<template>
  <div class="main">
        <!-- Es el Logo -->
    <figure> <img src="https://www.pngfind.com/pngs/m/24-244532_funny-rick-and-morty-shirt-logo-rick-y.png" alt="Logo de la página"></figure>

<!--  Barra de búsqueda y se usa el v-model 
para asociar la variable search con los datos introoducidos por el usuario-->
<div id="buscar">
  <label for="bySearch">Busca tu personaje</label>
  <input
    v-model="search"
    id="search"
    name="bySearch"
    type="search"
    placeholder="Búsqueda de personajes"
  />
</div>

 <!-- printeando array (con el v-for se recorre el array y se insertan los datos)-->
 
 <!--ChartCard :chars="filteredChars">-->
   <div id="card">
<ChartCard v-for="char in filteredChars" :key="char.id"
 :charName="char.name" 
 :charId="char.id" 
 :charStatus="char.status"
 :charSpecies="char.species"
 :charGender="char.gender"
 :charImage="char.image"
 :charOrigen="char.origin"
></ChartCard>
</div>
  </div>
</template>

<script>
// Importamos los componentes que se utilizaran en About 
import ChartCard from '@/components/ChartCard.vue'
// importamos el archivo api para utilizar su información
import api from '@/api/api.js'
// Colocamos el nombre al componente para su exportacion y en data se definen las variables y tipos 
//que se van a usar
export default {
  name: 'Home',
  components: {
   ChartCard
  },
  data(){
    return {
      chars: [],
      search: '',

    };
  },

  computed:{
 filteredChars(){
   // Si search esta vacío
if(!this.search){
return this.chars
   }
  // si search tiene algo busca según nombre, estatus, genero o id.

      return this.chars.filter(
        char =>
          char.name.toLowerCase().includes(this.search.toLowerCase()) ||
          char.status.toLowerCase().includes(this.search.toLowerCase()) ||
          char.gender.toLowerCase().includes(this.search.toLowerCase()) ||
          char.id.toString() === this.search.toString()
      );
    }
  },

// se crea el HOOK created en donde se realiza la llamada a la API
  created(){
    api.getAll().then(response => (this.chars = response.data.results));
  }
};

// Estilo de la página

</script>
<style scoped>

#buscar{
  padding: 1rem;
  font-size: 2rem;
}
input {
  margin-left: 1rem;
padding: 0.80rem;
} 
#card{
margin: 1rem;
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 1rem;
} 
 figure img {
   max-width: 100%;
 justify-content: center;
 }

</style>