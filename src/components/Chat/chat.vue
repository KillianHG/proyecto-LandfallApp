<template>
  <div class="chat-page">
    <div class="chat-container">
      <ul
        v-for="message in chat"
        class="message-list">
        <div class="message"
          :class="{my: myMessage(message.sender_id) }">
          <div class="nickname-message">
            <h1 class="nickname">{{ message.sender_name }}:</h1>
            <p>{{ message.created }}</p>
          </div>
          <div class="text">
            <p>{{ message.content }}</p>
          </div>
        </div>
      </ul>
    </div>

    <div class="message-container">
      <input type="text" class="text-input" v-model="message">
      <button class="send-btn" @click="sendMessage">
        <i class="ss ss-pleaf ss-mythic"></i>
      </button>
    </div>
  </div>
</template>

<script>
  import * as firebase from 'firebase'

  export default {
    name: 'chat',

    data: () => ({
      message: ''
    }),
    computed: {
      chat () {
        return this.$store.getters.chat
      },
    },
    methods: {
      myMessage (id) {
        if (id === this.$store.getters.uid) {
          return true
        } else {
          return false
        }
      },
      sendMessage () {
        if (this.message != '') {
          firebase.database().ref('chat/channels/channel/thread/').push({
            content: this.message,
            created: this.getTime(),
            sender_id : this.$store.getters.uid,
            sender_name: this.$store.getters.nickname
          });
          this.message = ''
        }
      },
      getTime () {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        return dateTime
      }

    },
  }
</script>

<style lang="scss">

  .chat-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .chat-container {
      display: flex;
      flex-direction: column;
      min-height: 100px;
      width: 95%;
      margin: 10px 0;
      background-color: rgba(255, 255, 255, 0.65);
      border-radius: 12px;
      height: 40vw;
      overflow-y: scroll;
      margin-top: 45px;


      .message-list {
        width: 100%;
        height: 100%;

        .message {
          display: flex;
          flex-direction: row;
          width: 50%;
          height: auto;
          margin-top: 15px;
          background-color: #EFEFEF;
          border-radius: 12px;
          padding: 10px;

          .nickname-message {
            display: flex;
            flex-direction: column;
            width: auto;

            .nickname {
              font-size: 22px;
              color: #A6E0B0;
              margin-right: 10px;
            }

            p {
              color: #424242;
            }
          }
          .text {
            height: auto;
            width: 60%;
            margin-bottom: 0;

            p {
              color: #424242;
              font-size: 22px;
              margin-bottom: 0;
              word-wrap:break-word;

            }
          }

          &.my {
            float: right;
            margin-right: 20px;
            margin-bottom: 15px;

            .nickname-message {
              .nickname {
                color: #B26C59;
              }
            }
          }
        }
      }
    }

    .message-container {
      width: 95%;
      background-color: rgba(255, 255, 255, 0.65);
      height: 37px;
      border-radius: 12px;
      margin-bottom: 100px;

      .text-input {
        width: 95%;
        background-color: rgba(255, 255, 255, 0.65);
        height: 37px;
        border-radius: 12px 0 0 12px;
        padding: 0 15px;
        color: black;
        outline: none;
        word-wrap:break-word;
      }

      .send-btn {
        position: absolute;
        border-radius: 12px;
        width: 5%;
        height: 37px;
        right: 2.5%;
        outline: none;
      }
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

        .message-list {
          width: 100%;
          height: 100%;

          .message {
            display: flex;
            flex-direction: row;
            width: 80%;
            height: auto;
            margin-top: 15px;
            background-color: #EFEFEF;
            border-radius: 12px;
            padding: 10px;

            .nickname-message {
              display: flex;
              flex-direction: column;
              width: auto;

              .nickname {
                font-size: 16px;
                color: #A6E0B0;
                margin-right: 10px;
              }

              p {
                color: #424242;
                font-size: 10px;
              }
            }
            .text {
              height: auto;
              width: 70%;
              margin-bottom: 0;
              margin-left: 10px;

              p {
                color: #424242;
                font-size: 16px;
                margin-bottom: 0;
                word-wrap:break-word;

              }
            }

            &.my {
              float: right;
              margin-right: 20px;
              margin-bottom: 15px;

            }
          }
        }
      }

      .message-container {
        width: 95%;
        margin-bottom: 50px;

        .text-input {
          width: 90%;
          height: 37px;
          background-color: rgba(255, 255, 255, 0.65);
          border-radius: 12px;
          padding: 0 15px;
          color: black;
          word-wrap:break-word;
        }

        .send-btn {
          position: absolute;
          border-radius: 12px;
          width: 10%;
          height: 37px;
          right: 2.5%;
        }
      }
    }
  }

  @media (min-width: 100px) and (max-width: 360px) {
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

        .message-list {
          width: 100%;
          height: 100%;

          .message {
            display: flex;
            flex-direction: row;
            width: 90%;
            height: auto;
            margin-top: 15px;
            background-color: #EFEFEF;
            border-radius: 12px;
            padding: 10px;
            margin-left: -16px;


            .nickname-message {
              display: flex;
              flex-direction: column;
              width: auto;

              .nickname {
                font-size: 14px;
                color: #A6E0B0;
                margin-right: 10px;
              }

              p {
                color: #424242;
                font-size: 10px;
              }
            }
            .text {
              height: auto;
              width: 70%;
              margin-bottom: 0;
              margin-left: 15px;

              p {
                color: #424242;
                font-size: 14px;
                margin-bottom: 0;
                word-wrap:break-word;

              }
            }

            &.my {
              float: right;
              margin-right: 8px;
              margin-bottom: 15px;

            }
          }
        }
      }

      .message-container {
        width: 95%;
        margin-bottom: 50px;
        height: auto;

        .text-input {
          width: 85%;
          min-height: 37px;
          height: auto;
          background-color: rgba(255, 255, 255, 0.65);
          border-radius: 12px;
          padding: 0 15px;
          color: black;
          word-wrap:break-word;
          overflow-y: scroll;
        }

        .send-btn {
          position: absolute;
          border-radius: 12px;
          width: 15%;
          height: 37px;
          right: 2.5%;
        }
      }
    }
  }

</style>
