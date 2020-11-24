<template>
  
    
    
    <div>
    <Header />
    <Hero />


           

    <div  class="container">
      <div class="card__container">
            <div class="card m-4" v-for="jugador in jugadores" :key="jugador.id" >
              <div class="card-image ">
                <figure class="image">
                  <img src="https://images.vexels.com/media/users/3/146867/isolated/preview/8fbad91f1606ec45170b8abd49659c30-icono-de-camiseta-de-f-tbol-de-per--by-vexels.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">

                    <p class="title is-4   has-text-centered">Nombre:{{jugador.name}}</p>
                    <p class="title is-5  has-text-centered">Apellido:{{jugador.lastname}}</p>
                    <p class="title is-5  has-text-centered">Apellido:{{jugador.age}}</p>
                    <p class="subtitle is-6  has-text-centered" >Email {{jugador.email}}</p>
                    <p class="subtitle is-6  has-text-centered">Tel:{{jugador.phone}}</p>
                    
                  </div>
                </div>
                <footer class="card-footer">

                  <router-link :to="{
                         
                          name: 'Editar',
                           params:{ id: jugador.id}}">

                     <button href="#" class="card-footer-item button is-success"> editar</button>
                </router-link>

                  
               
              
                <button href="#" class="card-footer-item button is-danger" @click='deleteJugadorAction(jugador.id)'>Delete</button>
              </footer>
              </div>
          </div> 

      </div>
     
      
      
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
    this.getActionsJugadores();
  },
  
}
</script>
<style>

.card {
    width: 300px;
    border: 1px solid rgba(110, 109, 109, 0.466);
}
.image {
  
    width: 150px;
    margin: 0px auto;
}
.card__container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.charAt{

  color: #00D1B2;
}
  
</style>