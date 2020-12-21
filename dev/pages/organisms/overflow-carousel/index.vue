<template>
  <article id="overflow-carousel-page">
    <Carousel
      :paginationEnabled="false"
      :paginationItems="carouselItems"
      carouselKey="slajder_a"
    >
      <CarouselItem
        v-for="(item, index) in carouselItems"
        :key="index"
        :slideIndex="index"
        carouselKey="slajder_a"
      >
        <div class="carousel__slide-content">
          {{ index + 1 }}
        </div>
      </CarouselItem>
    </Carousel>
  </article>
</template>

<script>
// import Carousel  from '@naked-ui/vue/src/components/Carousel/Carousel.vue'
// import CarouselItem  from '@naked-ui/vue/src/components/Carousel/CarouselItem.vue'

import { Carousel, CarouselItem } from '@naked-ui/vue'

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

<style lang="scss">
@import '../../../../reset.scss';
@import '../../../../src/functions/index.scss';
@import '../../../../src/variables/index.scss';
@import '../../../../src/mixins/index.scss';

.carousel {

  @include overflow-carousel(
    $viewport-classname: '.carousel__viewport',
    $viewport-width: 100%,
    $gap: 20px,
    $slide-classname: '.carousel__slide',
    $slide-width: 300px,
    $slide-height: 300px,
    $overflow-overlay-color: #fff,
    $overflow-overlay-width: 120px
  );

  &__slide {
    @include flex($place: center);
    font-size: 48px;
    font-weight: 700;
    background-color: grey;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
  }
}
</style>