<script setup>
import { computed } from 'vue';
import BaseCard from '../base/Card.vue'

const props = defineProps([
    'text', 'id', 'title', 'date'
])

const newFormatDate = computed(() => {
    const convertDate = new Date(props.date)
    const day = convertDate.getDate()
    const month = convertDate.getMonth()
    const year = convertDate.getFullYear()
    return `${day}.${month+1}.${year}`
})

const detailPath = computed(() => {
    const convertId = props.id
    return `/posts/${convertId}`
})
</script>


<template>
    <a :href="detailPath" class="post-card">
        <BaseCard class="post-card__card">
            <div class="post-card__header">
                <div class="post-card__title h4">
                    {{ title }}
                </div>
                <div class="post-card__date small">
                    {{ newFormatDate }}
                </div>
            </div>
            <div class="post-card__content body">
                {{ text }}
            </div>
        </BaseCard>
    </a>
</template>

<style scoped>

.post-card{
    display: flex;
}
.post-card__card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.post-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post-card__title {
    color: var(--black);
    text-transform:capitalize;
}

.post-card__date,
.post-card__content {
    color: var(--gray);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

