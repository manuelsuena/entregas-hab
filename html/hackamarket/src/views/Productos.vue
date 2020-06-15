<template>
  <div>

           <!-- Se aplica el cambio de nombre-->
       <vue-headful title="Productos"
     description="List de productos."/>

  <!-- Menú de la página  -->
 <MenuCustom> </MenuCustom>
         
         <!--Elementos HTML  -->

      <h2> Lista de Productos </h2>
  <ProductCustom v-for="producto in productos" :key="producto.id"
    :productiImg="producto.img"
    :productoId="producto.id"
    :productoNombre="producto.nombre"
    :productoDescripcion="producto.descripción"
    :productoEstado="producto.estado"
    :productoPrecio="producto.precio"
    :productoStock="producto.stock"
    >
  
  </ProductCustom>

<FooterCustom> </FooterCustom> 
  </div>
</template>

<script>

/* Importamos los componentes que queremos utilizar en esta vista */
import MenuCustom from '@/components/MenuCustom.vue'
import FooterCustom from '@/components/FooterCustom.vue'
import ProductCustom from '@/components/ProductCustom.vue'
import axios from 'axios'
import Swal from "sweetalert2";

export default {
       name: 'Prodcutos',
       components:{
            MenuCustom,
           FooterCustom,
           ProductCustom,
       },
       data(){
           return {
             productos:[],   
           }
       },
       // Función para la lista de productos
     methods: {
     getproducto(){
       var self = this
       axios.get('http://localhost:3005/productos')
       .then(function (response){
        console.log(response) 
          self.productos = response.data
       })
       .catch(function (error) {
         console.log(error)
       })
     }
     },
      created(){
    // llamo a la funcion getProducto en cuanto se crea la página
    this.getproducto()
  } 
}

</script>

<style>
h2{
  color: blueviolet;
}
</style>