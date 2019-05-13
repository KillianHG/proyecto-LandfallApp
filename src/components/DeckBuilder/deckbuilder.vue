<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="deckbuilder-page">
 <!--   <v class="searchbar">
      <v-text-field
        label="ex. Black Lotus"
        v-model="cardName"
      ></v-text-field>
    </v>
    <v-btn color="info" v-on:click="fetchCard()">Buscar</v-btn>

     <template v-if="this.fetchedCards !== null">
         <div class="searched-cards">
           <template v-for="card in fetchedCards">
             <a class="card" v-on:click="selectedCard(card)">

             </a>
           </template>
         </div>
     </template>-->



    <div class="searched-cards">
      <div class="searchbar-container">
        <input class="searchbar" type="text" v-model="cardName" placeholder="Buscar">
        <button class="search-button" v-on:click="fetchCard()"></button>
      </div>

      <template v-if="this.fetchedCards !== null">
        <div class="cards-result">
          <template v-for="card in fetchedCards">
            <a class="card" v-on:click="selectedCard(card)" v-if="card.imageUrl != null">
              <p class="card-name">{{ card.name }}</p>
              <p class="card-set">{{ card.set }}</p>
              <img class="hover-img" v-bind:src="card.imageUrl" v-if="card.imageUrl != null">
              <img class="hover-img" src="../../assets/img/img-not-available.svg" v-if="card.imageUrl == null">
            </a>
          </template>
        </div>
      </template>
    </div>

    <div class="selected-cards" v-if="selectedCards != null">
      <input class="deck-name" type="text" placeholder="Nombre del Mazo">

      <div class="cards">
        <template v-for="cards in selectedCards">
          <a class="deck-card" >
            <p class="card-name">{{ cards.name }}</p>
          </a>
        </template>
      </div>
    </div>

    <!--<div class="search-cards">


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
    flex-direction: row;
    justify-content: space-between;
    margin: 10vw 0;
    width: 100%;
    min-height: 500px;
    background-color: #555555;
    background-image: linear-gradient(#7b7b7b, #555555);
    padding: 1vw;

    .searched-cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 68%;
      height: 500px;
      background-color: #111111;
      border-radius: 8px;
      padding: 10px;

      .searchbar-container {
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        height: 32px;
        margin-bottom: 2%;

        .searchbar {
          text-decoration: none;
          outline: none;
          background-color: white;
          color: #424242;
          text-align: center;
          width: 100%;
          height: 100%;
          border-radius: 8px;

        }
        .search-button {
          position: absolute;
          left: 2%;
          text-decoration: none;
          outline: none;
          text-align: center;
          width: 20px;
          height: 20px;
          border-radius: 8px;
          background-image: url("../../assets/img/search.svg");
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
        }
      }

      .cards-result {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: #7b7b7b;
        border-radius: 8px;
        overflow-y: scroll;
        padding: 10px;

        .card {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: 50px;
          background-color: white;
          border-radius: 8px;
          padding: 5px 10px;
          margin-bottom: 10px;

          .hover-img {
            position: absolute;
            width: 160px;
            height: 215px;
            display: none;
          }


          .card-name {
            font-size: 20px;
            color: #424242;
            height: 33px;
            margin: 0 5% 0 0;
          }

          .card-set {
            font-size: 20px;
            color: #424242;
            margin: 0;
            height: 33px;
          }
        }

        .card:hover {
          .hover-img{
            display: block;
            right: 18%;
            top: 33%;
            z-index: 9999;
            border-radius: 4px;
          }
        }
      }
    }

    .selected-cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 30%;
      height: 500px;
      background-color: #111111;
      border-radius: 8px;
      padding: 10px;

      .deck-name {
        text-decoration: none;
        outline: none;
        background-color: white;
        color: #424242;
        text-align: center;
        width: 100%;
        height: 32px;
        border-radius: 8px;
        margin-bottom: 5%;
      }

      .cards{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: #7b7b7b;
        border-radius: 8px;
        overflow-y: scroll;
        padding: 10px;

        .deck-card {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: 50px;
          background-color: white;
          border-radius: 8px;
          padding: 5px 10px;
          margin-bottom: 10px;

          .card-name {
            font-size: 20px;
            color: #424242;
            height: 33px;
            margin: 0 5% 0 0;
          }

          .card-set {
            font-size: 20px;
            color: #424242;
            margin: 0;
            height: 33px;
          }
        }
      }
    }
  }
</style>
