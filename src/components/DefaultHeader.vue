<template>
    <div class="navbar bg-neutral text-neutral-content">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">TSV Uesen</a>
        </div>
        <div class="flex-none">
            <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src="../../../logo.png" class="scale-75" alt="..." />
                    </div>
                </label>
                <!--                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                            <span class="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>-->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

const userStore = storeToRefs(useUserStore());
const roleString = userStore.isCoach.value ? 'Trainer' : 'Spieler';
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DefaultHeader',
});
</script>

<style scoped></style>
