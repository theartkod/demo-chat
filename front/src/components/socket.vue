<template>
  <div>
    <div class="wrapp">
      <div class="chat">
        <input @keyup.enter="sendMessage()" v-model="text" placeholder="Введите сообщение">
        <a href="#" class="send" @click.prevent="sendMessage()">Отправить</a>
        <div class="chat--item" v-for="item in arr">
          <div class="chat--item-avatar"></div>
          <p>ID: {{item.id}}, <br> Сообщение: {{item.Message}}, <br> Дата: {{item.createdAt}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  import axios from 'axios'
  export default {
    name: 'socket',
    data () {
      return {
        text: '',
        arr: []
      }
    },
    sockets:{
      connect (data){
        console.log('Сокет подключился')
      },
      send (data){
        this.arr.push(data[0]);
      }
    },
    methods: {
      sendMessage () {
        if (this.text.length > 0) {
          this.$socket.emit('send', this.text);
          this.text = '';
        } else {
          console.log('Пытаешься отправить пустое сообщение')
        }
      },
      getAll () {
        let self = this;
        axios.get('http://localhost:3004/api.get')
          .then(function (response) {
            self.arr = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    mounted: function () {
      this.getAll()
    }
  }
</script>
