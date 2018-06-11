<template>
  <div>
    <div class="box">
      <input type="text" placeholder="请输入" v-model="keyword"/>
      <button @click="addToList()">添加</button>
    </div>
    <ul>
      <li v-for="item in lists">
        <span @click="changeText(item)" v-if="!item.status">{{item.text}}</span>
        <div class="box">
          <input type="text" v-if="item.status" v-model="text"/>
          <button v-if="item.status" @click="cancel(item)" class="cancel">取消</button>
          <button v-if="item.status" @click="updateItem(item)">修改</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        keyword: null,
        text   : null
      }
    },
    computed: {
      lists() {
        return this.$store.state.myList.list
      }
    },

    mounted(){

    },

    methods: {
      addToList() {
        if (this.keyword) {
          this.$store.dispatch('addList', this.keyword);
        } else {
          alert('请输入');
        }
        this.keyword = null;
      },

      changeText(item) {
        this.$store.dispatch('changeText', item);
        this.text = item.text;
      },

      updateItem(item) {
        this.$store.dispatch('updateItem', {item: item, text: this.text, cancel: false});
      },

      cancel(item){
        this.$store.dispatch('updateItem', {item: item, text: this.text, cancel: true});
      }
    }
  }
</script>
<style scoped lang="less">
  .box {
    width: 350px;
    margin: 0 auto;
    padding-bottom: 20px;
    input {
      border: 1px solid #ccc;
      height: 35px;
      width: 246px;
      box-sizing: border-box;
      outline: none;
    }
    button {
      background: rgb(55, 173, 122);
      height: 35px;
      width: 46px;
      color: white;
      border: none;
      vertical-align: top;
      outline: none;
      line-height: 1;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  ul {
    width: 350px;
    margin: 0 auto;
    padding-left: 0;
    li {
      text-align: left;
      height: 30px;
      line-height: 30px;
      list-style: none;
      padding: 5px 0;
      span {
        display: inline-block;
        width: 100%;
      }
      span:hover {

        width: 300px;
        background: rgba(55, 173, 122, 0.2);
        cursor: pointer;
      }
      .cancel {
        background: gray;
      }
    }
  }


</style>
