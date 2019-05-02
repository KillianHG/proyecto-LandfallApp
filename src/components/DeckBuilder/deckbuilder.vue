<template>
  <div class="deckbuilder-page">
    <div class="card-container">
      <div class="card-info">
        <p class="title">{{ info }}</p>
        <p class="description"></p>
      </div>

      <div class="card-img">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>

  const mtg = require('mtgsdk')

  var carta = "gola";

  mtg.card.find(386616)
    .then(result => {
      this.carta = result.card.name;
      console.log(result.card.name)
    })



</script>

<style lang="scss">
  .deckbuilder-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10vw 0;

    .card-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 250px;
      height: 150px;
      border: 1px solid white;
      margin-bottom: 1vw;

      .card-info {
        display: flex;
        flex-direction: column;
        width: 125px;
        height: 150px;

        .title {
          font-size: 14px;
          color: white;
        }

        .description {
          font-size: 12px;
          color: white;
        }
      }

      .card-img {
        width: 125px;
        height: 140px;

        img {
          background-position: center;
          background-size: cover;
        }
      }
    }
  }
</style>
