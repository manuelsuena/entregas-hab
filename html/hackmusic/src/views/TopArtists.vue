<template>
  <div >
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

  <ArtistsCustom  v-for="item in filteredArtist" :key="item.id"
  :image="item.image[0]['#text']" 
  :name="item.name"
  :listeners="item.listeners"
  :url="item.url"
  > </ArtistsCustom>
  <FooterCustom>  </FooterCustom>
   </div>
</template>

<script>
/* Importamos los componentes que queremos utilizar en esta vista */
import MenuCustom from '@/components/MenuCustom.vue'
import api from '@/api/index.js'
import ArtistsCustom from '@/components/ArtistsCustom.vue'
import TitleCustom from '@/components/TitleCustom.vue'
import FooterCustom from '@/components/FooterCustom.vue'

// Colocamos el nombre al componente para su exportacion y en data se definen las variables y tipos 
//que se van a usar
export default {
  name: 'Home',
  components: {
    MenuCustom,
    ArtistsCustom,
    TitleCustom,
    FooterCustom,
  },
    data(){
    return{
      title: 'Artistas Top', 
      artists: [],
      search:'',
    };
    },
      computed:{
 filteredArtist(){
   // Si search esta vacío
if(!this.search){
return this.artists
   }
  // si search tiene algo busca según nombre, estatus, genero o id.

      return this.artists.filter(
        artists =>
          artists.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  created(){
    api.getArtists().then(response => (this.artists = response.data.topartists.artist))
  },
}
</script>

<style scoped>
label {
  color: rgb(202, 78, 182);
  padding: 1rem;
}

</style>