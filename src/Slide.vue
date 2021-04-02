<template>
  <div
    ref="vueCarouselSlide"
    class="VueCarousel-slide"
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
import { ref, inject, computed, onMounted, onBeforeUnmount } from 'vue'
import { isServer } from './utils'

export default {
  name: 'Slide',
  emits: ['slide-click'],
  setup(props, ctx) {
    const carousel = inject('carousel')

    // Ref template
    const vueCarouselSlide = ref(null)

    const isAdjustableHeight = computed(() => {
      return carousel.adjustableHeight
    })

    const onTouchEnd = e => {
      const eventPosX =
        carousel.isTouch && e.changedTouches && e.changedTouches.length > 0
          ? e.changedTouches[0].clientX
          : e.clientX
      const deltaX = carousel.dragStartX.value - eventPosX
      if (
        carousel.minSwipeDistance === 0 ||
        Math.abs(deltaX) < carousel.minSwipeDistance
      ) {
        ctx.emit('slide-click', Object.assign({}, e.currentTarget.dataset))
      }
    }

    onMounted(() => {
      if (!isServer) {
        vueCarouselSlide.value.addEventListener('dragstart', e =>
          e.preventDefault(),
        )
        vueCarouselSlide.value.addEventListener(
          carousel.isTouch ? 'touchend' : 'mouseup',
          onTouchEnd,
        )
      }
    })
    onBeforeUnmount(() => {
      if (!isServer) {
        vueCarouselSlide.value.removeEventListener('dragstart', e =>
          e.preventDefault(),
        )
        vueCarouselSlide.value.removeEventListener(
          carousel.isTouch ? 'touchend' : 'mouseup',
          onTouchEnd,
        )
      }
    })

    return {
      vueCarouselSlide,
      isAdjustableHeight,
    }
  },
}
</script>

<style>
.VueCarousel-slide {
  flex-basis: inherit;
  flex-grow: 0;
  flex-shrink: 0;
  user-select: none;
  backface-visibility: unset;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
}
.VueCarousel-slide-adjustableHeight {
  display: table;
  flex-basis: auto;
  width: 100%;
}
</style>
