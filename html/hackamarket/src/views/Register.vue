<template>
  <div>

              <!-- Se aplica el cambio de nombre-->
            <vue-headful title="Register"
         description="Página de registro."/>

          <!-- Menú de la página  -->
      <MenuCustom> </MenuCustom>
    
               <!--Elementos HTML  -->

        <h2> Crear cuenta de usuario </h2>
        <div id="contenedor">
         <div id="input">
             <p v-show="required"> tienes datos aun por rellenar </p>

             <Label for="email"> Email: </Label>
             <input type="email" name="email" placeholder="email del usuario"
             v-model="email">
              <br>
              </div>
              <div>
            <Label for="password"> Password: </Label>
             <input type="password" name="password" placeholder="contraseña del cliente"
             v-model="password">
    
         </div>
                 <button @click="addUsuario(email, password)">
            Crear
        </button>
        </div>
          
 <FooterCustom> </FooterCustom>
      </div>
</template>

<script>
/* Importamos los componentes que queremos utilizar en esta vista */
import MenuCustom from '@/components/MenuCustom.vue'
import FooterCustom from '@/components/FooterCustom.vue'
import axios from 'axios'
import Swal from "sweetalert2";

export default {
    name: 'AddCliente',
    components:{
           FooterCustom,
           MenuCustom,
       },
    data(){
        return {
            email:'',
            password:'',
            admin:'0',
            correctData: false,
            required: false
        }
    },

    // Funcióin validar y agregar usuarios
    methods: {
        validatingData(){
          if(this.email === '' || 
          this.password === '' ) {
              this.correctData = false // no enviar
              this.required = true // se muestra mensaje
          } else {
              this.correctData = true // si enviar
              this.required = false // no se muestra
          }
        },
        addUsuario(email,password){
             this.validatingData() // se valida si hay datos
             if(this.correctData === true){
             var self = this
             axios.post('http://localhost:3005/add-usuario', {
                 email: self.email,
                 password: self.password,
                 admin: '0',
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
             title: 'Usuario creado',
             text: "Haz login para ingresar a la página "
              })
               } else {
                Swal.fire({
                 icon: 'error',
                 title: 'Oops...',
               text: 'Faltan campos por rellenar',
                 })
                }
             },
    
        emptyFields(){
            this.email = ''
            this.password = ''
           
        }
        
    },
  
}
</script>

<style scoped>
input{
    padding: 0.8rem;
    margin: 1rem;
}
label {
    padding: 1rem;
    margin: 1rem;
} 
#input {
    margin-left: 1.5rem;
}
#contenedor {
    display: inline-block;
    width: 35%;
    padding: 2rem;
    border: solid black 2px;
    background: lavenderblush;
    margin: 1rem;
    margin-bottom: 2rem;
}
button{
    padding: 0.7rem;
    background: lightcyan;
    color: black;
}
h2{
    color: blue;
}
</style>

