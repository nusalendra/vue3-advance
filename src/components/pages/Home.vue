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

export default {
  computed: {
    ...mapState({
      totalLikes : state => state.post.totalLikes, 
      username: state => state.user.username, 
      credential: state => state.user.credential
  }),
    ...mapGetters({
      fakeTotalLikes: 'post/fakeTotalLikes'
    })
  },
  methods: {
    ...mapMutations({
      increment: 'post/increment', 
      setUsername: 'user/setUsername', 
      setCredential: 'user/setCredential'
    }),
    ...mapActions({
      getCredential: 'user/getCredential'
    })
  }
}
</script>