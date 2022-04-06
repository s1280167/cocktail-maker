import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({ // vuexで定義するdata
    state: {
        cocktailStore: [],
    },
    getters: {}, // vuexで定義するcomputed
    mutations: { // stateの値をいじるときはここに全て記述する
        cocktailResister(state, newCocktail) {
            if(newCocktail.cocktailName != "") {
                // store.jsの配列にオブジェクトを追加
                state.cocktailStore.push(newCocktail);
                console.log(state.cocktailStore);
            }
        },
        removeCocktail(state, selected) { // カクテルの削除
            state.cocktailStore.splice(selected, 1);
        },
    },
    actions: {}, 
    plugins: [createPersistedState({
        key: 'myApp',
        path: ['cocktailStore'],
        storage: window.localStorage,
    })],
});

