<template>
   <h2>{{ data.title }}</h2>
   <div>{{ data.body }}</div>

   <button @click="addLike">Like</button>
</template>

<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex"

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
    store.commit('post/increment');
}
</script>