import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

// noinspection JSValidateTypes
export const store = new Vuex.Store({
  state: {
    user: null,
    nickname: null,
    loading: false,
    error: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setNickname (state, payload) {
      console.log(payload)
      firebase.database().ref('users/' + payload.id + '/nickname').once('value')
        .then(function (snapshot) {
          console.log(snapshot)
          state.nickname = snapshot.val()
          console.log(state.nickname)
        })
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    // metodo para crear usuario
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid
            }
            // eslint-disable-next-line
            commit('setUser', newUser)
            firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
              name: payload.name,
              nickname: payload.nickname,
              saldo: payload.saldo,
              dci: payload.dci
            }).then(
              commit('setLoading', false)
            ).catch(
              error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
              }
            )
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid
            }
            // eslint-disable-next-line
            commit('setUser', newUser)
            commit('setNickname', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid})
      commit('setNickname', {id: payload.uid})
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    nickname (state) {
      return state.nickname
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
