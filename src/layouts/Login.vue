<template>
    <div>
        Username <input />
        Password <input />
    </div>

    <button @click="login">Login</button>
</template>

<script>
import { useRouter } from "vue-router";

export default {
    setup() {
        const router = useRouter();
        const login = () => {
            router.push({ name: 'Home' })
        }
        return {
            login
        }
    }
}
</script>