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
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DefaultHeader',
});
</script>

<style scoped></style>
