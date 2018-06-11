/**
 * Created by cone41 on 2018/6/11.
 */
import * as type from './mutation_type';
export default {
  [type.ADD_LIST](state, item) {
    let obj = {
      status: false,
      text  : item,
      id    : null
    };
    state.list.push(obj);
    state.list.forEach((item, index) => {
      item.id = index;
    });
  },
  
  [type.UPDATE_ITEM](state, data){
    console.log(data);
    state.list.forEach((item) => {
      if (item.id == data.item.id) {
        item.status = false;
        if (!data.cancel){
          item.text = data.text;
        }
      }
    });
    
  },
  
  [type.CHANGE_TEXT](state, item){
    state.list.forEach((i) => {
      i.status = false;
    });
    item.status = true;
  }
};
