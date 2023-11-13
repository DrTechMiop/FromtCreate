<script setup>
import PostCard from '../components/post/Card.vue'
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
  <section class="posts-board">
    <PostCard
      v-for="(item) in items"
      :key="item.id"
      :text="item.text" 
      :id="item.id"
      :title="item.title"
      :date="item.date"
    />
  </section>
</template>


<style scoped>

.posts-board{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>
