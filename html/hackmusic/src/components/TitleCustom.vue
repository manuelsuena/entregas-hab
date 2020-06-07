<template>
   <!-- Se crean los elementos del HTML -->
  <div>
 
 <!-- Title -->
<img src= "../image/LogoHack.png" alt="Logo de la página">

<h1>{{title}}</h1>
  </div>

</template>

<!--Exportamos las variables y su tipo que queremos que aparezcan en la vista  -->
<script>

export default {
 name: 'TitleCustom', 
 props: {
         title: String,
         img: String,
}
}
</script>


<!--Estilo -->
<style  scoped>
img {
  margin-top: 1rem;
  width: 300px;
}
h1{
  margin: 1rem;
  padding: 2rem;
}
</style>