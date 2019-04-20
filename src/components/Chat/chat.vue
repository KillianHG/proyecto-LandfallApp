<template>
  <div class="chat-page">
    <div class="chat-container">

    </div>
    <input type="text" class="text-input">
    <button class="send-btn">
      <i class="ss ss-pleaf ss-mythic"></i>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'chat'
  }
</script>

<style lang="scss">

  .chat-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .chat-container {
      min-height: 100px;
      width: 95%;
      margin: 10px 0;
      background-color: rgba(255, 255, 255, 0.65);
      border-radius: 12px;
      height: 40vw;
      overflow-y: scroll;
      margin-top: 45px;
    }

    .text-input {
      width: 95%;
      height: 37px;
      background-color: rgba(255, 255, 255, 0.65);
      border-radius: 12px;
      margin-bottom: 50px;
      padding: 0 15px;
      color: black;
    }

    .send-btn {
      position: absolute;
      border-radius: 12px;
      width: 60px;
      height: 37px;
      top: 75.6%;
      right: 3.5%;

    }
  }

  @media (min-width: 100px) and (max-width: 1023px) {
    .chat-page {
      display: flex;
      justify-content: center;
      align-items: center;

      .chat-container {
        min-height: 100px;
        width: 95%;
        margin: 10px 0;
        background-color: rgba(255, 255, 255, 0.65);
        border-radius: 12px;
        height: 130vw;
      }

      .text-input {
        width: 95%;
        height: 37px;
        background-color: rgba(255, 255, 255, 0.65);
        border-radius: 12px;
        margin-bottom: 10px;
        padding: 0 15px;
        color: black;
      }

      .send-btn {
        position: absolute;
        border-radius: 12px;
        width: 60px;
        height: 37px;
        top: 69.3%;
        right: 3.5%;

      }
    }
  }

</style>
