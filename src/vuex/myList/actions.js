/**
 * Created by cone41 on 2018/6/11.
 */
import * as type from './mutation_type';
export default {
  addList({commit},item){
    commit(type.ADD_LIST,item)
  },
  updateItem({commit},item){
    commit(type.UPDATE_ITEM,item)
  },
  
  changeText({commit},item){
    commit(type.CHANGE_TEXT,item)
  }
}
