<template>
    <Suspense>
        <template #default>
            <PostDetail />
        </template>
        <template #fallback>
            Loading ...
        </template>
    </Suspense>
</template>

<script setup>
import PostDetail from "../PostDetail.vue";
</script>