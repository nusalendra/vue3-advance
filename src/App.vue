<template>
  <div v-if="error">{{ error }}</div>
  <Suspense v-else>
    <template #default>
      <User />
    </template>
    <template #fallback>
      <span>Loading ...</span>
    </template>
  </Suspense>
</template>

<script>
import { ref, onErrorCaptured } from "vue";
import User from "./components/User.vue";

export default {
  components: { User },
  setup() {
    const error = ref(null);

    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });

    return {
      error
    }
  }
}
</script>