<template>
  <article id="flexbox-carousel-page">
    <Carousel
      :paginationItems="carouselItems"
    >
      <CarouselItem
        v-for="(item, index) in carouselItems"
        :key="index"
        :slideIndex="index"
      >
        {{ index + 1 }}
      </CarouselItem>
    </Carousel>
    <Carousel
      :paginationItems="carouselItems"
      carouselKey="slajd"
    >
      <CarouselItem
        v-for="(item, index) in carouselItems"
        :key="index"
        :slideIndex="index"
        carouselKey="slajd"
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
