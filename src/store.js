import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        something: ['something'],
        pageSize:12,
        isLoading:false
    },
    mutations:{
        change(state,info){
            state.something = [info]
        }
        ,loading(state,v){
            state.isLoading = v; 
        }
    },
    actions:{
        asyncChange(context,info){
            setTimeout( ()=>{
                context.commit("change",info); 
            },1000);
        }
    }
})
