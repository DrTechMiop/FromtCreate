<script setup>
defineProps([
  'text', 'link'
])
</script>


<template>
  <a :href="link" class="base-link link">
    {{ text }}
  </a>
</template>

<style scoped>
.base-link {
  color: var(--blue-700);
}

</style>

