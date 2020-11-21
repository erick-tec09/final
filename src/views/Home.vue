<template>
  
    
    
    <div>
    <Header />
    <Hero />
    <Footer />

    </div>
   
    
   

  
  
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Footer
    
  }
}
</script>
