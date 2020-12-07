<template>
  <div class="home">
    <section>
      <h2>Flexbox Carousel</h2>
      <div class="flexbox-carousel">
        <div
          class="flexbox-carousel__item"
          v-for="(item, index) in flexboxCarouselContent1"
          :key="index"
        >
          <img src="" width="240px" height="240px" style="background-color: grey;" />
        </div>
      </div>
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
  }
}
</script>

<style lang="scss">
@import '../../reset.scss';
@import '../../src/functions/index.scss';
@import '../../src/variables/index.scss';
@import '../../src/mixins/index.scss';

// .flexbox-carousel {
//   @include flexbox-carousel(
//     $gap: 16px
//   );
// }

</style>