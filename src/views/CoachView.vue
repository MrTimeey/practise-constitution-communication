<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const userStore = storeToRefs(useUserStore());
</script>

<template>
    <main>
        <h1 class="text-3xl font-bold">Hallo {{ userStore.username }}!</h1>
        <br />
        <p>Trainer-Ansicht</p>
    </main>
</template>
