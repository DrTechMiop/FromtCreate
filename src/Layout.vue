<script setup>
import BaseLink from './components/base/Link.vue'
</script>

<template>
    <header class="header">
        <div class="h4 header__logo">
            LOGO
        </div>

        <nav class="header__nav">
            <BaseLink text="Главная" link="/" />
            <BaseLink text="Каталог" link="/catalog" />
            <BaseLink text="Создать пост" link="/create-post" />
        </nav>
    </header>

    <main class="container">
        <RouterView></RouterView>
    </main>
</template>


<style scoped>
.header {
    border-bottom: 1px solid var(--gray-200);
    background: var(--gray-50);
    display: flex;
    height: 60px;
    padding: 0px 20px;
    align-items: center;
    gap: 16px;
}

.header__logo {
    color: var(--black)
}

.header__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex: 1 0 0;
}
</style>
