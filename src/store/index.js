import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

// noinspection JSValidateTypes
export const store = new Vuex.Store({
  state: {
    user: null,
    userall: {
      nickname: null,
      name: null,
      dci: null,
      saldo: null
    },
    nickname: null,
    loading: false,
    error: null,
    chat: null
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
          console.log(state.userall.nickname)
        })
    },
    setLoadedChat (state, payload) {
      state.chat = payload
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
      firebase.auth().signOut().then(
        commit('setUser', null)
      )
    },
    loadChat ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('chat/channels/channel/thread').once('value')
        .then((data) => {
          commit('setLoading', false)
          commit('setLoadedChat', data.val())
        }).catch(
        (error) => {
          console.log(error)
          commit('setLoading', false)
        }
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
    userall (state) {
      return state.userall
    },
    nickname (state) {
      return state.nickname
    },
    chat (state) {
      return state.chat
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
