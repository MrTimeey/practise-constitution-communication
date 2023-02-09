<script setup lang="ts">
import StarRating from '@/components/StarRating.vue';
</script>

<template>
    <div class="p-4 flex flex-col text-gray-200">
        <p class="text-3xl mt-5 font-extrabold">Event-Name</p>
        <p class="mb-12 text-l font-bold text-gray-400">am 01.01.2024</p>
        <p class="mb-4 text-l">Wie ist deine körperliche Verfassung?</p>
        <star-rating class="mb-8" />
        <p class="mb-4 text-l">Wie ist deine geistige Verfassung?</p>
        <star-rating class="mb-8" />
        <p class="text-l mb-4">Anmerkungen</p>
        <textarea class="textarea textarea-bordered bg-gray-100 text-gray-700" placeholder="Anmerkungen"></textarea>
        <div class="card-actions justify-end mt-8">
            <button class="btn bg-red-600 hover:bg-red-400">Abschicken</button>
        </div>
    </div>
</template>

<style scoped></style>
