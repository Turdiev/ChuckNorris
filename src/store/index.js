import { createStore } from 'vuex'
import useApiResponse from "@/use/ApiResponse";

export default createStore({
  state: {
    jokes: [],
    isSubmitting: false,
    isLoading: false
  },
  getters: {
  },
  mutations: {
    SET_JOKES(state, value) {
      state.jokes = value
    },

    SET_IS_SUBMITTING(state, value) {
      state.isSubmitting = value
    },

    SET_IS_LOADING(state, value) {
      state.isLoading = value
    }
  },
  actions: {
    async getJokesWhenSearching({commit},searchQuery) {
      commit('SET_JOKES', [])
      commit('SET_IS_LOADING', true)
      const res = await useApiResponse({
        method: 'GET',
        url: '/jokes/search',
        params: {
          query: searchQuery
        }
      })

      console.log('RES', res)
      commit('SET_IS_LOADING', false)
      commit('SET_JOKES', res.result)
      commit('SET_IS_SUBMITTING', true)
    }
  },
  modules: {
  }
})
