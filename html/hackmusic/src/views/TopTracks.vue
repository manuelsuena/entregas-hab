<template>
 <div>
   <!-- Menú de la página  -->
  <MenuCustom> </MenuCustom>

 <!-- Logo de la página y título de la vista -->
    <TitleCustom :title="title"> </TitleCustom>

    <!--  Barra de búsqueda y se usa el v-model 
para asociar la variable search con los datos introducidos por el usuario-->
<div id="buscar">
  <label for="bySearch">Busca tu artista </label>
  <input
    v-model="search"
    id="search"
    name="bySearch"
    type="search"
    placeholder="Búsqueda de artista"
  />
</div>

  <TrackCustom v-for="item in  filteredTrack" :key="item.id"
  :trackName="item.name" 
  :artistName="item.artist.name"
  :duration="item.duration"
  :url="item.url"
  > </TrackCustom>
  <FooterCustom> </FooterCustom>
   </div>
</template>

<script>
/* Importamos los componentes que queremos utilizar en esta vista */
import MenuCustom from '@/components/MenuCustom.vue'
import TrackCustom from '@/components/TrackCustom.vue'
import TitleCustom from '@/components/TitleCustom.vue'
import FooterCustom from '@/components/FooterCustom.vue'
import api from '@/api/index.js'

// Colocamos el nombre al componente para su exportacion y en data se definen las variables y tipos 
//que se van a usar
export default {
  name: 'TopTracks',
  components: {
   MenuCustom,
   TrackCustom,
    TitleCustom,
    FooterCustom,
  },
      data(){
    return{
     cancion: [],
     search:'',
     title:'Top Canciones',
    }
      },
            computed:{
 filteredTrack(){
   // Si search esta vacío
if(!this.search){
return this.cancion
   }
  // si search tiene algo busca según nombre, estatus, genero o id.

      return this.cancion.filter(
        cancion =>
          cancion.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  created(){
    api.getTopTracks().then(response =>(this.cancion = response.data.tracks.track))
  }
}
</script>

<style scoped>
label {
  color: red;
  padding: 1rem;
}

</style>