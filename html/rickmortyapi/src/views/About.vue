<template>
<!--Información del HTML DE About   -->
  <div class="main">
     <!--Elemento exportado desde el AboutCard que junto a 
     la variabble title muestra la información contenida en este elemento  -->
 <AboutCard :saludos="title" > </AboutCard>

  <!--Imagen   -->
<img src="../assets/fotom.png" alt="Foto del autor">

<!--Un párrafo con información  -->
 <p> Para más información sobre el autor, consulte el siguiente link de mi red social: </p>

 <!--Link de red social  -->

 <a href="https://www.linkedin.com/in/manuel-eugenio-suena-rodríguez-79108152">linkedin MS</a>

<!--Un párrafo con información  -->

 <p> Este proyecto se construyó con:</p>

 <!--Link de información   -->
       <a  href="https://rickandmortyapi.com/">Rick and Morty API</a>

      <a href="https://www.npmjs.com/package/axios">AXIOS</a>
       <!--En el footer encontramos un párrafo con información de los derechos reservados  -->
<footer><p>"2020. Manuel Suena. Derechos Reservados.2020"</p></footer>
</div>
  
</template>

<script>
/* Importamos los componentes que queremos utilizar en esta vista */
import AboutCard from '@/components/AboutCard.vue'
// Colocamos el nombre al componente para su exportacion y en data se definen las variables y tipos 
//que se van a usar
export default {
  name: 'About',
  components: {
  AboutCard,
  },
  data(){
    return {
     title: "¡Hola!, el portal web fue creado por Manuel.",
    }
  },
}
</script>
<!--Estilo de About  -->
<style scoped>
.main {
  background: rgb(209, 235, 240);
  color: rgb(207, 64, 64);
}

p {
  color: black
}

a{
  margin-left: 1rem;
  color: rgb(67, 67, 212);
  font-size: 80%;
} 

footer {
  margin-top: 3rem;
  padding: 0.5rem;
  font-size: 50%;
}

</style>

