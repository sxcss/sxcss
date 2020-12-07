<template>
  <div class="home">
    <section class="flexbox-carousel">
      <div class="flexbox-carousel__viewport">
        <li
          class="flexbox-carousel__slide"
          v-for="(item, index) in flexboxCarouselContent1"
          :key="index"
          tabindex="0"
          :id="'carousel__slide--' + index"
        >
          <div class="flexbox-carousel__snapper">
            <a
              :href="'#carousel__slide--' + prevSlide(index)"
              class="flexbox-carousel__prev"
            />
            <a
              :href="'#carousel__slide--' + nextSlide(index)"
              class="flexbox-carousel__next"
            />
          </div>
          <!-- <img src="" width="100%" height="100%" style="background-color: grey;" /> -->
          {{ index }}
        </li>
      </div>
      <aside class="flexbox-carousel__pagination">
        <ol class="flexbox-carousel__pagination-list">
          <li
            v-for="(item, index) in flexboxCarouselContent1"
            :key="index"
            class="flexbox-carousel__pagination-item">
            <a
              :href="'#carousel__slide--' + index"
              class="flexbox-carousel__pagination-button"
            >Go to slide {{ index }}</a>
          </li>
        </ol>
      </aside>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flexboxCarouselContent1: [
        {}, {}, {}, {},
        {}, {}, {}, {},
        {}, {}, {}, {},
        {}, {}, {}, {},
      ]
    }
  },
  methods: {
    prevSlide (index) {
      return index - 1
    },
    nextSlide (index) {
      return index + 1
    }
  }
}
</script>

<style lang="scss">
@import '../../reset.scss';
@import '../../src/functions/index.scss';
@import '../../src/variables/index.scss';
@import '../../src/mixins/index.scss';

.home {
  @include flex($place: center);
  @include size(100%);
}

// .flexbox-carousel {
//   @include flexbox-carousel(
//     $gap: 16px
//   );
// }

.flexbox-carousel {
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
    font-size: 32px;
  }

  &__snapper {
    @include flexbox-carousel__snapper;
  }

  &__pagination {
    @include flexbox-carousel__pagination;
  }
}

</style>