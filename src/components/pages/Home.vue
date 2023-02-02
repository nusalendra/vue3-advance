<template>
  Homepage

  <h2>selamat datang {{ username }}</h2>

  <button @click="increment">Add Like</button>
  <button @click="setUsername('nusalendra')">Change Username</button>
  <button @click="getCredential">Change Profile</button>


  <pre>{{ credential }}</pre>


  <p>total likes : {{ totalLikes }}</p>
  <p>total fake likes : {{ fakeTotalLikes }}</p>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { computed } from "vue";

export default {
  computed: {
    ...mapState(['totalLikes', 'username', 'credential']),
    ...mapGetters(['fakeTotalLikes'])
  },
  methods: {
    ...mapMutations(['increment', 'setUsername', 'setCredential']),
    ...mapActions(['getCredential'])
  }
}
</script>