<template>
   <!-- Se crean los elementos del HTML -->
  <div>

    <h2> # {{tagName}} </h2>
    <p> <strong >Etiquetados: </strong> {{tagTaggings}}</p>
    <p> <strong > URL: </strong>  {{tagUrl}}</p>

  </div>

</template>

<!--Exportamos las variables y su tipo que queremos que aparezcan en la vista  -->
<script>

export default {
 name: 'TagCustom', 
 props: {
         tagName: String,
         tagTaggings: String,
         tagUrl: String,
}
}
</script>

<!--Estilo -->
<style  scoped>

div {
margin: 1rem;
display: block;
margin-left: 25rem;
border: 2px solid black;
background: chartreuse;
 width: 750px;
}
p{
  color: rgb(54, 38, 192);
}
strong {
  color: black;
}

</style>