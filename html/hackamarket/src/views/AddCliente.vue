<template>
  <div>
       <!-- Se aplica el cambio de nombre-->
              <vue-headful title="Añadir clientes"
             description=" Se añaden nuevos clientes al portal."/>
             
         <div>

                <!-- Menú de la página  -->
             <MenuCustom> </MenuCustom>

                    <!-- Elementos HTML de la página  -->
            <h2> Agregar nuevo cliente</h2>
           
             <p v-show="required"> tienes datos aun por rellenar </p>
             <div class="información">
             <Label for="nombre"> Nombre: </Label>
             <input type="text" name="nombre" placeholder="nombre del cliente"
             v-model="nombre">
              <br>
            <Label for="apellido"> Apellido: </Label>
             <input type="text" name="apellido" placeholder="apellido del cliente"
             v-model="apellido">
              <br>
            <Label for="ciudad"> ciudad: </Label>
             <input class="ciudad" type="text" name="ciudad" placeholder="ciudad del cliente"
             v-model="ciudad">
                 <br>
            <Label for="empresa"> Empresa: </Label>
             <input type="text" name="empresa" placeholder="empresa del cliente"
             v-model="empresa">
                   <br>
        <button @click="addClient(nombre, apellido, ciudad, empresa)">
            Crear
        </button>
        </div>
         </div>

         <FooterCustom> </FooterCustom>
  </div>
</template>

<script>
/* Importamos los componentes que queremos utilizar en esta vista */
import axios from 'axios'
import MenuCustom from '@/components/MenuCustom.vue'
import FooterCustom from '@/components/FooterCustom.vue'
import Swal from "sweetalert2"

// Colocamos el nombre al componente para su exportacion y en data se definen las variables y tipos 
//que se van a usar

export default {
    name: 'AddCliente',
     components:{
           MenuCustom,
           FooterCustom,
       },
    data(){
        return {
            nombre:'',
            apellido:'',
            ciudad:'',
            empresa:'',
            correctData: false,
            required: false
        }
    },
    // Funciones para validad y agregar cliente
    methods: {
        validatingData(){
          if(this.nombre === '' || 
          this.apellido === '' ||
          this.ciudad === ''||
          this.empresa === '') {
              this.correctData = false // no enviar
              this.required = true // se muestra mensaje
          } else {
              this.correctData = true // si enviar
              this.required = false // no se muestra
          }
        },
        addClient(nombre, apellido, ciudad, empresa){
             this.validatingData() // se valida si hay datos
             if(this.correctData === true){
             var self = this
             axios.post('http://localhost:3005/add', {
                 nombre: self.nombre,
                 apellido: self.apellido,
                 ciudad: self.ciudad,
                 empresa: self.empresa,
             })
             .then(function (response){
                 self.emptyFields() //vaciar campos
                 console.log(response)  
             })
             .catch(function (error){
                console.log(error)
             })
         Swal.fire({
        icon: "success",
        title: 'Cliente creado',
        text: "Lo encontraras en la pestaña cliente  "
      });
      } else {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
         text: 'No has rellenado todos los campos',
            })
        }
        },
        emptyFields(){
            this.nombre = ''
            this.apellido = ''
            this.ciudad = ''
            this.empresa = ''
        }
    }

}
</script>

<style scoped>
 h2{
     color:seagreen;
 }

 label{
     padding: 0.5rem;
     margin: 1rem;
 }
 input {
     padding: 0.4rem;
     margin: 0.5rem;
 }
 .ciudad {
     margin-left: 1rem;
 }
 button {
     margin: 1rem;
     padding: 0.7rem;
 }
 div .información{
    display: inline-block;
    width: 35%;
    padding: 2rem;
    border: solid black 2px;
    background: lightcyan;
    margin: 1rem;
    margin-bottom: 2rem;
 }
</style>

