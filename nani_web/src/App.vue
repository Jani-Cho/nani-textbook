<script setup>
import sideBar from './components/sideBar.vue'
</script>

<template>
  <sideBar />

  <router-view></router-view>
</template>

<style lang="scss">
body {
  background: white;
}
</style>