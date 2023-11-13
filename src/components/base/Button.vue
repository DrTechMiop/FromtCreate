<script setup>
defineProps([
  'text'
])
</script>


<template>
    <button class="base-button body-medium">
        {{ text }}
    </button>
</template>

<style scoped>
    .base-button{
        height: 40px;
        border-radius: 8px;
        background: var(--blue-700);
        color: var(--white);
    }

</style>

