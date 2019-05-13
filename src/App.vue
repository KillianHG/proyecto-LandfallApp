<template>
  <v-app dark>
    <v-navigation-drawer
      class="some"
      v-model="sideNav"
      temporary
      absolute>
      <v-list class="pa-0">
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link" class="nav">
          <v-list-tile-action>
            <i :class="'ss ss-2x ss-' + item.icon"></i>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="userIsAuthenticated">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon
        @click.native.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"></v-toolbar-side-icon>

      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"><i class="ss ss-2x ss-mor" id="logo"></i>
          Landfall</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only navbar">
        <v-btn flat v-for="item in menuItems"
               :key="item.id"
               router
               :to="item.link">
          <i :class="'ss ss-2x ss-' + item.icon"></i>
          &nbsp;
          {{ item.title }}
        </v-btn>

        <v-btn
          v-if="userIsAuthenticated"
          flat
          @click="onLogout">
          <v-icon left dark>exit_to_app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>

    <v-footer
      class="footer"
      dark
      height="auto"
    >
      <v-card
        flat
        tile
        class="darken-1 lighten-1 white--text text-xs-center"
        style="width: 100%"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2018 — <strong>LandFall S.L. TODOS LOS DERECHOS RESERVADOS.
          Todas las marcas registradas referenciadas son propiedad de sus respectivos dueños.</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        username: this.$store.getters.nickname,
        sideNav: false,
        icons: [
          'fab fa-facebook-f',
          'fab fa-twitter',
          'fab fa-google-plus-g',
          'fab fa-linkedin-in',
          'fab fa-instagram'
        ],
        socialmedia: [
          'https://www.facebook.com',
          'https://www.twitter.com',
          'https://www.google.com',
          'https://www.linkedin.com',
          'https://www.instagram.com'
        ]
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'boros', title: 'Torneos', link: '/contests'},
          {icon: 'dkm', title: 'DeckBuilder', link: '/deckbuilder'},
          {icon: 'parl3', title: 'Acerca de nosotros', link: '/aboutus'},
          {icon: 'wth', title: 'Chat', link: '/chat'},
          {icon: 'ulg', title: 'Sign Up', link: '/signup'},
          {icon: 'atq', title: 'Sign In', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'boros', title: 'Torneos', link: '/contests'},
            {icon: 'dkm', title: 'DeckBuilder', link: '/deckbuilder'},
            {icon: 'parl3', title: 'Acerca de nosotros', link: '/aboutus'},
            {icon: 'wth', title: 'Chat', link: '/chat'},
            {icon: 'atq', title: 'Profile', link: '/profile'}

          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>


<style lang="scss">

  body {
    position: relative;
    min-height: 100%;
    font-family: "Source Sans Pro Regular";
  }

  .dark-button {
    font-size: 3rem;
    width: 33px;
    height: 64px;
  }
  .ss {
    font-size: 2.4rem;
    margin-bottom: 15px;
  }
  #drk {
    margin-left: 3px;
  }
  #drk1 {
    margin-left: 3px;
  }
  .contact-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: calc(100vh - 70px);

    .contact {
      display: flex;
      flex-direction: column;
      align-items: flex-start;


      h2 {
        border-bottom: 1px solid white;
        width: 100%;
        margin-bottom: 10px;
      }

      p {
        margin: 0;
      }
    }

    .info {
      display: flex;
      justify-content: space-between;
      width: 100%;

    }
  }

  .signform{
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("assets/img/mtg-singup.jpg");
    background-position-y: 2%;
    background-position-x: 10%;
    background-size: cover;
    width: 100%;
    height: 700px;

    .inner-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      background-color: rgba(1, 1, 1, 0.75);
      border-radius: 12px;
      padding: 10px;

      h1 {
        border-bottom: 1px solid white;
        width: 100%;
        text-align: center;
        margin-bottom: 25px;
      }

      form {
        width: 100%;
      }

    }

  }

  @media (min-width: 100px) and (max-width: 1023px) {
    .signform{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-image: url("assets/img/mtg-singup.jpg");
      background-position-y: 2%;
      background-position-x: 10%;
      background-size: cover;
      width: 100%;
      height: 700px;


      h1 {
        border-bottom: 1px solid white;
        width: 60%;
        text-align: center;
        margin-bottom: 25px;
      }

      form {
        width: 60%;
      }
    }
  }
</style>

