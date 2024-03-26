<template>
  <div
    v-show="pageCount > 1"
    :class="[
      'VueCarousel-pagination',
      {
        [`VueCarousel-pagination--${paginationPositionModifierName}`]: paginationPositionModifierName,
      },
    ]"
    :style="containerStyle"
  >
    <div
      class="VueCarousel-dot-container"
      role="tablist"
      :style="dotContainerStyle"
    >
      <button
        v-for="(page, index) in paginationCount"
        :key="`${page}_${index}`"
        aria-hidden="false"
        role="tab"
        :aria-selected="isCurrentDot(index) ? 'true' : 'false'"
        :class="[
          'VueCarousel-dot',
          { 'VueCarousel-dot--active': isCurrentDot(index) },
        ]"
        @click.prevent="goToPage(index)"
        :style="dotStyle(index)"
      ></button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'Pagination',
  emits: ['pagination-click'],
  props: {
    paginationPosition: {
      type: String,
      default: 'bottom',
    },
    scrollPerPage: {
      type: Boolean,
      default: true,
    },
    maxPaginationDotCount: {
      type: Number,
      default: -1,
    },
    paginationPadding: {
      type: Number,
      default: 10,
    },
    paginationSize: {
      type: Number,
      default: 10,
    },
    paginationActiveColor: {
      type: String,
      default: '#000000',
    },
    paginationColor: {
      type: String,
      default: '#efefef',
    },
    speed: {
      type: Number,
      default: 500,
    },
    pageCount: {
      type: Number,
      default: 0,
    },
    slideCount: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 0,
    },
  },
  setup(props, ctx) {
    const paginationPositionModifierName = computed(() => {
      const paginationPosition = props.paginationPosition;
      // guard to add only required class modifiers
      if (paginationPosition.indexOf('overlay') < 0) {
        return '';
      }
      return paginationPosition;
    });
    const paginationPropertyBasedOnPosition = computed(() => {
      return props.paginationPosition.indexOf('top') >= 0 ? 'bottom' : 'top';
    });
    const paginationCount = computed(() => {
      return props.scrollPerPage ? props.pageCount : props.slideCount || 0;
    });
    const containerWidth = computed(() => {
      const doublePadding = props.paginationPadding * 2;
      return props.maxPaginationDotCount * (props.paginationSize + doublePadding);
    });
    const containerStyle = computed(() => {
      return {
        width: `${containerWidth.value}px`,
      };
    });
    const dotContainerStyle = computed(() => {
      if (props.maxPaginationDotCount === -1)
        return {
          'margin-top': `${props.paginationPadding * 2}px`,
        };
      return {
        'margin-top': `${props.paginationPadding * 2}px`,
        overflow: 'hidden',
        width: `${containerWidth.value}px`,
        margin: '0 auto',
        'white-space': 'nowrap',
      };
    });

    /**
     * Change page by index
     * @param {number} index
     * return {void}
     */
    const goToPage = (index) => {
      /**
       * @event paginationclick
       * @type {number}
       */
      ctx.emit('pagination-click', index);
    };
    /**
     * Check on current dot
     * @param {number} index - dot index
     * @return {boolean}
     */
    const isCurrentDot = (index) => {
      return index === props.currentPage;
    };
    /**
     * Control dots appear and disappear
     * @param {number} index - dot index
     * @return {Object} - dot(buttn) style
     */
    const dotStyle = (index) => {
      const basicBtnStyle = {};
      basicBtnStyle[`margin-${paginationPropertyBasedOnPosition.value}`] = `${
        props.paginationPadding * 2
      }px`;
      Object.assign(basicBtnStyle, {
        padding: `${props.paginationPadding}px`,
        width: `${props.paginationSize}px`,
        height: `${props.paginationSize}px`,
        'background-color': `${
          isCurrentDot(index)
            ? props.paginationActiveColor
            : props.paginationColor
        }`,
      });
      if (props.maxPaginationDotCount === -1) return basicBtnStyle;
      const eachDotsWidth = props.paginationSize + props.paginationPadding * 2;
      const maxReverse = props.pageCount - props.maxPaginationDotCount;
      const translateAmount =
        props.currentPage > maxReverse
          ? maxReverse
          : props.currentPage <= props.maxPaginationDotCount / 2
          ? 0
          : props.currentPage - Math.ceil(props.maxPaginationDotCount / 2) + 1;
      const transformWidth = 0 - eachDotsWidth * translateAmount;
      return Object.assign(basicBtnStyle, {
        '-webkit-transform': `translate3d(${transformWidth}px,0,0)`,
        transform: `translate3d(${transformWidth}px,0,0)`,
        '-webkit-transition': `-webkit-transform ${props.speed / 1000}s`,
        transition: `transform ${props.speed / 1000}s`,
      });
    };

    return {
      paginationPositionModifierName,
      paginationCount,
      dotContainerStyle,
      containerStyle,
      goToPage,
      isCurrentDot,
      dotStyle,
    };
  },
};
</script>
