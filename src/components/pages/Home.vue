<template>
  Homepage

  <h2>selamat datang {{ username }}</h2>

  <pre>{{ credential }}</pre>

  <p>total likes : {{ likes }}</p>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";

export default {
  setup() {
    const store = useStore();
    const username = ref('')

    const likes = computed(() => {
      return store.state.totalLikes
    });

    const credential = computed(() => {
      return store.state.credential
    })

    onMounted(() => {
      username.value = store.state.username
    });

    return {
      likes,
      username,
      credential
    }
  }
}
</script>