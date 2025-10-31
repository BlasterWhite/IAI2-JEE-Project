<script setup lang="ts">
import { ref,computed } from 'vue';
import type { Attraction } from '../types';
import AttractionCard from '../components/AttractionCard.vue';

const attractions = ref<Attraction[]>([
    {
        id: '1',
        name: 'Roller Coaster',
        location: 'Zone A',
        description: 'A thrilling roller coaster ride.',
        imageUrl: '/placeholder.png',
    },
    {
        id: '2',
        name: 'Ferris Wheel',
        location: 'Zone B',
        description: 'A relaxing ride with a great view.',
        imageUrl: '/placeholder.png',
    }
]);

const searchQuery = ref('');

const filteredAttractions = computed(() => {
    if (!searchQuery.value) {
        return attractions.value;
    }
    return attractions.value.filter(attraction =>
        attraction.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

</script>

<template>
    <div class="show-list-view">
        TODO : Add sorting options ? <br />
        TODO : Add modal for attraction details ? <br />
        <div class="menu">
            <h3>Menu</h3>
            <input type="text" v-model="searchQuery" placeholder="Search attractions..." />
        </div>
        <div class="list">
            <AttractionCard v-for="attraction in filteredAttractions" :key="attraction.id" :pAttraction="attraction" :pTimeToWait="Math.floor(Math.random() * 100)" />
        </div>
    </div>
</template>


<style scoped>
.show-list-view {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.menu {
    display: flex;
    justify-content: center;
    gap: 16px;
}

.list {
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
}
</style>