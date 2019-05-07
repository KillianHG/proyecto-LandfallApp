import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import contests from '@/components/Contests/contests'
import aboutus from '@/components/AboutUs/aboutus'
import builds from '@/components/DeckBuilder/deckbuilder'
import build from '@/components/DeckBuilder/build'
import signin from '@/components/Users/signin'
import signup from '@/components/Users/signup'
import chat from '@/components/Chat/chat'
import profile from '@/components/Profile/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Contests',
      name: 'contests',
      component: contests
    },
    {
      path: '/AboutUs',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/DeckBuilder',
      name: 'deckbuilder',
      component: builds
    },
    {
      path: '/Deckbuilder/:id',
      name: 'build',
      component: build
    },
    {
      path: '/SignIn',
      name: 'signin',
      component: signin
    },
    {
      path: '/SignUp',
      name: 'signup',
      component: signup
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    }
  ],
  mode: 'history'
})
