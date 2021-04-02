<template>
  <div class="VueCarousel-navigation">
    <button
      type="button"
      aria-label="Previous page"
      :tabindex="canAdvanceBackward ? 0 : -1"
      :class="[
        'VueCarousel-navigation-button VueCarousel-navigation-prev',
        { 'VueCarousel-navigation--disabled': !canAdvanceBackward },
      ]"
      :style="`padding: ${clickTargetSize}px; margin-right: -${clickTargetSize}px;`"
      @click.prevent="$emit('navigationclick', 'backward')"
      v-html="prevLabel"
    ></button>
    <button
      type="button"
      aria-label="Next page"
      :tabindex="canAdvanceForward ? 0 : -1"
      class="VueCarousel-navigation-button VueCarousel-navigation-next"
      @click.prevent="$emit('navigationclick', 'forward')"
      :class="[
        'VueCarousel-navigation-button VueCarousel-navigation-next',
        { 'VueCarousel-navigation--disabled': !canAdvanceForward },
      ]"
      :style="`padding: ${clickTargetSize}px; margin-left: -${clickTargetSize}px;`"
      v-html="nextLabel"
    ></button>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  emits: ['navigationclick'],
  props: {
    clickTargetSize: {
      type: Number,
      default: 8,
    },
    nextLabel: {
      type: String,
      default: '&#9654',
    },
    prevLabel: {
      type: String,
      default: '&#9664',
    },
    canAdvanceForward: {
      type: Boolean,
      default: false,
    },
    canAdvanceBackward: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.VueCarousel-navigation-button {
  position: absolute;
  top: 50%;
  box-sizing: border-box;
  color: #000;
  text-decoration: none;
  appearance: none;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  outline: none;
}
.VueCarousel-navigation-button:focus {
  outline: none;
}
.VueCarousel-navigation-next {
  right: 0;
  transform: translateY(-50%) translateX(100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.VueCarousel-navigation-prev {
  left: 0;
  transform: translateY(-50%) translateX(-100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.VueCarousel-navigation--disabled {
  opacity: 0.5;
  cursor: default;
}
</style>
