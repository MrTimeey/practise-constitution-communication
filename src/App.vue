<script setup lang="ts">
import { RouterView } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import DefaultFooter from '@/components/DefaultFooter.vue';
import DefaultHeader from '@/components/DefaultHeader.vue';

const userStore = storeToRefs(useUserStore());
const roleString = userStore.isCoach.value ? 'Trainer' : 'Spieler';
</script>

<template>
    <default-layout>
        <template #header>
            <default-header />
        </template>

        <template #main>
            <RouterView />
        </template>
        <template #footer> <default-footer /></template>
    </default-layout>
</template>

<style scoped></style>
