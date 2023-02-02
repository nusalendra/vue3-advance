import { createStore } from "vuex";


export const store = createStore({
    state() {
        return {
            totalLikes: 0,
            username: '',
            credential: {}
        }
    },
    getters: {
        fakeTotalLikes(state) {
            return state.totalLikes + 100;
        }
    },
    mutations: {
        increment(state) {
            state.totalLikes++;
        },
        setUsername(state, value) {
            state.username = value;
        },
        setCredential(state, payload) {
            state.credential = payload;
        }
    },
    actions: {
        async getCredential({ commit }) {
            const response = await fetch(`https://randomuser.me/api`);
            const { results } = await response.json();

            commit('setCredential', results[0]);
        }
    }
})