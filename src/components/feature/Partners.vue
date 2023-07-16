<template>
  <div class="py-4">
    <carousel
        :wrap-around="true"
        :items-to-show="4"
        :loop="true"
        :autoplayLoop="true"
        :autoplay="3000"
        :autoplayHoverPause="true"
        :perPage="1"
        :navigationEnabled="false"
    >
      <slide v-for="slide in slides" :key="slide">
        <a :href="slide.url">
          <img :src="slide.imgUrl" alt="slide">
        </a>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: "Partners",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data(){
    return {
      slides:[
        {imgUrl:'src/assets/images/slides/partners/aka.png',url:'#'},
        {imgUrl:'src/assets/images/slides/partners/helios_opers.png',url:'#'},
        {imgUrl:'src/assets/images/slides/partners/hilton.png',url:'#'},
        {imgUrl:'src/assets/images/slides/partners/hotel_resorts.png',url:'#'},
        {imgUrl:'src/assets/images/slides/partners/marigny.png',url:'#'},
      ]
    }
  }
}
</script>

<style scoped>
.carousel__pagination {
  display: none;
}
</style>
