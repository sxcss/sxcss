<template>
  <article id="flexbox-carousel-page">
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
  @include flexbox-carousel__wrapper(
    $carousel-height: 450px,
    $carousel-width: 37.5rem,
    $navigation-enabled: true
  );

  &__viewport {
    @include flexbox-carousel__viewport(
      $viewport-counter: true
    );
  }

  &__slide {
    @include flexbox-carousel__slide(
      $slide-flex: 0 0 100%,
      $slide-width: 100%,
      $slide-counter: true,
      $slide-gap: 16px
    );
    @include flex($place: center);
    font-size: 48px;
    font-weight: 700;
    background-color: grey;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
  }

  &__snapper {
    @include flexbox-carousel__snapper;
  }

  &__pagination {
    @include flexbox-carousel__pagination;
  }
}
</style>