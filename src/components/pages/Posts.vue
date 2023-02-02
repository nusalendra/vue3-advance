<template>
    <Suspense>
        <template #default>
            <PostList text="test defineProps" @submit="handleSubmit"/>
        </template>
        <template #fallback>
            Loading ...
        </template>
    </Suspense>
</template>

<script setup>
import PostList from "../PostList.vue";

const handleSubmit = (value) => {
    console.log(value);
}
</script>