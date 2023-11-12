<template>
    <div class="base-card">
        <slot />
    </div>
</template>

<style scoped>
.base-card {
    display: flex;
    padding: 24px;
    flex-direction: column;
    gap: 16px;
    border-radius: 8px;
    background: var(--white);
}

</style>

