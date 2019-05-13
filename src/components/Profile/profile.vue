<template>
  <div class="profile-page">
    <div class="profile-nickname-img-container">
      <div class="profile-img">

      </div>
      <p class="nickname">{{ user.nickname }}</p>
    </div>
    <div class="profile-info-container">
      <div class="prof-box">
        <div class="profile-info">
          <div class="name">
            <p>NOMBRE:</p>
            <p>{{ user.name }}</p>
          </div>
          <div class="lastname">
            <p>APELLIDO:</p>
            <p>ASOM APELLIDO</p>
          </div>
          <div class="email">
            <p>EMAIL:</p>
            <p>{{ user.email }}</p>
          </div>
          <div class="saldo">
            <p>SALDO EN TIENDA:</p>
            <p>{{ user.saldo }} €</p>
          </div>
          <div></div>
          <button>CAMBIAR CONTRASEÑA</button>
        </div>
        <div class="match-info">
          <div class="match">
            <div class="type-day">
              <p class="type">Standard</p>
              <p class="day">25/03/2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-decks-container">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'profile',
    data () {
      return{
        user: this.$store.getters.user
      }
    }
  }
</script>

<style lang="scss">

  .profile-page {
    display: flex;
    flex-direction: column;
    height: 800px;

    .profile-nickname-img-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 200px;
      background-color: #555555;
      background-image: linear-gradient(#7b7b7b, #555555);
      border-bottom: 1px solid #424242;

      .profile-img {
        background-image: url("../../assets/img/sign-up-page.jpg");
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        border: 3px solid #a0a0a0;
        margin-top: 2%;
        box-shadow: 0 0 10px;
      }

      .nickname {
        color: #D8D8D8;
        font-weight: bold;
        font-size: 47px;
        margin-bottom: 0;
      }
    }

    .profile-info-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 400px;

      .prof-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 97%;
        height: 96%;
        box-shadow: 0 0 10px;
        padding: 20px;

        .profile-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          height: 100%;
          width: 50%;
          font-weight: bold;
          font-size: 18px;
          border-right: 1px solid #c9c9c9;
          color: #D8D8D8;

          .name {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;

            p {
              &:first-child {
                width: 35%;
              }
              &:last-child {
                width: 65%;
              }
            }
          }

          .lastname {
            @extend .name;
          }

          .email {
            @extend .name;
          }

          .saldo {
            @extend .name;
          }

          button {
            background-color: #D8D8D8;
            color: #424242;
            height: 35px;
            width: 45%;
            border-radius: 8px;
            font-weight: bold;
          }
        }

        .match-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 50%;
          height: 100%;
          padding-left: 20px;
          overflow-y: scroll;

          .match {
            width: 100%;
            height: 40%;
            background-color: #D8D8D8;
            border-radius: 12px;
            padding: 8px;
            margin-bottom: 2vw;

            .type-day {
              display: flex;
              flex-direction: row;
              justify-content: space-around;

              .type {
                width: 35%;
                font-size: 18px;
                font-family: "Source Sans Pro Bold";
                color: #424242;
              }
            }
          }
        }
      }
    }

    .profile-decks-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 200px;
      background-color: #7b7b7b;
      background-image: linear-gradient(#555555, #7b7b7b);
      border-top: 1px solid #424242;
    }
  }

</style>
