<template>
  <div class="carousel">
    <v-container class="container">
      <v-layout row wrap >
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item class="item"
              v-for="event in events"
              :key="event.id"
              :src="event.imageUrl">
              <div class="title">
                {{ event.title }}
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <div class="block-featured">
      <div class="deck-card animated fadeIn slower">
        <div class="rhomb">
          <div class="card-title">
            <p>Nuevo Deck</p>
            <p>Mono-Black</p>
          </div>

          <div class="inner-rhomb">
          </div>
        </div>

        <div class="card-text-overlay">
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur atque cupiditate ex optio sed! A aliquam commodi dolor id laudantium mollitia nobis soluta? Aliquid asperiores error fuga iusto magnam.
          </p>
        </div>
      </div>

      <div class="deck-card animated fadeIn slower">
        <div class="rhomb">
          <div class="card-title">
            <p>Nuevo Deck</p>
            <p>Mono-red</p>
          </div>

          <div class="inner-rhomb">
          </div>
        </div>

        <div class="card-text-overlay">
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur delectus distinctio dolor dolorum excepturi fuga itaque iure maxime minus nesciunt porro quam quasi, rem sequi sint tempora totam ut.
          </p>
        </div>
      </div>

      <div class="deck-card animated fadeIn slower">
        <div class="rhomb">
          <div class="card-title">
            <p>Nuevo Deck</p>
            <p>Mono-Mono</p>
          </div>

          <div class="inner-rhomb">
          </div>
        </div>

        <div class="card-text-overlay">
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad beatae consequuntur cumque expedita itaque iusto labore natus nihil placeat quam reiciendis soluta suscipit, tempora ullam veniam voluptatibus! Nemo, repellat.
          </p>
        </div>
      </div>

    </div>

    <div class="notice">
      <p><i class="fas fa-mobile-alt"></i> Tambien puedes abrir esta pagina en la aplicación móvil</p>
    </div>

    <div class="block-featured">
      <div class="deck-card animated fadeIn slower">
        <div class="rhomb">
          <div class="card-title">
            <p>Nuevo Deck</p>
            <p>Mono-Black</p>
          </div>

          <div class="inner-rhomb">
          </div>
        </div>

        <div class="card-text-overlay">
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur atque cupiditate ex optio sed! A aliquam commodi dolor id laudantium mollitia nobis soluta? Aliquid asperiores error fuga iusto magnam.
          </p>
        </div>
      </div>

      <div class="deck-card animated fadeIn slower">
        <div class="rhomb">
          <div class="card-title">
            <p>Nuevo Deck</p>
            <p>Mono-red</p>
          </div>

          <div class="inner-rhomb">
          </div>
        </div>

        <div class="card-text-overlay">
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur delectus distinctio dolor dolorum excepturi fuga itaque iure maxime minus nesciunt porro quam quasi, rem sequi sint tempora totam ut.
          </p>
        </div>
      </div>

      <div class="deck-card animated fadeIn slower">
        <div class="rhomb">
          <div class="card-title">
            <p>Nuevo Deck</p>
            <p>Mono-Mono</p>
          </div>

          <div class="inner-rhomb">
          </div>
        </div>

        <div class="card-text-overlay">
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad beatae consequuntur cumque expedita itaque iusto labore natus nihil placeat quam reiciendis soluta suscipit, tempora ullam veniam voluptatibus! Nemo, repellat.
          </p>
        </div>
      </div>

    </div>

  </div>

</template>


