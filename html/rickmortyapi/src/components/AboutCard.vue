<template>
<div class="container">
  <!-- título y elemento que se utiilizara en el HTML del about-->
  <h1> {{saludos}} </h1>

</div>
</template>
 <!--Exportamos las variables y su tipo que queremos que aparezcan en el About  -->

<script>

export default {
    name:"AboutCard",
    props:{
        saludos: String,

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>