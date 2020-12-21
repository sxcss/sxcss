<template>
  <div
    class="carousel"
    :paginationEnabled="paginationEnabled"
  >
    <div class="carousel__viewport">
      <slot />
    </div>
    <aside
      v-if="paginationEnabled"
      class="carousel__pagination"
    >
      <ol class="carousel__pagination-list">
        <li
          v-for="(item, index) in paginationItems"
          :key="index"
          class="carousel__pagination-item">
          <a
            :href="`#${carouselKey}--${index}`"
            class="carousel__pagination-button"
          >Go to slide {{ index }}</a>
        </li>
      </ol>
    </aside>
  </div>
</template>

<script>
import carouselNavigation from './carouselNavigation'

export default {
  mixins: [
    carouselNavigation
  ],
  props: { 
    paginationItems: {
      type: Array,
      required: true
    },
    paginationEnabled: {
      type: Boolean,
      default: true
    },
    carouselKey: {
      type: String,
      required: true,
      default: 'slide'
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
@import '../../../reset.scss';
@import '../../../src/functions/index.scss';
@import '../../../src/variables/index.scss';
@import '../../../src/mixins/index.scss';

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