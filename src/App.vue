<template>
  <div id="app">
    <div  class="mine">my-vuex-demo</div>

    <add-list></add-list>
    <!--<router-view/>-->
    <div class="author">author:cone41</div>
  </div>
</template>

<script>
  import addList from './components/addList'
  export default {
    name      : 'App',
    components: {
      addList
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;

  }
  .mine{
    font-size:30px;
    text-align: center;
    line-height: 30px;
    margin-bottom: 30px;
    font-weight: 500;
  }
  .author{
    position: fixed;
    bottom: 30px;
    right: 100px;
    font-size:20px;
    font-weight: 300;
  }
</style>
