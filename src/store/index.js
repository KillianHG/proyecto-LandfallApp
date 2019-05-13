import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

// noinspection JSValidateTypes
export const store = new Vuex.Store({
  state: {
    user: {
      id: null,
      email: null,
      nickname: null,
      name: null,
      dci: null,
      saldo: null
    },
    loading: false,
    error: null,
  },
  mutations: {
    setUser (state, payload) {
      console.log(payload)
      if (payload != null)  {
        firebase.database().ref('users/' + payload.id).once('value')
          .then(function (snapshot) {
            state.user = snapshot.val()
            state.user.id = payload.id
            state.user.email = payload.email
            /* state.user.nickname = snapshot.val().nickname
            state.user.name = snapshot.val().name
            state.user.dci = snapshot.val().dci
            state.user.saldo = snapshot.val().saldo */
          })
      } else {
        state.user = null
      }
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
            commit('setUser', {id: user.uid, email: payload.email})
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
            commit('setUser', {id: user.uid, email: payload.email})
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
      commit('setUser', {id: payload.uid, email: payload.email})
    },
    logout ({commit}) {
      firebase.auth().signOut().then(
        commit('setUser', null)
      )
    },
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    uid () {
      return firebase.auth().currentUser.uid
    },
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
