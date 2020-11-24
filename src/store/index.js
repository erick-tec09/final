import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jugadores:[],

  },
  mutations: {
    setJugadorMutation( state, payload){
      state.jugadores = payload
    }

  },
  actions: {



      async getActionsJugadores( {commit}){
     
      const data = await fetch('http://localhost:3000/profile')
      const jugador = await data.json()
      console.log(jugador)
      this.jugador = data

     
      commit('setJugadorMutation',jugador)
    },



    async deletejugadores({ commit}, id){

      



      commit('delete',id)

    },

  


    created() {
      this.getActionsJugadores();
    },
   
  },
  modules: {
  }
})
