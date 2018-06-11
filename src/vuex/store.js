/**
 * Created by cone41 on 2018/6/11.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import myList from './myList/state'
Vue.use(Vuex);

export default new Vuex.Store({
  
  modules:{
    myList:myList
  }
  
});
