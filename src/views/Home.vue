<template>
  
    
    
    <div>
    <Header />
    <Hero />

    <div>
      <p>lista</p>
      <ul>
        <li v-for="jugador in jugadores" :key="jugador.id">

          {{jugador.name}}
        </li>
      </ul>
    </div>
    <Footer />

    </div>
   
    
   

  
  
</template>

<script>

import  { mapActions , mapState} from 'vuex'
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
    
  },
 
  computed: {
    ...mapState(['jugadores']),
  },
  methods: {
    
    ...mapActions(['getActionsJugadores']),

   
  },
  created() {
    this. getActionsJugadores();
  },
  
}
</script>
