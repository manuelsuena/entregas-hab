<template>
   <!-- Se crean los elementos del HTML -->
  <div >
    <div id="nav">
      <router-link :to="{name:'Login'}"  v-show="!checkLogin()">Login</router-link> 
        <router-link :to="{ name: 'Register'}" v-show="!checkLogin()">Registro</router-link> 
       <router-link :to="{name:'Productos'}"> Productos</router-link> 
      <router-link :to="{name:'AddCliente'}" v-show="checkIsAdmin()"> Añadir cliente</router-link> 
      <router-link :to="{name:'CLientes'}" v-show="checkIsAdmin()"> Clientes </router-link> 
       <router-link :to="{name:'About'}"> About</router-link> 
     
    
       <button @click="logoutUser()"  v-show="checkLogin()"> Logout </button> 
    
       </div>

        <img src="../assets/logopag.png" alt="logo">
        
  </div>
</template>

<!-- Importamos y Exportamos las variables y su tipo que queremos que aparezcan en la vista  -->
<script>
import { clearLogin, isLoggedIn, checkAdmin } from "../api/utils";
import vueHeadful from 'vue-headful';
export default {
  name: 'MenuCustom',
  methods: {
    logoutUser() {
      this.$router.push("/");
      this.$router.go();
      return clearLogin();
    },
    checkLogin() {
      return isLoggedIn();
    },
    checkIsAdmin() {
      return checkAdmin();
    }
  }
};
</script>

<!--Estilo -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

}

#nav a {
  font-weight: bold;
  color: black;
  margin: 1rem;
  font-size: 1.25rem;
}

#nav a.router-link-exact-active {
  color: red;
margin: 1rem;
}
</style>
