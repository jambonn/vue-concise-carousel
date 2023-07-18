<template>
  <div
      ref="vueConciseCarousel"
      :class="[
      'VueCarousel',
      { 'VueCarousel--reverse': paginationPosition === 'top' },
    ]"
  >
    <div class="VueCarousel-wrapper" ref="vueCarouselWrapper">
      <div
          ref="vueCarouselInner"
          :class="[
          'VueCarousel-inner',
          { 'VueCarousel-inner--center': isCenterModeEnabled },
        ]"
          :style="{
          transform: `translate(${currentOffset}px, 0)`,
          transition: dragging ? 'none' : transitionStyle,
          'ms-flex-preferred-size': `${slideWidth}px`,
          'webkit-flex-basis': `${slideWidth}px`,
          'flex-basis': `${slideWidth}px`,
          visibility: slideWidth ? 'visible' : 'hidden',
          height: `${currentHeight}`,
          'padding-left': `${padding}px`,
          'padding-right': `${padding}px`,
        }"
      >
        <slot></slot>
      </div>
    </div>

    <slot name="navigation" v-if="navigationEnabled && isNavigationRequired">
      <Navigation
          :clickTargetSize="navigationClickTargetSize"
          :nextLabel="navigationNextLabel"
          :prevLabel="navigationPrevLabel"
          :canAdvanceForward="canAdvanceForward"
          :canAdvanceBackward="canAdvanceBackward"
          @navigation-click="handleNavigation"
      />
    </slot>

    <slot name="pagination" v-if="paginationEnabled">
      <Pagination
          :paginationPosition="paginationPosition"
          :scrollPerPage="scrollPerPage"
          :maxPaginationDotCount="maxPaginationDotCount"
          :paginationPadding="paginationPadding"
          :paginationSize="paginationSize"
          :paginationActiveColor="paginationActiveColor"
          :paginationColor="paginationColor"
          :speed="speed"
          :pageCount="pageCount"
          :slideCount="slideCount"
          :currentPage="currentPage"
          @pagination-click="goToPage($event, 'pagination')"
      />
    </slot>
  </div>
</template>

<script>
import {
  ref,
  nextTick,
  provide,
  computed,
  onMounted,
  onBeforeUpdate,
  onBeforeUnmount,
  watch,
} from 'vue';
import debounce from './utils/debounce';
import Navigation from './Navigation.vue';
import Pagination from './Pagination.vue';

