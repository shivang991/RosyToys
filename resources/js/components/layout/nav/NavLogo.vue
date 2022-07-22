<template>
  <!-- <p class="logo mb-0">CÓ</p> -->
  <img :src="logoURL" class="logo">
</template>

<script setup>
const logoURL = window.asset('images/logo.png')
</script>

<style lang="scss" scoped>
.logo {
  width: 240px;
  @include media-query(xl){
    width: 300px;
  }
}
</style>