<script>
  export default {
    data () {
      return {
        dialog: false,
        events: [
          {imageUrl: 'https://i.redd.it/ab4i3cocqmvz.jpg', id: '1', title: 'First Contest 12/12/12'},
          {
            imageUrl: 'https://i.pinimg.com/originals/ab/eb/d3/abebd33b3effb731998de203f3b59ab4.jpg',
            id: '2',
            title: 'Second Contest 6/6/6'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">

  .carousel {
    width: 100%;
    margin: 0;

    div.container {
      padding: 0;
      margin: 0;
      width: 100%;
      max-width: 2000px;

      div.v-image__image--cover {
        background-attachment: fixed;
      }
    }
  }

.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0,0,0,0.5);
  color: white;
  font-size: 2em;
  padding: 16px;
}
.event-creation {
  float: left;
  width: 100%;
  margin-top: 20px;
}
  #event-button {
    flex: -moz-fit-content;
  }

  .card {
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }

  .featured-card {
    @extend .card;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 3 - 2%);
    height: 30vw;
    max-height: 450px;

    .card-img {
      width: 100%;
      height: 60%;
      border-radius: 8px 8px 0 0;
      background-size: cover;
      background-position: center;


    }

    .card-icon {
      position: absolute;
      display: flex;
      justify-content: center;
      top: 47.4%;
      width: 27%;
      height: 25%;
      border-radius: 50%;
      box-shadow: 0 10px 30px rgba(66, 89, 101, 0.16);
      background-color: white;

      &.blue {
        background-image: url("../assets/img/blue.jpg");
        background-position: center;
        background-size: cover;
      }

      &.black {
        background-image: url("../assets/img/black.jpg");
        background-position: center;
        background-size: cover;
      }
    }

    .card-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 40%;
      padding-top: 17%;
      background-color: white;

      .card-title {
        line-height: 1.3;
        font-family: "Source Sans Pro Bold";
        font-size: 2.5vw;
        color: black;

      }

      .card-subtitle {
        letter-spacing: 4px;
        font-size: 1.5vw;
        color: black;

      }
    }
  }


  .block-featured {
    display: flex;
    justify-content: space-between;
    margin: 2vw;

    .deck-card {
      @extend .featured-card;
      width: calc(100% / 3 - 4%);
      background-image: url("../assets/img/mtg2.jpg");
      background-size: cover;
      background-position: center;
      background-attachment: fixed;

      .rhomb {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8vw;
        height: 8vw;
        transform: rotate(45deg);
        margin-top: 12%;
        background-color: rgba(0, 0, 0, 0.35);

        .inner-rhomb {
          width: 88%;
          height: 88%;
          background-color: rgba(0, 0, 0, 0.50);
        }

        .card-title {
          position: absolute;
          transform: rotate(-45deg);

          p {
            line-height: 0.2;
            width: 20rem;
            text-align: center;
            font-size: 1.6rem;
            font-family: "Source Sans Pro Bold";
            color: white;

            &:last-child {
              line-height: 1.3;
              font-size: 1.2vw;
              font-family: "Pacifico Regular";
            }

          }
        }
      }

      .card-subtitle {
        position: absolute;
        display: flex;
        line-height: 1.9;
        flex-direction: column;
        bottom: 5%;

        p {
          text-align: center;
          color: white;

          &:first-child {
            font-family: "Source Sans Pro Light";
            font-size: 1.2vw;
          }

          &:last-child {
            font-size: 1.9vw;
          }
        }
      }

      .card-text-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: opacity 0.4s;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 8px;

        .text {
          position: absolute;
          color: white;
          font-size: 20px;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          text-align: justify;
          line-height: 2.6vw;
          width: 74%;
          font-family: "Source Sans Pro Semi Bold";
        }
      }
    }

    .deck-card:hover {

      .card-text-overlay {
        opacity: 1;
      }
    }
  }

  @media (min-width: 100px) and (max-width: 1023px) {

    .card2 {
      border-radius: 8px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    }

    .featured-card2 {
      @extend .card2;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      height: 30vw;
      max-height: 450px;

      .card-img {
        width: 100%;
        height: 60%;
        border-radius: 8px 8px 0 0;
        background-size: cover;
        background-position: center;


      }

      .card-icon {
        position: absolute;
        display: flex;
        justify-content: center;
        top: 47.4%;
        width: 27%;
        height: 25%;
        border-radius: 50%;
        box-shadow: 0 10px 30px rgba(66, 89, 101, 0.16);
        background-color: white;

        &.blue {
          background-image: url("../assets/img/blue.jpg");
          background-position: center;
          background-size: cover;
        }

        &.black {
          background-image: url("../assets/img/black.jpg");
          background-position: center;
          background-size: cover;
        }
      }

      .card-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 40%;
        padding-top: 17%;
        background-color: white;

        .card-title {
          line-height: 1.3;
          font-family: "Source Sans Pro Bold";
          font-size: 1.6rem;
          color: black;


        }

        .card-subtitle {
          letter-spacing: 4px;
          font-size: 1.5vw;
          color: black;

        }
      }
    }

    .block-featured {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 4vw;

      .deck-card {
        @extend .featured-card2;
        width: 100%;
        margin-bottom: 3vw;
        height: 100vw;
        background-image: url("../assets/img/mtg2.jpg");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;

        .rhomb {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25vw;
          height: 25vw;
          transform: rotate(45deg);
          margin-top: 12%;
          background-color: rgba(0, 0, 0, 0.35);

          .inner-rhomb {
            width: 88%;
            height: 88%;
            background-color: rgba(0, 0, 0, 0.50);
          }

          .card-title {
            position: absolute;
            transform: rotate(-45deg);

            p {
              line-height: 0.2;
              text-align: center;
              font-size: 1.6rem;
              font-family: "Source Sans Pro Bold";
              color: white;

              &:last-child {
                line-height: 1.3;
                font-size: 4vw;
                font-family: "Pacifico Regular";
              }

            }
          }
        }

        .card-subtitle {
          position: absolute;
          display: flex;
          line-height: 1.9;
          flex-direction: column;
          bottom: 5%;

          p {
            text-align: center;
            color: white;

            &:first-child {
              font-family: "Source Sans Pro Light";
              font-size: 1.2vw;
            }

            &:last-child {
              font-size: 1.9vw;
            }
          }
        }

        .card-text-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          transition: opacity 0.4s;
          opacity: 0;
          background-color: rgba(0, 0, 0, 0.6);
          border-radius: 8px;

          .text {
            position: absolute;
            color: white;
            font-size: 20px;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            text-align: justify;
            line-height: 9.6vw;
            width: 74%;
            height: 74%;
            font-family: "Source Sans Pro Semi Bold";
          }
        }
      }

      .deck-card:hover {

        .card-text-overlay {
          opacity: 1;
        }
      }
    }
  }

  .notice {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,.5);
    border-top: 1px solid rgba(255,255,255,.5);

    p {
      width: 100%;
      font-size: 2vw;
      text-align: center;
      padding: 1vw;
      margin: 0;
    }
  }

  @media (min-width: 100px) and (max-width: 1023px) {
    .notice {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;


      p {
        width: 100%;
        font-size: 3vw;
        border-bottom: 1px solid rgba(255,255,255,.5);
        border-top: 1px solid rgba(255,255,255,.5);
        text-align: center;
        padding: 1vw;
      }
    }
  }

</style>




