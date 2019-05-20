<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="deckbuilder-page">
    <div class="deckbuilder-container">
      <div class="searched-cards">
        <div class="searchbar-container">
          <input class="searchbar" type="text" v-model="cardName" placeholder="Buscar">
          <button class="search-button" v-on:click="fetchCard()"></button>
        </div>

        <template v-if="this.fetchedCards !== null">
          <div class="cards-result">
            <template v-for="card in fetchedCards">
              <a class="card" :class="card.colors[0]" id="card" v-on:click="selectedCard(card)" v-if="card.imageUrl != null">
                <p class="card-name">{{ card.name }}</p>
                <p class="card-set">{{ card.set }}</p>
                <img class="hover-img" v-bind:src="card.imageUrl" v-if="card.imageUrl != null">
                <img class="hover-img" src="../../assets/img/img-not-available.svg" v-if="card.imageUrl == null">
              </a>
            </template>
          </div>
        </template>
      </div>

      <div class="selected-cards" v-if="selectedCards !== null">
        <input class="deck-name" type="text" placeholder="Nombre del Mazo">

        <div class="cards">
          <template v-for="(cards, index) in selectedCards">
            <a class="deck-card" v-on:click="removeCards(index)">
              <p class="card-name">{{ cards.name }} x{{ cards.quantity }}</p>
            </a>
          </template>
        </div>
      </div>
    </div>
    <button class="save-deck">Guardar Mazo</button>
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
        selectedCards: [],
        fetching: false,
        hello: true
      }
    },
    methods: {
      fetchCard(){
        this.fetching = true;
        mtg.card.where({ name: this.cardName})
          .then(cards => {
            this.fetching = false;

            cards = cards.map(c => {
              return {...c, quantity: 1}
            })

            this.fetchedCards = cards;
          })
      },
      selectedCard(card) {
        let alreadyInDeck = false;
        this.selectedCards.map(c => {
          if (c.id === card.id){
            alreadyInDeck = true;
          }
        });


        if (alreadyInDeck){
          card.quantity++;
        } else {
          this.selectedCards.push(card);
        }
      },

      removeCards(index) {
        this.selectedCards[index].quantity--;

        if (this.selectedCards[index].quantity <= 0){
          this.selectedCards.splice(index, 1)
        }
      },

      cardColors() {
        var col=document.getElementById("card");

        for (let i = 0; i < this.fetchedCards.length ; i++) {
          console.log(this.fetchedCards[i].colors)

          switch (this.fetchedCards[i].colors[0]) {
            case "White":
              col.style.backgroundColor="#F4D27A";
              console.log("W")
              break;
            case "Black":
              col.style.backgroundColor="#A89F9E";
              console.log("Black")
              break;
            case "Red":
              col.style.backgroundColor="#E59972";
              console.log("R")
              break;
            case "Blue":
              col.style.backgroundColor="#A2C0E8";
              console.log("B")
              break;
            case "Green":
              col.style.backgroundColor="#9AD897";
              console.log("G")

          }
        }
      },

      cardColor(card) {

          switch (card.colors[0]) {
            case "White":
              return "#F4D27A";
              break;
            case "Black":
              return "#A89F9E";
              break;
            case "Red":
              return "#E59972";
              break;
            case "Blue":
              return "#A2C0E8";
              break;
            case "Green":
              return "#9AD897";
          }
      }
    }
  }
</script>

<style lang="scss">
  .deckbuilder-page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5vw 0;
    width: 100%;
    min-height: 500px;
    background-color: #555555;
    background-image: linear-gradient(#7b7b7b, #555555);
    padding: 1vw;

    .deckbuilder-container {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      margin-bottom: 1%;

      .searched-cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 68%;
        height: 500px;
        background-color: #111111;
        border-radius: 8px;
        padding: 10px;
        margin-right: 2%;

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
            text-transform: capitalize;
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

            &.Red {
              background-color: #E59972;
            }

            &.White {
              background-color: #F4DA97;

            }

            &.Green {
              background-color: #9AD897;

            }

            &.Black {
              background-color: #A89F9E;

            }

            &.Blue {
              background-color: #A2C0E8;

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
    .save-deck {
      width: 100%;
      height: 50px;
      background-color: powderblue;
      border-radius: 8px;
      text-decoration: none;
      outline: none;
    }
  }
  @media (min-width: 100px) and (max-width: 1023px) {
    .deckbuilder-page {
      display: flex;
      flex-direction: column;

      .deckbuilder-container {
        display: flex;
        flex-direction: column;

        .searched-cards {
          width: 100%;
          margin-bottom: 15px;
        }

        .selected-cards {
          width: 100%;
        }
      }
    }
  }
</style>
