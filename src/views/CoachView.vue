<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const userStore = storeToRefs(useUserStore());
</script>

<template>
    <h3 class="text-xl text-red-600">Trainer-Ansicht</h3>
    <div class="flex flex-wrap justify-center">
        <img src="../../../logo.png" class="p-1 max-w-sm" alt="..." />
    </div>
    <div class="p-4 min-h-screen flex flex-col text-gray-300">
        <h1 class="mb-8 text-3xl">Hallo {{ userStore.username.value }}!</h1>
        <h3 class="py-4 text-l">Aktuelle Daten:</h3>
        <p>Text</p>
    </div>
</template>
