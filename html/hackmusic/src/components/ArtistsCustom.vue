<template>
   <!-- Se crean los elementos del HTML -->
  <div>
<img
:src="image"
alt="Foto del artista"
/>
<h2> Artista: {{name}}</h2>
<p id="Oyente"> Oyentes: {{listeners}}</p>
 <p id="Url">URL: {{url}}</p> 

  </div>

</template>

<!--Exportamos las variables y su tipo que queremos que aparezcan en la vista  -->
<script>

export default {
 name: 'ArtistsCustom', 
 props: {
        image: Array,
         name: String,
         listeners: String,
         url: String,
}
}
</script>

<!--Estilo -->
<style  scoped>
div {
    display: inline-table;
    width: 500px;
    height: 200px;
    border:  dashed;
    padding: 1rem;
    margin: 2rem;
    background: rgb(224, 154, 215);
    color: rgb(54, 231, 62);
}
img {
  width: 150px;
}
#Oyente {
 color: rgb(230, 17, 17);
}
#Url{
  color: black;
}
</style>