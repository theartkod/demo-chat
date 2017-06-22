<template>
  <div class="hello">
    <div class="wrapp">
      <div class="wrapp--inn">
        <h1 class="wrapp--inn_title">Комментарии на node.js</h1>
        <label class="comment-input-label">
          <span>Имя:</span>
          <input class="comment-input-name" type="text" v-model="item.name" placeholder="Имя">
        </label>
        <textarea class="comment-input" v-model="item.msg" placeholder="Сообщение"></textarea>
        <a href="" class="send-btn" @click.prevent="post()">отправить</a>

        <span class="first-comment" v-if="list.length == 0">Ваш комментарий будет первым</span>
        <div class="item-comment" v-for="item in list" :key="item.id">
          <span class="item-comment__author">{{item.Name}}</span>
          <p class="item-comment__text">{{item.Message}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  /* eslint-disable */
//  import axios from 'axios'
  export default {
    name: 'hello',
    data () {
      return {
        item: {
          msg: 'Сообщение',
          name: 'Илья'
        },
        list: []
      }
    },
    methods: {
      post () {
        axios.post('http://localhost:3004/api.post', this.item)
          .then(function (response) {
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      get () {
        let that = this;
        axios.get('http://localhost:3004/api.get')
          .then(function (response) {
            that.list = response.data.reverse();

          })
          .catch(function (error) {
            console.log(error)
          })

      }
    },
    updated () {
      this.get()
    },
    mounted () {
      this.get()
    }
  }
</script>
<style scoped>
  .wrapp {
    display: flex;
    justify-content: center;
  }

  .wrapp--inn_title {
    color: #555555;
    font-size: 21px;zz
    font-family: 'Ubuntu', sans-serif;
    padding-bottom: 10px;
    border-bottom: 1px solid #e9e9e9;
  }
  .wrapp--inn {
    width: 500px;
    min-height: 100vh;
    border: 1px solid #e9e9e9;
  }
  .item-comment {
    border-bottom: 1px solid #e9e9e9;
    text-align: left;
  }

  .item-comment__author {
    font-size: 18px;
    color: #000;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 10px;
    display: block;
  }

  .item-comment__text {
    font-size: 15px;
    color: #444;
    margin: 8px 10px;
  }

  .comment-input {
    width: 99%;
    height: 60px;
    border: none;
    border-bottom: 1px solid #e9e9e9;
    resize: none;
    padding: 10px;
    max-width: 100%;
    box-sizing: border-box;
    padding-top: 0;
    padding-top: 8px;
  }

  .comment-input:focus {
    outline: none;
    border-bottom: 1px solid silver;
  }

  .comment-input-name {
    display: block;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding: 0 10px;
    border: none;
    margin-bottomx: 8px;
    border-bottom: 1px solid silver;
  }

  .comment-input-name:focus {
    outline: none;
  }

  .comment-input-label {
    text-align: left;
    box-sizing: border-box;
    display: block;
  }

  .comment-input-label span {
    margin-left: 10px;
    display: block;
    font-size: 18px;
    color: #777;
    font-weight: bold;
  }

  .send-btn {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    background-color: #f5f5f5;
    text-align: center;
    line-height: 40px;
    display: block;
    text-transform: uppercase;
    color: #444;
    font-weight: bold;
    text-decoration: none;
    transition: all ease .3s;
  }

  .send-btn:hover {
    color: #f5f5f5;
    background-color: #444;
  }

  .first-comment {
    margin: 15px;
    display: block;
    text-align: left;
  }
</style>
