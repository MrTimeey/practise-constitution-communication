<script setup lang="ts">
import { RouterView } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import DefaultFooter from '@/components/DefaultFooter.vue';
import DefaultHeader from '@/components/DefaultHeader.vue';
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
