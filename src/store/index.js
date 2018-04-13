import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  count: 0,
  maxConclusionData: []
}

const mutations = {
  increment (state) {
    state.count++
  },
  transferAndShowConclusion (state, arr) {
    state.maxConclusionData = arr
  }
}

const store = new Vuex.Store({
  state,
  mutations
})
export default store
