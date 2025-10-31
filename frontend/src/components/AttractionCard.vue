<script setup lang="ts">
import type { Attraction } from '../types';

const props = defineProps({
    pTimeToWait: {
        type: Number,
    },
    pAttraction : {
        type: Object as () => Attraction,
        required: true,
    },
})

</script>

<template>
    <div class="attraction-card" :data-id="pAttraction.id">
        <h2>{{ pAttraction.name }}</h2>
        <img :src="pAttraction.imageUrl" :alt="pAttraction.name" />
        <p>{{ pAttraction.description }}</p>
        <p class="wait"><span class="circle live"></span> Time to wait : {{ pTimeToWait }}min</p>
    </div>
</template>

<style scoped>
.attraction-card {
    background-color: #fff;
    width: 350px;
    border-radius: 8px;
  box-shadow: 0 1px 4px 2px rgba(0, 0, 0, 0.25);
}

.attraction-card h2 {
    font-size: larger;
}

.attraction-card img {
    height: 250px;
    width: auto;
    
}

p.wait {
  position: relative;
  font-weight: bold;
  text-align: right;
  padding: 0 8px;
}

.circle {
  top: 50%;
  transform: translateY(-50%);
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 2px;
  background-color: gray;

}

.circle.live {
  background-color: red;
    animation: blink 1s infinite;
    transition: 0.3s;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
</style>