<template>
   <!-- Se crean los elementos del HTML -->
  <div >
    <div id="nav">
      <router-link :to="{name:'Home'  }">Home</router-link> |
      <router-link :to="{name:'TopArtists'}">Artists</router-link> |
      <router-link :to="{name:'TopTracks'}">Tracks</router-link>|
      <router-link :to="{name:'About'}">About</router-link> |
    </div>
  </div>
</template>

<!--Exportamos las variables y su tipo que queremos que aparezcan en la vista  -->
<script>
export default {
  name: 'MenuCustom',
}
</script>

<!--Estilo -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  padding: 30px;

}

#nav a {
  font-weight: bold;
  color: white;
  margin: 1rem;
  font-size: 1.25rem;
}

#nav a.router-link-exact-active {
  color: red;
margin: 1rem;
}
</style>
