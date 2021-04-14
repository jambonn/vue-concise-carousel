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
      @click.prevent="$emit('navigation-click', 'backward')"
      v-html="prevLabel"
    ></button>
    <button
      type="button"
      aria-label="Next page"
      :tabindex="canAdvanceForward ? 0 : -1"
      class="VueCarousel-navigation-button VueCarousel-navigation-next"
      @click.prevent="$emit('navigation-click', 'forward')"
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
  emits: ['navigation-click'],
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
