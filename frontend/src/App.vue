<script setup lang="ts">
import NavigationMenu from './components/NavigationMenu.vue';

</script>

<template>
  <div class="app">
    <navigation-menu />
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
</style>
