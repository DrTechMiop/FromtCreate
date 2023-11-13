<script setup>
defineProps([
  'text', 'link'
])
</script>


<template>
  <RouterLink :to="link" class="base-link link">
    {{ text }}
  </RouterLink>
</template>

<style scoped>
.base-link {
  color: var(--blue-700);
}

</style>

