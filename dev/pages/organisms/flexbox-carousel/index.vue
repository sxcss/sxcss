<template>
  <article id="flexbox-carousel-page">
    <Carousel
      :paginationItems="carouselItems"
    >
      <CarouselItem
        v-for="(item, index) in carouselItems"
        :key="index"
        :tabindex="index"
      >
        {{ index + 1 }}
      </CarouselItem>
    </Carousel>
  </article>
</template>

<script>
import Carousel from '../../../../vue/components/Carousel/Carousel.vue'
import CarouselItem from '../../../../vue/components/Carousel/CarouselItem.vue'

export default {
  data () {
    return {
      carouselItems: [
        {}, {}, {}, {},
        {}, {}, {}, {},
        {}, {}, {}, {},
        {}, {}, {}, {},
      ]
    }
  },
  components: {
    Carousel,
    CarouselItem
  }
}
</script>
