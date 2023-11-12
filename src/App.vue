<script setup>
import BaseLink from './components/base/Link.vue'
import BaseCard from './components/base/Card.vue'
import PostCard from './components/post/Card.vue'
import {ref} from 'vue'

const items = ref([])

const fetchData = async () => {
  try {
    const result = await fetch('http://192.168.5.9:3000/api/posts')

    if (result.ok) {
      const json = await result.json()
      items.value = json.data
    } else {
      console.log('error');
    }
  } catch (error) {
    console.log('error');
  }
}

fetchData()
</script>

<template>
  <header class="header"> 
    <div class="h4 header__logo">
      LOGO
    </div>

    <nav class="header__nav">
      <BaseLink text="Главная" link="/index.html" />
      <BaseLink text="Каталог" link="/index.html" />
      <BaseLink text="Создать пост" link="/index.html" />
    </nav>
  </header>
  

  <main class="container posts-board">
    <PostCard
      v-for="(item) in items"
      :key="item.id"
      :text="item.text" 
      :id="item.id"
      :title="item.title"
      :date="item.date"
    />
    
    
  </main>

</template>




<style scoped>


 .header{
  border-bottom: 1px solid var(--gray-200);
  background: var(--gray-50);
  display: flex;
  height: 60px;
  padding: 0px 20px;
  align-items: center;
  gap: 16px;
 }

 .header__logo{
  color: var(--black)
 }

 .header__nav{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
}

.posts-board{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>
