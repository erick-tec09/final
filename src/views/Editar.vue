<template>



<div>

      <Header /> 
      

      
   
   <section class="hero is-danger p-6">
  <div class="hero-body">
    <div class="container">
      <h1 class="title has-text-centered">
         Editar Convocado
      </h1>
      <h2 class="subtitle has-text-centered">
       {JSON} Serve
      </h2>
      <div>
      </div>



    </div>
  </div>
   <Footer />
</section>  
    
</div>

</template>

<script>

import Header from '@/components/Header.vue'

import Footer from '@/components/Footer.vue'

export default {
   

components: {
    Header,
   
    Footer
    
  },

}
</script>

<style>

</style>