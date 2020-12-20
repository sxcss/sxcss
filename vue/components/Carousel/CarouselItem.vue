<template>
  <li
    class="carousel__slide"
    :tabindex="tabindex"
    :id="'carousel__slide--' + tabindex"
  >
    <div class="carousel__snapper">
      <a
        :href="`#carousel__slide--${prevSlide(tabindex)}`"
        class="carousel__prev"
      />
      <a
        :href="`#carousel__slide--${nextSlide(tabindex)}`"
        class="carousel__next"
      />
    </div>
    <slot />
  </li>
</template>

<script>
import carouselNavigation from './carouselNavigation'

export default {
  mixins: [
    carouselNavigation
  ],
  props: {
    tabindex: {
      type: String | Number,
      required: true
    }
  }
}
</script>
