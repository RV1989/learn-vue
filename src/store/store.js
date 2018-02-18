import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{
        toDos:[
            {text:'todo 1', completed : false},
            {text:'todo 2', completed: true}
          ]
    }
});