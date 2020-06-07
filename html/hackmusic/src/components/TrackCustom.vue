<template>
   <!-- Se crean los elementos del HTML -->
  <div>
 <h2> <strong>Canción: </strong > {{trackName}}</h2>
 <p> <strong >Artista:</strong > {{artistName}}</p>
 <p> <strong >Duración: </strong > {{duration}} <strong >segundos </strong ></p>
 <p> <strong >Url:</strong > {{url}}</p>
  </div>
</template>

<!--Exportamos las variables y su tipo que queremos que aparezcan en la vista  -->
<script>

export default {
 name: 'TrackCustom', 
 props: {
        trackName: String,
        artistName:String,
         duration: String,
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
    border: 2px dashed black;
    padding: 1rem;
    margin: 2rem;
    background: lightseagreen;
}

p, h2{
    color: lawngreen;
}
strong {
    color: white;
}

</style>