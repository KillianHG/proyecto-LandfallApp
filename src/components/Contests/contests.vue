<template>
  <div class="contest-page">

    <div class="entry mtg1">
      <div class="entry-detail">
        <p class="entry-title wow fadeInRight">Torneo Standard mañana mismo putos</p>
        <p class="entry-text wow fadeInRight">
          Mañana tenemos torneo de standard y vamos a pasarnoslo fatal hijos de put ñaaa.
        </p>
        <a class="more-info">Inscribirse</a>
      </div>
    </div>

    <div class="entry mtg2">
      <div class="entry-detail">
        <p class="entry-title wow fadeInRight">Torneo Standard mañana mismo putos</p>
        <p class="entry-text wow fadeInRight">
          Mañana tenemos torneo de standard y vamos a pasarnoslo fatal hijos de put ñaaa.
        </p>
        <a class="more-info">Inscribirse</a>
      </div>
    </div>

    <div class="entry mtg3">
      <div class="entry-detail">
        <p class="entry-title wow fadeInRight">Torneo Standard mañana mismo putos</p>
        <p class="entry-text wow fadeInRight">
          Mañana tenemos torneo de standard y vamos a pasarnoslo fatal hijos de put ñaaa.
        </p>
        <a class="more-info">Inscribirse</a>
      </div>
    </div>

    <div class="entry mtg4">
      <div class="entry-detail">
        <p class="entry-title wow fadeInRight">Torneo Standard mañana mismo putos</p>
        <p class="entry-text wow fadeInRight">
          Mañana tenemos torneo de standard y vamos a pasarnoslo fatal hijos de put ñaaa.
        </p>
        <a class="more-info">Inscribirse</a>
      </div>
    </div>
  </div>

</template>

<style lang="scss">

  .contest-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    margin-top: 3vw;

    .entry {
      display: flex;
      align-items: center;
      height: 25vw;
      width: 80%;
      margin-bottom: 4vw;
      background-size: cover;
      background-position: center;
      overflow: auto;
      border-radius: 8px;

      &-detail {
        display: flex;
        flex-direction: column;
        width: 85%;
        border-radius: 0 8px 8px 0;
        padding: 1.7vw 3.2vw;
        background-color: rgba(0, 0, 0, 0.75);
        color: white;

        .entry-title {
          font-size: 2.7vw;
          text-transform: uppercase;
          font-family: "Source Sans Pro Bold";
          margin: 0;
        }

        .entry-text {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          overflow: hidden;
          line-height: 16px;
          max-height: 32px;
          padding: 1vw 0 2vw 0;
          font-size: 1.6vw;

          &.relaciones {
            padding: 10px 0;
          }
        }

        .more-info {
          font-size: 1.2vw;
          color: #D36958;
          font-weight: bold;
          border-bottom: 1px solid #D36958;
          width: 10%;
        }
      }

      &:nth-child(odd) {
        justify-content: flex-end;

        .entry-detail {
          border-radius: 8px 0 0 8px;
        }
      }

      &.mtg1 {
        background-image: url("../../assets/img/mtg1.jpg");
        background-attachment: fixed;
      }
      &.mtg2 {
        background-image: url("../../assets/img/mtg2.jpg");
        background-attachment: fixed;
      }
      &.mtg3 {
        background-image: url("../../assets/img/mtg3.jpg");
        background-attachment: fixed;
      }
      &.mtg4 {
        background-image: url("../../assets/img/mtg4.jpg");
        background-attachment: fixed;
      }
    }
  }

</style>


