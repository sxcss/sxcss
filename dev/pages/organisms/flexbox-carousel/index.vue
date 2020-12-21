<template>
  <article 
    id="flexbox-carousel-page"
    class="page"
  >
    <h1 class="page__title">Flexbox Carousel</h1>
    <section
      class="page__inner"
    >
      <Carousel
        :paginationItems="carouselItems"
        carouselKey="slajder_a"
      >
        <CarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index"
          carouselKey="slajder_a"
        >
          {{ index + 1 }}
        </CarouselItem>
      </Carousel>
      <br />
      <br />
      <Carousel
        :paginationItems="carouselItems"
        carouselKey="slajder_b"
      >
        <CarouselItem
          v-for="(item, index) in carouselItems"
          :key="index"
          :slideIndex="index"
          carouselKey="slajder_b"
        >
          {{ index + 1 }}
        </CarouselItem>
      </Carousel>
    </section>
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
  @include flexbox-carousel(
    $navigation-enabled: true,
    
    $wrapper-height: 450px,
    $wrapper-width: 37.5rem,
    $viewport-classname: '.carousel__viewport',
    $viewport-counter: true,

    $slide-classname: '.carousel__slide',
    $slide-flex: 0 0 100%,
    $slide-width: 100%,
    $slide-counter: true,
    
    $snapper-classname: '.carousel__snapper',
    $pagination-classname: '.carousel__pagination',
    $pagination-enabled: true,
    
    $gap: 16px
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