<template>
  <div
    ref="vueCarouselSlide"
    tabindex="-1"
    role="tabpanel"
    :class="[
      'VueCarousel-slide',
      {
        'VueCarousel-slide-adjustableHeight': isAdjustableHeight,
      },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
import {
  ref,
  inject,
  nextTick,
  computed,
  onMounted,
  onBeforeUnmount,
} from 'vue';

export default {
  name: 'Slide',
  emits: ['slide-click'],
  setup(props, ctx) {
    const carousel = inject('carousel');

    // Ref template
    const vueCarouselSlide = ref(null);

    const isAdjustableHeight = computed(() => {
      return carousel.adjustableHeight;
    });

    const onTouchEnd = (e) => {
      const eventPosX =
        carousel.isTouch && e.changedTouches && e.changedTouches.length > 0
          ? e.changedTouches[0].clientX
          : e.clientX;
      const deltaX = carousel.dragStartX.value - eventPosX;
      if (
        carousel.minSwipeDistance === 0 ||
        Math.abs(deltaX) < carousel.minSwipeDistance
      ) {
        ctx.emit('slide-click', Object.assign({}, e.currentTarget.dataset));
      }
    };

    onMounted(() => {
      nextTick(() => {
        vueCarouselSlide.value.addEventListener('dragstart', (e) =>
          e.preventDefault()
        );
        vueCarouselSlide.value.addEventListener(
          carousel.isTouch ? 'touchend' : 'mouseup',
          onTouchEnd,
          true
        );
      });
    });
    onBeforeUnmount(() => {
      vueCarouselSlide.value.removeEventListener('dragstart', (e) =>
        e.preventDefault()
      );
      vueCarouselSlide.value.removeEventListener(
        carousel.isTouch ? 'touchend' : 'mouseup',
        onTouchEnd,
        true
      );
    });

    return {
      vueCarouselSlide,
      isAdjustableHeight,
    };
  },
};
</script>
