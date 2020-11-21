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
       const jugadores =[]
      const info = await fetch('http://localhost:3000/profile')
      const data = await info.json()
      console.log(data)
      this.jugadores = data

     
      commit('setJugadorMutation',jugadores)

    

    },
    created() {
      this.getActionsJugadores();
    },
   
  },
  modules: {
  }
})
