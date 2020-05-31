<template>
<div class="container">
   <!-- Se crean los elementos del HTML -->
  <div id=Card>
<img
:src="charImage"
border="1"
alt="Foto de personaje de Rick y Morty"
/>

<h2>  <strong>Nombre:</strong> {{charName}} </h2> 
<p>
   <strong>ID: </strong> {{charId}}
</p>

 <p 
 :class="{ green: charStatus==='Alive', red: charStatus==='Dead' || 'unknown'}"> 
 <strong>Status: </strong> {{charStatus}} </p>

<p>  <strong> Specie:</strong>  {{charSpecies}} </p>
<p>  <strong>Gender:  </strong>  {{charGender}} </p>
<p id="origen">  <strong> origin:</strong>
 {{charOrigen}}</p>
  </div>
  </div>
  
</template>
 <!--Exportamos las variables y su tipo que queremos que aparezcan en el HOME  -->
<script>

export default {
  name: 'ChartCard',
  props: {
    charName: String,
    charId: Number,
    charStatus: String,
    charSpecies: String,
    charGender: String,
    charImage: String,
    charOrigen: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <!-- Se agrega el estilo al portal  -->
<style scoped>
.red {
  color: red;
}

.green {
  color: rgb(11, 87, 34);
}

#Card{
    width: 30rem;
    height: 30rem;
    border: 1px solid black;
    padding: 1rem;
    background:  rgb(54, 132, 192);
    color: rgb(179, 6, 107);
    display: inline-block;
    margin: 1rem;

} 

img {
  width: 200px;
  height: 200px;
 border-radius: 100%;
}
h2 {
  color: rgb(155, 14, 14);
}
strong {
  color: black;
}

@media (max-width: 450px) {
  #Card{
    flex-direction: row;
    align-items: baseline;
    max-width: 50%;
    min-height: 120%;
  }
}

@media (max-width: 400px) {
  #origen{
    font-size: 80% ;

  }
}


</style>
