<template>
   <!-- Se crean los elementos del HTML -->
  <div>
      <p> {{ copyright}}</p>
  </div>
</template>

<!--Exportamos las variables y su tipo que queremos que aparezcan en la vista  -->
<script>
export default {
 name: 'FooterCustom',
 data(){
     return{
         copyright: 'Manuel Suena R, 2020-2021'
     }
 }
}
</script>

<!--Estilo -->
<style  scoped>
p{
    font-size: 0.7rem;
    color: white;
}
</style>