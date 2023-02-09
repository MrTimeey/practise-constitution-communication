<template>
    <div class="layout bg-gray-900">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="main">
            <slot name="main"></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DefaultLayout',
});
</script>

<style scoped>
.layout {
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: auto 1fr;
    grid-column-gap: 0;
    grid-row-gap: 0;

    grid-template-areas:
        'header header header header header header header header header'
        'main main main main main main main main main'
        'footer footer footer footer footer footer footer footer footer';
}

.header {
    grid-area: header;
}

.main {
    grid-area: main;
}

.footer {
    grid-area: footer;
}
</style>
