<template>
  <main class="container">
    <section class="border-bottom">
      <MainBanner :img-url="'src/assets/images/banners/home_main_banner.png'"></MainBanner>
    </section>
    <section class="px-4 border-bottom">
      <Partners></Partners>
    </section>
    <section class="px-4 border-bottom">
      <Statistics></Statistics>
    </section>
    <section class="px-4 border-bottom">
      <Product :data="product"></Product>
    </section>
    <section>

    </section>
  </main>
</template>

<script>
import MainBanner from "../components/ui/MainBanner.vue";
import Partners from "../components/feature/Partners.vue";
import Statistics from "../components/feature/Statistics.vue";
import Product from "../components/feature/Product.vue";

export default {
  name: "Home",
  data() {
    return {
      product: {
        left: {
          img: 'src/assets/images/product_left.png',
          text: 'This is the text, a very long paragraph,This is the text, a very long paragraphThis is the text, a very long paragraphThis is the text, a very long paragraphThis is the text, a very long paragraph',
        },
        right: {
          img: 'src/assets/images/product_right.png',
          text: 'Paragraph,This is the text, a very long paragraphThis is the text, a very long paragraphT',
        },

      }
    }
  },
  components: {
    Product,
    Statistics,
    Partners,
    MainBanner,
  }
}
</script>

<style scoped>
</style>
