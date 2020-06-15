<template>
  <div>

  <!-- Se aplica el cambio de nombre-->
  <vue-headful title="Clientes"
     description="Lista de los clientes."/>

    <!-- Menú de la página -->
 <MenuCustom> </MenuCustom>


       <!--Elementos HTML  -->
     <h2> Lista de clientes</h2>
  <div class="clientes" v-for="(cliente, index) in clientes" :key="cliente.id">
  
  <p>
     ID: {{cliente.id}}
     </p>
    <p> 
      Nombre: {{cliente.nombre}}
      </p>
      <p> 
        Apellido: {{cliente.apellido}}
        </p>
        <p> 
          Ciudad: {{cliente.ciudad}}
          </p>
          <p>
             Empresa: {{cliente.empresa}}
             </p>
           <button @click=" deleteClients(index)">Borrar</button>

        <button @click="showEditClients(index)">
        EDITAR</button>

 
      <div v-show="showEdit">
      <h2>Modifica</h2>
      <input type="text" v-model="newNombre" name="nombre">
      <input type="text" v-model="newApellido" name="apellido">
      <input type="text" v-model="newCiudad" name="ciudad">
      <input type="text" v-model="newEmpresa" name="empresa">
      <button class="b2" @click="editClients">MODIFICAR</button>
    </div>

  </div>
  <FooterCustom> </FooterCustom> 
  </div>

</template>

<script>

/* Importamos los componentes que queremos utilizar en esta vista */
import MenuCustom from '@/components/MenuCustom.vue'
import FooterCustom from '@/components/FooterCustom.vue'
import axios from 'axios'
import Swal from "sweetalert2"

export default {
       name: 'CLientes',
       components:{
           MenuCustom,
           FooterCustom,
       },
       data(){
           return {
             clientes:[], 
             id: null,
             newNombre: "",
             newApellido: "",
             newCiudad: "",
             newEmpresa: "",
             id: null,
             showEdit: false,
           }
       },
       // Función para mostrar los clientes
        methods: {
        getcliente(){
       var self = this
       axios.get('http://localhost:3005/clientes')
       .then(function (response){
        console.log(response) 
          self.clientes = response.data
         })
        .catch(function (error) {
         console.log(error)
        })
        },

      //Función para borrar un cliente 

       deleteClients(index) {
       let data = this.clientes[index].id
      axios.delete('http://localhost:3005/clientes/del/' + data)
          
        .then(function(response) {
            location.reload()
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
         Swal.fire({
        icon: "success",
        title: 'Cliente eliminado',
        text: "Lo hemos borrado de la lista de clienes",
         })
        },

         //Función muestra info del cliente para actualizar 
        showEditClients(data){
      this.id = this.clientes[data].id
      this.newNombre =  this.clientes[data].nombre
      this.newApellido =  this.clientes[data].apellido
      this.newCiudad =  this.clientes[data].ciudad
      this.newEmpresa =  this.clientes[data].empresa
      this.showEdit = true
    },

     //Función para actualizar un cliente 
    editClients(){
      let self = this
      axios.put('http://localhost:3005/cliente/update/' + self.id, {
        id: self.id,
        nombre: self.newNombre,
        apellido: self.newApellido,
        ciudad: self.newCiudad,
        empresa: self.newEmpresa
      })
      .then(function (response) {
        location.reload()
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
   },
  created() {
    this.getcliente();
  },
}
</script>

<style scoped>

.clientes {
    display: inline-block;
    width: 35%;
    padding: 2rem;
    border: solid black 2px;
    background: rgb(248, 227, 201);
    margin: 1rem;
    margin-bottom: 2rem;
}
button {
  margin: 0.5rem;
}
h2 {
  color:brown;
}
</style>