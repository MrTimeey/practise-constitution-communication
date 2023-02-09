<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import StarRating from '@/components/StarRating.vue';

const userStore = storeToRefs(useUserStore());
</script>

<template>
    <div class="p-4 flex flex-col text-gray-300">
        <p class="text-3xl mt-5 font-extrabold">Event-Name</p>
        <p class="mb-12 text-l">am 01.01.2024</p>
        <p class="mb-4 text-l">Wie ist deine körperliche Verfassung?</p>
        <star-rating class="mb-8" />
        <p class="mb-4 text-l">Wie ist deine geistige Verfassung?</p>
        <star-rating class="mb-8" />
        <p class="text-l mb-4">Anmerkungen</p>
        <textarea class="textarea textarea-bordered" placeholder="Anmerkungen"></textarea>
        <div class="card-actions justify-end mt-8">
            <button class="btn btn-secondary">Abschicken</button>
        </div>
    </div>
</template>
