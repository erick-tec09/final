<template>

<div class="container">
<nav class="navbar m-5" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">Erick
    
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      
    
      <a class="navbar-item">
       <router-link to="/">Home</router-link> 
      </a>

      <a class="navbar-item">
       <router-link to="/about">About</router-link>
      </a>

     
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav> 
</div>
 

</template>

<script>
export default {

}
</script>

<style>

</style>