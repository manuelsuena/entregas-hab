<template>
   <!-- Se crean los elementos del HTML -->
  <div>
      <img :src="productiImg" alt="">
 <h2> <strong>Id: </strong > {{productoId}}</h2>
 <p> <strong >Nombre:</strong > {{productoNombre}}</p>
 <p> <strong >Descripción: </strong > {{productoDescripcion}}</p>
 <p :class="{green: productoEstado === 'disponible', red: productoEstado ==='no disponible' }"> <strong >Estado:</strong > {{productoEstado}}</p>
  <p> <strong >Precio:</strong > {{productoPrecio}} Euros</p>
   <p> <strong >Stock:</strong > {{productoStock}}</p>
   <button @click="buyProduct()">Añadir</button>
     
  </div>
</template>

<!--Exportamos las variables y su tipo que queremos que aparezcan en la vista  -->
<script>
import Swal from "sweetalert2";
export default {
 name: 'ProductCustom', 
 props: {
        productiImg: String,
        productoId:String,
        productoNombre: String,
        productoDescripcion: String,
        productoEstado: String,
        productoPrecio: String,
        productoStock: String,
        required: false
},
    methods: {
              validatingData(){
          if(this.productoEstado === 'disponible'){
            this.required = true // se muestra mensaje
          } else {
       
              this.required = false // no se muestra
          }
        },
      
    buyProduct() {
      //Lanzamos cuadro de diálogo de éxito :)
      this.validatingData() // se valida si hay datos
             if(this.required === true){
         this.productoStock--   
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto añadido al carrito",
      })
         } else {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
         text: 'Producto no disponible',
            })
        }
        }
    }
}
</script>

<!--Estilo -->
<style  scoped>
.red {
  color: red;
}
.green {
  color: green;
}
 div {
   width: 50%;
   display: inline-block;
   padding: 1rem;
   margin: 1rem;
   border: solid black 2px;
 }
 img{
   width: 200px;
   height: 200px;
 }
 strong{
   color:blue;
 }
 
</style>