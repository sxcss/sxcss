<template>
  <article
    id="overflow-carousel-page"
    class="page"
  >
    <h1 class="page__title">Overflow Carousel</h1>
    <section
      class="page__inner"
    >
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
        {{ index + 1 }}
      </CarouselItem>
    </Carousel>
    </section>
  </article>
</template>

<script>
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
    $overflow-overlay-background: linear-gradient(to left, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.25), transparent),
    $overflow-overlay-width: 20px
  );

  &__slide {
    @include flex($place: center);
    background-color: grey;

    &-content {
      font: 700 48px/48px -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      color: white;
    }
  }
}
</style>