<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const userStore = storeToRefs(useUserStore());
</script>

<template>
    <div class="p-4 flex flex-col text-gray-300">
        <h1 class="mb-8 text-3xl">Hallo {{ userStore.username.value }}!</h1>
        <h3 class="py-4 text-l">Deine nächsten Termine:</h3>
        <p>Text</p>
    </div>
</template>
