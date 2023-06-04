<script setup lang="ts">
</script>

<template>
  <div><h1>这是主应用</h1></div>
  <!-- 子应用vue3 -->
  <WujieVue name="vue3" url="http://localhost:5176/" exec="true"></WujieVue>
  <!-- 子应用react -->
  <WujieVue name="react" url="http://localhost:5175/" exec="true"></WujieVue>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
