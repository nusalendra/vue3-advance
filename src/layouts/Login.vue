<template>
    <div>
        Username <input v-model="username" type="text"/>
        Password <input />
    </div>

    <button @click="login">Login</button>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";

export default {
    setup() {
        const router = useRouter();
        const store = useStore();
        const username = ref('');

        const login = () => {
            localStorage.setItem("authenticated", true);
            store.commit('setUsername', username.value);
            store.dispatch('getCredential');

            router.push({ name: 'Home' });
        }
        return {
            login,
            username
        }
    }
}
</script>