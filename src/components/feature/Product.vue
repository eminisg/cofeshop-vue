<template>
  <div class="row">
    <div class="col-8 p-4">
      <img class="w-100 mb-4" :src="data.left.img" alt="img_not_found">
      <p :innerHTML="data.left.text" class="main-text"></p>
    </div>
    <div class="col-4 p-4 d-flex justify-content-center">
      <div class="item">
        <img width="366" height="366"  :src="data.right.img" class="mb-4" alt="img_not_found">
        <p :innerHTML="data.right.text" class="main-text"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(){
  },
  name: "Product",
  props: ['data']
}
</script>

<style scoped>
</style>
