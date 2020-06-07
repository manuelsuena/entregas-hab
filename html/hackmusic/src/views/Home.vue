<template>
  <div >
    
    <!-- Menú de la página  -->
  <MenuCustom> </MenuCustom>

<!-- Logo de la página y título de la vista -->
    <TitleCustom :title="title"> </TitleCustom>

  <TagCustom v-for="item in tags" :key="item.id"
  :tagName="item.name"
  :tagTaggings="item.taggings"
  :tagUrl="item.url"
  > </TagCustom>
   </div>
</template>

<script>
/* Importamos los componentes que queremos utilizar en esta vista */
import MenuCustom from '@/components/MenuCustom.vue'
import api from '@/api/index.js'
import TagCustom from '@/components/TagCustom.vue'
import TitleCustom from '@/components/TitleCustom.vue'

// Colocamos el nombre al componente para su exportacion y en data se definen las variables y tipos 
//que se van a usar
export default {
  name: 'Home',
  components: {
    MenuCustom,
    TagCustom,
    TitleCustom,
  },
      data(){
    return{
     tags: [],
     title: 'Los Top Tags'
    }
      },
  created(){
    api.getTopTags().then(response => (this.tags = response.data.tags.tag))
}
}
</script>
