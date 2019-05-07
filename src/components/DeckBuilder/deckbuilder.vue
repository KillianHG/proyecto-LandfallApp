<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="deckbuilder-page">
    <v class="searchbar">
      <v-text-field
        label="ex. Black Lotus"
        v-model="cardName"
      ></v-text-field>
    </v>
    <v-btn color="info" v-on:click="fetchCard()">Buscar</v-btn>

      <template v-if="this.fetchedCards !== null">
        <template v-for="card in fetchedCards">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
                <v-img
                  v-bind:src="card.imageUrl" v-if="card.imageUrl != null"
                  height="200px"
                >
                </v-img>
                <v-img
                  src="../../assets/img/img-not-available.svg" v-if="card.imageUrl != null"
                  height="200px"
                >
                </v-img>

                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ card.name }}</div>
                    <span class="grey--text">{{ card.type }}</span>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-slide-y-transition>
                  <v-card-text v-show="show">{{ card.text }}</v-card-text>
                </v-slide-y-transition>
              </v-card>
            </v-flex>
          </v-layout>
        </template>
      </template>


 <!--   <div class="search-cards">
      <v-flex class="searchbar">
        <v-text-field
          label="ex. Black Lotus"
          v-model="cardName"
        ></v-text-field>
      </v-flex>
      <v-btn color="info" v-on:click="fetchCard()">Buscar</v-btn>

      <template v-if="this.fetchedCards !== null">
        <template v-for="card in fetchedCards">
          <a class="card" v-on:click="selectedCard(card)">
            <div class="card-info" >
              <p class="name">{{ card.name }}</p>
              <p class="description">{{ card.text }}</p>
              <div class="type-set">
                <p class="type">{{ card.type }}</p>
                <p class="set">{{ card.set }}</p>
              </div>
            </div>
            <img v-bind:src="card.imageUrl" v-if="card.imageUrl != null">
            <img src="../../assets/img/img-not-available.svg" v-if="card.imageUrl == null">
          </a>
        </template>
      </template>
    </div>

    <div class="selected-cards">
      <v-flex class="deck-name">
        <v-text-field
          label="Nombre del mazo"
          v-model="deckName"
        ></v-text-field>
      </v-flex>
    </div>-->


  </div>
</template>

<script>

  const mtg = require('mtgsdk')



  export default {
    name: 'deckbuilder',
    data () {
      return{
        cardName: '',
        deckName: '',
        show: false,
        fetchedCards: null,
        selectedCards: []
      }
    },
    methods: {
      fetchCard(){
        mtg.card.where({ name: this.cardName})
          .then(cards => {
            //console.log(cards);
            this.fetchedCards = cards;
          })
      },

      selectedCard(card){
        this.selectedCards.push(card);

        if (this.selectedCards != null ){
          for (let i = 0; i < this.selectedCards.length ; i++) {
            console.log(this.selectedCards[i])
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  .deckbuilder-page {
    display: flex;
    flex-direction: column;
    margin: 10vw 0;
    width: 100%;
    min-height: 500px;
    background-color: #555555;
    background-image: linear-gradient(#7b7b7b, #555555);
    padding: 1vw;

    .searched-cards {
      display: flex;
      flex-direction: row;
      width: auto;
      overflow-x: scroll;
      height: auto;
    }
  }
</style>
