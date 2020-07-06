<template>
  <div class="main">

         <!-- Se aplica el cambio de nombre-->
       <vue-headful title="Login"
     description="Página para loggin."/>

       <!-- Menú de la página  -->
      <MenuCustom> </MenuCustom>

         
       <!--Elementos HTML  -->
    <h2> Iniciar sesión </h2>
    <div id="input"> 
    <input type="text" placeholder="Escribe tu email"
    v-model="usuario">
     <input type="password" placeholder="Escribe tu contraseña"
    v-model="password">

<button @click="login()"> Entrar </button>
 </div>

 <br>
 <br>
 <FooterCustom> </FooterCustom>

  </div>
</template>

<script>
/* Importamos los componentes que queremos utilizar en esta vista */
import MenuCustom from '@/components/MenuCustom.vue'
import FooterCustom from '@/components/FooterCustom.vue'
import { loginUser} from '../api/utils'
import Swal from "sweetalert2"

export default { 
    name: 'Login',
    components:{
           FooterCustom,
           MenuCustom,
       },
     data(){
         return {
            usuario: '',
            password: '',
         }
     },
     // Función de logear
     methods: {
         async login(){
             try {
                 // Intenta hacer login
                await loginUser(this.usuario, this.password)
                // si hay login, que me lleve al home
                this.$router.push('/Productos')
 Swal.fire({
        icon: "success",
        title: 'Ingreso exitoso',
        text: " Ya puedes ver el contenido de la página"
      });
      } catch (err) {
                Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Usuario o contraseña incorrecta, revise la información',
})
         }
     }
},
}
</script>

<style scoped>

input{
    padding: 0.7rem;
    margin: 1rem;
}
button {
    padding: 0.5rem;
    border-radius: 20%;
    background: lightblue;
    color: rgb(41, 21, 21);
}
h2{
    color: royalblue;
}
#input {
    display: inline-block;
    width: 40%;
    padding: 1rem;
    border: solid black 2px;
    background: blanchedalmond;
}
</style>
