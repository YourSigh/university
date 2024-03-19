<template>
    {{ count }}
    <main />
</template>

<script setup lang="ts">
import main from './components/main.vue';
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped lang="scss">

</style>