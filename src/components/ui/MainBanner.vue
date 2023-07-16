<template>
  <figure class="my">
    <img :src="imgUrl" alt="banner">
  </figure>
</template>

<script>
export default {
  props:['imgUrl'],
  name: "MainBanner"
}
</script>

<style scoped>
.my {
  margin: 6.875rem 0;
}

img{
  width: 100%;
}
</style>