const transitionStartNames = {
  onwebkittransitionstart: 'webkitTransitionStart',
  onmoztransitionstart: 'transitionstart',
  onotransitionstart: 'oTransitionStart otransitionstart',
  ontransitionstart: 'transitionstart',
};
const transitionEndNames = {
  onwebkittransitionend: 'webkitTransitionEnd',
  onmoztransitionend: 'transitionend',
  onotransitionend: 'oTransitionEnd otransitionend',
  ontransitionend: 'transitionend',
};
const getTransitionStart = () => {
  for (let name in transitionStartNames) {
    if (name in window) {
      return transitionStartNames[name];
    }
  }
};
const getTransitionEnd = () => {
  for (let name in transitionEndNames) {
    if (name in window) {
      return transitionEndNames[name];
    }
  }
};
export default {
  name: 'Carousel',
  components: {
    Navigation,
    Pagination,
  },
  emits: [
    'mounted',
    'input',
    'page-change',
    'pagination',
    'navigation-click',
    'pagination-click',
    'transition-start',
    'transition-end',
  ],
  props: {
    /**
     *  Adjust the height of the carousel for the current slide
     */
    adjustableHeight: {
      type: Boolean,
      default: false,
    },
    /**
     * Slide transition easing for adjustableHeight
     * Any valid CSS transition easing accepted
     */
    adjustableHeightEasing: {
      type: String,
    },
    /**
     *  Center images when the size is less than the container width
     */
    centerMode: {
      type: Boolean,
      default: false,
    },
    /**
     * Slide transition easing
     * Any valid CSS transition easing accepted
     */
    easing: {
      type: String,
      validator: function (value) {
        return (
            ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out'].indexOf(
                value
            ) !== -1 || value.includes('cubic-bezier')
        );
      },
      default: 'ease',
    },
    /**
     * Flag to make the carousel loop around when it reaches the end
     */
    loop: {
      type: Boolean,
      default: false,
    },
    /**
     * Minimum distance for the swipe to trigger
     * a slide advance
     */
    minSwipeDistance: {
      type: Number,
      default: 8,
    },
    /**
     * Flag to toggle mouse dragging
     */
    mouseDrag: {
      type: Boolean,
      default: true,
    },
    /**
     * Flag to toggle touch dragging
     */
    touchDrag: {
      type: Boolean,
      default: true,
    },
    /**
     * Listen for an external navigation request using this prop.
     */
    navigateTo: {
      type: [Number, Array],
      default: 0,
    },
    /**
     * Amount of padding to apply around the label in pixels
     */
    navigationClickTargetSize: {
      type: Number,
      default: 8,
    },
    /**
     * Flag to render the navigation component
     * (next/prev buttons)
     */
    navigationEnabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Text content of the navigation next button
     */
    navigationNextLabel: {
      type: String,
      default: '&#9654',
    },
    /**
     * Text content of the navigation prev button
     */
    navigationPrevLabel: {
      type: String,
      default: '&#9664',
    },
    /**
     * The fill color of the active pagination dot
     * Any valid CSS color is accepted
     */
    paginationActiveColor: {
      type: String,
      default: '#000000',
    },
    /**
     * The fill color of pagination dots
     * Any valid CSS color is accepted
     */
    paginationColor: {
      type: String,
      default: '#efefef',
    },
    /**
     * Flag to render pagination component
     */
    paginationEnabled: {
      type: Boolean,
      default: true,
    },
    /**
     * The padding inside each pagination dot
     * Pixel values are accepted
     */
    paginationPadding: {
      type: Number,
      default: 10,
    },
    /**
     * Configure the position for the pagination component.
     * The possible values are: 'bottom', 'top', 'bottom-overlay' and 'top-overlay'
     */
    paginationPosition: {
      type: String,
      default: 'bottom',
    },
    /**
     * The size of each pagination dot
     * Pixel values are accepted
     */
    paginationSize: {
      type: Number,
      default: 10,
    },
    /**
     * Maximum number of slides displayed on each page
     */
    perPage: {
      type: Number,
      default: 2,
    },
    /**
     * Configure the number of visible slides with a particular browser width.
     * This will be an array of arrays, ex. [[320, 2], [1199, 4]]
     * Formatted as [x, y] where x=browser width, and y=number of slides displayed.
     * ex. [1199, 4] means if (window <= 1199) then show 4 slides per page
     */
    perPageCustom: {
      type: Array,
    },
    /**
     * Resistance coefficient to dragging on the edge of the carousel
     * This dictates the effect of the pull as you move towards the boundaries
     */
    resistanceCoef: {
      type: Number,
      default: 20,
    },
    /**
     * Scroll per page, not per item
     */
    scrollPerPage: {
      type: Boolean,
      default: true,
    },
    /**
     *  Space padding option adds left and right padding style (in pixels) onto VueCarousel-inner.
     */
    spacePadding: {
      type: Number,
      default: 0,
    },
    /**
     *  Specify by how much should the space padding value be multiplied of, to re-arange the final slide padding.
     */
    spacePaddingMaxOffsetFactor: {
      type: Number,
      default: 0,
    },
    /**
     * Slide transition speed
     * Number of milliseconds accepted
     */
    speed: {
      type: Number,
      default: 500,
    },
    /**
     * Name (tag) of slide component
     * Overwrite when extending slide component
     */
    tagName: {
      type: String,
      default: 'slide',
    },
    /**
     * Support for v-model functionality
     */
    value: {
      type: Number,
    },
    /**
     * Support Max pagination dot amount
     */
    maxPaginationDotCount: {
      type: Number,
      default: -1,
    },
    /**
     * Support right to left
     */
    rtl: {
      type: Boolean,
      default: false,
    },
    /**
     * Flag to enable autoplay
     */
    autoplay: {
      type: Boolean,
      default: false,
    },
    /**
     * Time elapsed before advancing slide
     */
    autoplayTimeout: {
      type: Number,
      default: 2000,
    },
    /**
     * Flag to pause autoplay on hover
     */
    autoplayHoverPause: {
      type: Boolean,
      default: true,
    },
    /**
     * Autoplay direction. User can insert backward to make autoplay move from right to left
     */
    autoplayDirection: {
      type: String,
      default: 'forward',
    },
    /**
     * Flag to navigate slide using keyboard
     */
    keyboard: {
      type: Boolean,
      default: false,
    },
    /**
     * Flag use resize observer event
     */
    resizeObserver: {
      type: Boolean,
      default: false,
    },
    /**
     * Flag to show slide partial view
     */
    partialView: {
      type: Boolean,
      default: false,
    },
    /**
     * Percent width of slide when active partial view
     */
    partialPercent: {
      type: Number,
      default: 0.4,
    },
  },
  setup(props, ctx) {
    const browserWidth = ref(null);
    const carouselWidth = ref(0);
    const currentPage = ref(0);
    const dragging = ref(false);
    const dragMomentum = ref(0);
    const dragOffset = ref(0);
    const dragStartY = ref(0);
    const dragStartX = ref(0);
    const isTouch = typeof window !== 'undefined' && 'ontouchstart' in window;
    const offset = ref(0);
    const refreshRate = ref(16);
    const slideCount = ref(0);
    const transitionstart = ref('transitionstart');
    const transitionend = ref('transitionend');
    const currentHeight = ref('auto');
    const mutationObserver = ref(null);
    const startTime = ref(null);
    const autoplayInterval = ref(null);
    const slotSlides = ref([]);
    const isFinishSlideAdjust = ref(false);
    const isFirstTimeIgnoreOffset = ref(true);
    const resizeObserver = ref(null);

    // Ref template
    const vueConciseCarousel = ref(null);
    const vueCarouselWrapper = ref(null);
    const vueCarouselInner = ref(null);

    /**
     * Given a viewport width, find the number of slides to display
     * @param  {Number} width Current viewport width in pixels
     * @return {Number} Number of slides to display
     */
    const breakpointSlidesPerPage = computed(() => {
      if (!props.perPageCustom) {
        return props.perPage;
      }
      const breakpointArray = props.perPageCustom;
      const width = browserWidth.value;
      const breakpoints = breakpointArray.sort((a, b) =>
          a[0] > b[0] ? -1 : 1
      );
      // Reduce the breakpoints to entries where the width is in range
      // The breakpoint arrays are formatted as [widthToMatch, numberOfSlides]
      const matches = breakpoints.filter(
          (breakpoint) => width >= breakpoint[0]
      );
      // If there is a match, the result should return only
      // the slide count from the first matching breakpoint
      const match = matches[0] && matches[0][1];
      return match || props.perPage;
    });
    /**
     * @return {Boolean} Can the slider move forward?
     */
    const canAdvanceForward = computed(() => {
      return props.loop || offset.value < maxOffset.value;
    });
    /**
     * @return {Boolean} Can the slider move backward?
     */
    const canAdvanceBackward = computed(() => {
      return props.loop || currentPage.value > 0;
    });
    /**
     * Number of slides to display per page in the current context.
     * This is constant unless responsive perPage option is set.
     * @return {Number} The number of slides per page to display
     */
    const currentPerPage = computed(() => {
      return !props.perPageCustom || typeof window === 'undefined'
          ? props.perPage
          : breakpointSlidesPerPage.value;
    });
    /**
     * The horizontal distance the inner wrapper is offset while navigating.
     * @return {Number} Pixel value of offset to apply
     */
    const currentOffset = computed(() => {
      if (isCenterModeEnabled.value) {
        return 0;
      } else if (props.rtl) {
        return offset.value - dragOffset.value;
      } else {
        return (offset.value + dragOffset.value) * -1;
      }
    });
    /**
     * Maximum offset the carousel can slide
     * Considering the spacePadding
     * @return {Number}
     */
    const maxOffset = computed(() => {
      const max = props.partialView
          ? slideWidth.value *
          (slideCount.value - currentPerPage.value - props.partialPercent) -
          props.spacePadding * props.spacePaddingMaxOffsetFactor
          : slideWidth.value * (slideCount.value - currentPerPage.value) -
          props.spacePadding * props.spacePaddingMaxOffsetFactor;
      return Math.max(max, 0);
    });
    /**
     * Calculate the number of pages of slides
     * @return {Number} Number of pages
     */
    const pageCount = computed(() => {
      return getPageCount(
          props.scrollPerPage,
          slideCount.value,
          currentPerPage.value
      );
    });
    /**
     * Calculate the width of each slide
     * @return {Number} Slide width
     */
    const slideWidth = computed(() => {
      const width = carouselWidth.value - props.spacePadding * 2;
      const perPage = props.partialView
          ? currentPerPage.value + props.partialPercent
          : currentPerPage.value;
      return width / perPage;
    });
    /**
     * @return {Boolean} Is navigation required?
     */
    const isNavigationRequired = computed(() => {
      return slideCount.value > currentPerPage.value;
    });
    /**
     * @return {Boolean} Center images when have less than min currentPerPage value
     */
    const isCenterModeEnabled = computed(() => {
      return props.centerMode && !isNavigationRequired.value;
    });
    const transitionStyle = computed(() => {
      const speed = `${props.speed / 1000}s`;
      const transition = `${speed} ${props.easing} transform`;
      if (props.adjustableHeight) {
        return `${transition}, height ${speed} ${
            props.adjustableHeightEasing || props.easing
        }`;
      }
      return transition;
    });
    const padding = computed(() => {
      const padding = props.spacePadding;
      return padding > 0 ? padding : false;
    });

    const getPageCount = (scrollPerPage, count, currentPerPage) => {
      return scrollPerPage
          ? Math.ceil(count / currentPerPage)
          : count - currentPerPage + 1;
    };
    const pauseAutoplay = () => {
      if (autoplayInterval.value) {
        clearInterval(autoplayInterval.value);
        autoplayInterval.value = null;
      }
    };
    const startAutoplay = () => {
      if (props.autoplay) {
        autoplayInterval.value = setInterval(
            autoplayAdvancePage,
            props.autoplayTimeout
        );
      }
    };
    const restartAutoplay = () => {
      pauseAutoplay();
      startAutoplay();
    };
    const autoplayAdvancePage = () => {
      advancePage(props.autoplayDirection);
    };
    /**
     * @return {Number} The index of the next page
     * */
    const getNextPage = () => {
      if (currentPage.value < pageCount.value - 1) {
        return +currentPage.value + 1;
      }
      return props.loop ? 0 : currentPage.value;
    };
    /**
     * @return {Number} The index of the previous page
     * */
    const getPreviousPage = () => {
      if (currentPage.value > 0) {
        return currentPage.value - 1;
      }
      return props.loop ? pageCount.value - 1 : currentPage.value;
    };
    /**
     * Increase/decrease the current page value
     * @param  {String} direction (Optional) The direction to advance
     */
    const advancePage = (direction) => {
      if (direction && direction === 'backward' && canAdvanceBackward.value) {
        goToPage(getPreviousPage(), 'navigation');
      } else if (
          (!direction || (direction && direction !== 'backward')) &&
          canAdvanceForward.value
      ) {
        goToPage(getNextPage(), 'navigation');
      }
    };
    const goToLastSlide = () => {
      // following code is to disable animation
      dragging.value = true;
      // clear dragging after refresh rate
      setTimeout(() => {
        dragging.value = false;
      }, refreshRate.value);
      nextTick(() => {
        goToPage(pageCount.value);
      });
    };
    /**
     * A mutation observer is used to detect changes to the containing node
     * in order to keep the magnet container in sync with the height its reference node.
     */
    const attachMutationObserver = () => {
      const MutationObserver =
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver;
      if (MutationObserver) {
        let config = {
          attributes: true,
          data: true,
        };
        if (props.adjustableHeight) {
          const configAdjustableHeight = {
            childList: true,
            subtree: true,
            characterData: true,
          };
          config = Object.assign({}, config, configAdjustableHeight);
        }
        mutationObserver.value = new MutationObserver(() => {
          nextTick(() => {
            computeCarouselWidth();
            computeCarouselHeight();
          });
        });
        if (vueConciseCarousel.value) {
          const carouselInnerElements = vueConciseCarousel.value.getElementsByClassName(
              'VueCarousel-inner'
          );
          for (let i = 0; i < carouselInnerElements.length; i++) {
            mutationObserver.value.observe(carouselInnerElements[i], config);
          }
        }
      }
    };
    const handleNavigation = (direction) => {
      advancePage(direction);
      pauseAutoplay();
      ctx.emit('navigation-click', direction);
    };
    /**
     * Stop listening to mutation changes
     */
    const detachMutationObserver = () => {
      if (mutationObserver.value) {
        mutationObserver.value.disconnect();
      }
    };
    /**
     * Get the current browser viewport width
     * @return {Number} Browser"s width in pixels
     */
    const getBrowserWidth = () => {
      browserWidth.value = window.innerWidth;
      return browserWidth.value;
    };
    /**
     * Get the width of the carousel DOM element
     * @return {Number} Width of the carousel in pixels
     */
    const getCarouselWidth = () => {
      if (vueConciseCarousel.value) {
        const elements = vueConciseCarousel.value.getElementsByClassName(
            'VueCarousel-inner'
        );
        for (let i = 0; i < elements.length; i++) {
          const width = elements[i].getBoundingClientRect().width || 0;
          if (width > 0) {
            carouselWidth.value = width;
          }
        }
      }
      return carouselWidth.value;
    };
    /**
     * Get the maximum height of the carousel active slides
     * @return {String} The carousel height
     */
    const getCarouselHeight = () => {
      if (!props.adjustableHeight) {
        return 'auto';
      }
      const slideOffset = currentPerPage.value * (+currentPage.value + 1) - 1;
      const maxSlideHeight = [...Array(currentPerPage.value)]
          .map((_, idx) => getSlide(slideOffset + idx))
          .reduce(
              (clientHeight, slide) =>
                  Math.max(clientHeight, (slide && slide.clientHeight) || 0),
              0
          );

      currentHeight.value =
          maxSlideHeight === 0 ? 'auto' : `${maxSlideHeight}px`;
      return currentHeight.value;
    };
    /**
     * Filter slot contents to slide instances and return length
     * @return {Number} The number of slides
     */
    const getSlideCount = () => {
      if (vueConciseCarousel.value) {
        const carouselInnerElements = vueConciseCarousel.value.querySelectorAll(
            '.VueCarousel-slide:not(.VueCarousel-slide-adjust)'
        );
        slotSlides.value = carouselInnerElements;
        slideCount.value = carouselInnerElements.length;
      }
    };
    /**
     * Gets the slide at the specified index
     * @return {Object} The slide at the specified index
     */
    const getSlide = (index) => {
      return slotSlides.value[index];
    };
    /**
     * Set the current page to a specific value
     * This function will only apply the change if the value is within the carousel bounds
     * for carousel scrolling per page.
     * @param  {Number} page The value of the new page number
     * @param  {string|undefined} advanceType An optional value describing the type of page advance
     */
    const goToPage = (page, advanceType) => {
      const pageCount = getPageCount(
          props.scrollPerPage,
          slideCount.value || props.value,
          currentPerPage.value
      );
      if (page >= 0 && page <= pageCount) {
        if (hasVueCarouselSlideAdjust.value && !isFinishSlideAdjust.value) {
          if (isFirstTimeIgnoreOffset.value && page === props.navigateTo) {
            currentPage.value = props.navigateTo;
            isFirstTimeIgnoreOffset.value = false;
            return;
          }

          dragging.value = true;
          handleVueCarouselSlideAdjust();
          // clear dragging after refresh rate
          setTimeout(() => {
            dragging.value = false;
          }, refreshRate.value);
        }

        if (props.partialView) {
          if (page === 0) {
            offset.value = 0;
          } else {
            offset.value = props.scrollPerPage
                ? Math.min(
                    slideWidth.value *
                    (currentPerPage.value * page - props.partialPercent / 2),
                    maxOffset.value
                )
                : slideWidth.value * (1 - props.partialPercent) * page;
          }
        } else {
          offset.value = props.scrollPerPage
              ? Math.min(
                  slideWidth.value * currentPerPage.value * page,
                  maxOffset.value
              )
              : slideWidth.value * page;
        }

        // restart autoplay if specified
        if (props.autoplay && !props.autoplayHoverPause) {
          restartAutoplay();
        }
        // update the current page
        currentPage.value = page;
        dragMomentum.value = 0;

        if (advanceType === 'pagination') {
          pauseAutoplay();
          ctx.emit('pagination-click', page);
        }
      }
    };
    /**
     * Trigger actions when mouse is pressed
     * @param  {Object} e The event object
     */
    /* istanbul ignore next */
    const onStart = (e) => {
      // detect right click
      if (e.button === 2) {
        return;
      }

      document.addEventListener(isTouch ? 'touchend' : 'mouseup', onEnd, true);
      document.addEventListener(
          isTouch ? 'touchmove' : 'mousemove',
          onDrag,
          true
      );

      startTime.value = e.timeStamp;
      dragging.value = true;
      dragStartX.value = isTouch ? e.touches[0].clientX : e.clientX;
      dragStartY.value = isTouch ? e.touches[0].clientY : e.clientY;
    };
    /**
     * Trigger actions when mouse is released
     * @param  {Object} e The event object
     */
    const onEnd = (e) => {
      // restart autoplay if specified
      if (props.autoplay && !props.autoplayHoverPause) {
        restartAutoplay();
      }

      pauseAutoplay();
      // compute the momemtum speed
      const eventPosX = isTouch ? e.changedTouches[0].clientX : e.clientX;
      const deltaX = dragStartX.value - eventPosX;
      dragMomentum.value = deltaX / (e.timeStamp - startTime.value);
      // take care of the minSwipteDistance prop, if not 0 and delta is bigger than delta
      if (
          props.minSwipeDistance !== 0 &&
          Math.abs(deltaX) >= props.minSwipeDistance
      ) {
        const width = props.scrollPerPage
            ? slideWidth.value * currentPerPage.value
            : slideWidth.value;
        dragOffset.value = dragOffset.value + Math.sign(deltaX) * (width / 2);
      }
      if (props.rtl) {
        offset.value -= dragOffset.value;
      } else {
        offset.value += dragOffset.value;
      }
      dragOffset.value = 0;
      dragging.value = false;
      render();
      // clear events listeners
      document.removeEventListener(
          isTouch ? 'touchend' : 'mouseup',
          onEnd,
          true
      );
      document.removeEventListener(
          isTouch ? 'touchmove' : 'mousemove',
          onDrag,
          true
      );
    };
    /**
     * Trigger actions when mouse is pressed and then moved (mouse drag)
     * @param  {Object} e The event object
     */
    const onDrag = (e) => {
      if (
          hasVueCarouselSlideAdjust.value &&
          !isFinishSlideAdjust.value &&
          currentPage.value > 0
      ) {
        handleVueCarouselSlideAdjust();
        return;
      }

      const eventPosX = isTouch ? e.touches[0].clientX : e.clientX;
      const eventPosY = isTouch ? e.touches[0].clientY : e.clientY;
      const newOffsetX = dragStartX.value - eventPosX;
      const newOffsetY = dragStartY.value - eventPosY;
      // if it is a touch device, check if we are below the min swipe threshold
      // (if user scroll the page on the component)
      if (isTouch && Math.abs(newOffsetX) < Math.abs(newOffsetY)) {
        return;
      }

      // e.stopImmediatePropagation()

      dragOffset.value = newOffsetX;
      const nextOffset = offset.value + dragOffset.value;

      if (props.rtl) {
        if (offset.value === 0 && dragOffset.value > 0) {
          dragOffset.value = Math.sqrt(props.resistanceCoef * dragOffset.value);
        } else if (offset.value === maxOffset.value && dragOffset.value < 0) {
          dragOffset.value = -Math.sqrt(
              -props.resistanceCoef * dragOffset.value
          );
        }
      } else {
        if (nextOffset < 0) {
          dragOffset.value = -Math.sqrt(
              -props.resistanceCoef * dragOffset.value
          );
        } else if (nextOffset > maxOffset.value) {
          dragOffset.value = Math.sqrt(props.resistanceCoef * dragOffset.value);
        }
      }
    };
    const onResize = () => {
      computeCarouselWidth();
      computeCarouselHeight();
      dragging.value = true; // force a dragging to disable animation
      render();
      // clear dragging after refresh rate
      setTimeout(() => {
        dragging.value = false;
      }, refreshRate.value);
    };
    const render = () => {
      // add extra slides depending on the momemtum speed
      if (props.rtl) {
        offset.value -=
            Math.max(
                -currentPerPage.value + 1,
                Math.min(Math.round(dragMomentum.value), currentPerPage.value - 1)
            ) * slideWidth.value;
      } else {
        offset.value +=
            Math.max(
                -currentPerPage.value + 1,
                Math.min(Math.round(dragMomentum.value), currentPerPage.value - 1)
            ) * slideWidth.value;
      }
      // & snap the new offset on a slide or page if scrollPerPage
      const width = props.scrollPerPage
          ? slideWidth.value * currentPerPage.value
          : slideWidth.value;
      // lock offset to either the nearest page, or to the last slide
      const lastFullPageOffset =
          width * Math.floor(slideCount.value / (currentPerPage.value - 1));
      const remainderOffset =
          lastFullPageOffset +
          slideWidth.value * (slideCount.value % currentPerPage.value);

      if (offset.value > (lastFullPageOffset + remainderOffset) / 2) {
        offset.value = remainderOffset;
      } else {
        offset.value = width * Math.round(offset.value / width);
      }

      // clamp the offset between 0 -> maxOffset
      offset.value = Math.max(0, Math.min(offset.value, maxOffset.value));
      // update the current page
      currentPage.value = props.scrollPerPage
          ? Math.round(offset.value / slideWidth.value / currentPerPage.value)
          : Math.round(offset.value / slideWidth.value);
    };
    /**
     * Re-compute the width of the carousel and its slides
     */
    const computeCarouselWidth = () => {
      getSlideCount();
      getBrowserWidth();
      getCarouselWidth();
      setCurrentPageInBounds();
    };
    /**
     * Re-compute the height of the carousel and its slides
     */
    const computeCarouselHeight = () => {
      getCarouselHeight();
    };
    /**
     * When the current page exceeds the carousel bounds, reset it to the maximum allowed
     */
    const setCurrentPageInBounds = () => {
      if (!canAdvanceForward.value && props.scrollPerPage) {
        const setPage = pageCount.value - 1;
        currentPage.value = setPage >= 0 ? setPage : 0;
        offset.value = Math.max(0, Math.min(offset.value, maxOffset.value));
      }
    };
    const handleTransitionStart = () => {
      ctx.emit('transition-start');
    };
    const handleTransitionEnd = () => {
      ctx.emit('transition-end');
    };
    const keyboardEventHandler = ({ keyCode }) => {
      const isArrowLeft = keyCode === 37;
      const isArrowRight = keyCode === 39;
      if (canAdvanceBackward.value && isArrowLeft) {
        advancePage('backward');
      }
      if (canAdvanceForward.value && isArrowRight) {
        advancePage('forward');
      }
    };

    const hasVueCarouselSlideAdjust = computed(() => {
      if (vueConciseCarousel.value) {
        return (
            vueConciseCarousel.value.querySelector(
                '.VueCarousel-slide-adjust'
            ) !== null
        );
      }

      return false;
    });

    const handleVueCarouselSlideAdjust = () => {
      if (hasVueCarouselSlideAdjust.value && !isFinishSlideAdjust.value) {
        if (currentPage.value > 0) {
          offset.value = props.scrollPerPage
              ? Math.min(
                  slideWidth.value * currentPerPage.value * currentPage.value,
                  maxOffset.value
              )
              : slideWidth.value * currentPage.value;
        }

        const element = vueConciseCarousel.value.querySelector(
            '.VueCarousel-slide-adjust'
        );
        if (element) {
          element.parentElement.removeChild(element);
        }
        isFinishSlideAdjust.value = true;
      }
    };

    const attachResizeObserver = () => {
      if (props.resizeObserver && vueConciseCarousel.value) {
        resizeObserver.value = new ResizeObserver(() => onResize());
        resizeObserver.value.observe(vueConciseCarousel.value);
      }
    };

    const detachResizeObserver = () => {
      if (resizeObserver.value) {
        resizeObserver.value.disconnect();
      }
    };

    provide('carousel', {
      isTouch,
      dragStartX,
      minSwipeDistance: props.minSwipeDistance,
      adjustableHeight: props.adjustableHeight,
    });

    watch(
        () => props.navigateTo,
        (val) => {
          // checking if val is an array, for arrays typeof returns object
          if (typeof val === 'object') {
            if (val[1] === false) {
              // following code is to disable animation
              dragging.value = true;
              // clear dragging after refresh rate
              setTimeout(() => {
                dragging.value = false;
              }, refreshRate.value);
            }
            nextTick(() => {
              goToPage(val[0]);
            });
          } else {
            nextTick(() => {
              goToPage(val);
            });
          }
        },
        { immediate: true }
    );
    watch(
        () => props.autoplay,
        (val) => {
          if (val) {
            restartAutoplay();
          } else {
            pauseAutoplay();
          }
        }
    );
    watch(currentPage, (val) => {
      // Not emit when refs not binding data
      if (!vueConciseCarousel.value) {
        return;
      }

      ctx.emit('page-change', val);
      ctx.emit('input', val);
      if (currentPage.value !== props.navigateTo) {
        handleVueCarouselSlideAdjust();
      }
    });
    onMounted(() => {
      startAutoplay();

      if (props.autoplayHoverPause) {
        vueConciseCarousel.value.addEventListener('mouseenter', pauseAutoplay);
        vueConciseCarousel.value.addEventListener('mouseleave', startAutoplay);
      }

      if (props.keyboard) {
        window.addEventListener('keydown', keyboardEventHandler);
      }

      window.addEventListener('resize', debounce(onResize, refreshRate.value));

      // setup the start event only if touch device or mousedrag activated
      if ((isTouch && props.touchDrag) || props.mouseDrag) {
        vueCarouselWrapper.value.addEventListener(
            isTouch ? 'touchstart' : 'mousedown',
            onStart,
            { passive: true }
        );
      }

      attachMutationObserver();
      attachResizeObserver();
      computeCarouselWidth();
      computeCarouselHeight();

      transitionstart.value = getTransitionStart();
      vueCarouselInner.value.addEventListener(
          transitionstart.value,
          handleTransitionStart
      );
      transitionend.value = getTransitionEnd();
      vueCarouselInner.value.addEventListener(
          transitionend.value,
          handleTransitionEnd
      );

      ctx.emit('mounted');

      // when autoplay direction is backward start from the last slide
      if (props.autoplayDirection === 'backward') {
        goToLastSlide();
      }
    });
    onBeforeUpdate(() => {
      computeCarouselWidth();
    });
    onBeforeUnmount(() => {
      detachMutationObserver();
      detachResizeObserver();
      if (props.autoplayHoverPause) {
        vueConciseCarousel.value.removeEventListener(
            'mouseenter',
            pauseAutoplay
        );
        vueConciseCarousel.value.removeEventListener(
            'mouseleave',
            startAutoplay
        );
      }

      if (props.keyboard) {
        window.removeEventListener('keydown', keyboardEventHandler);
      }
      window.removeEventListener('resize', getBrowserWidth);
      vueCarouselInner.value.removeEventListener(
          transitionstart.value,
          handleTransitionStart
      );
      vueCarouselInner.value.removeEventListener(
          transitionend.value,
          handleTransitionEnd
      );
      vueCarouselWrapper.value.removeEventListener(
          isTouch ? 'touchstart' : 'mousedown',
          onStart,
          true
      );
    });

    return {
      vueConciseCarousel,
      vueCarouselWrapper,
      vueCarouselInner,
      isCenterModeEnabled,
      offset,
      maxOffset,
      currentOffset,
      dragging,
      transitionStyle,
      slideWidth,
      currentHeight,
      padding,
      isNavigationRequired,
      pageCount,
      slideCount,
      currentPerPage,
      currentPage,
      canAdvanceForward,
      canAdvanceBackward,
      restartAutoplay,
      pauseAutoplay,
      computeCarouselWidth,
      computeCarouselHeight,
      getCarouselHeight,
      handleNavigation,
      goToPage,
    };
  },
};
</script>
