<template>
   <h2>{{ title }}</h2>
   <div>{{ body }}</div>

   <button @click="addLike">Like</button>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex"

export default {
    async setup() {
        const data = reactive({
            title: '',
            body: ''
        });

        const router = useRoute();
        const store = useStore();
        const id = router.params.id;

        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        const { title, body } = await result.json();

        data.title = title;
        data.body = body;

        const addLike = () => {
            store.commit('increment');
        }

        return {
            ...toRefs(data),
            addLike
        }
    }
}
</script>