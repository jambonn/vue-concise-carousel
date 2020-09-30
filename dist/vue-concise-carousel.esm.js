const autoplay = {
  props: {
    /**
     * Flag to enable autoplay
     */
    autoplay: {
      type: Boolean,
      default: false
    },

    /**
     * Time elapsed before advancing slide
     */
    autoplayTimeout: {
      type: Number,
      default: 2000
    },

    /**
     * Flag to pause autoplay on hover
     */
    autoplayHoverPause: {
      type: Boolean,
      default: true
    },

    /**
     * Autoplay direction. User can insert backward to make autoplay move from right to left
     */
    autoplayDirection: {
      type: String,
      default: 'forward'
    }
  },

  data() {
    return {
      autoplayInterval: null
    };
  },

  destroyed() {
    if (!this.$isServer) {
      this.$el.removeEventListener('mouseenter', this.pauseAutoplay);
      this.$el.removeEventListener('mouseleave', this.startAutoplay);
    }
  },

  methods: {
    pauseAutoplay() {
      if (this.autoplayInterval) {
        this.autoplayInterval = clearInterval(this.autoplayInterval);
      }
    },

    startAutoplay() {
      if (this.autoplay) {
        this.autoplayInterval = setInterval(this.autoplayAdvancePage, this.autoplayTimeout);
      }
    },

    restartAutoplay() {
      this.pauseAutoplay();
      this.startAutoplay();
    },

    autoplayAdvancePage() {
      this.advancePage(this.autoplayDirection);
    }

  },

  mounted() {
    if (!this.$isServer && this.autoplayHoverPause) {
      this.$el.addEventListener('mouseenter', this.pauseAutoplay);
      this.$el.addEventListener('mouseleave', this.startAutoplay);
    }

    this.startAutoplay();
  }

};

/*
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 */
const debounce = (func, wait, immediate) => {
  let timeout;
  return () => {
    const context = null;

    const later = () => {
      timeout = null;

      if (!immediate) {
        func.apply(context);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context);
    }
  };
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'navigation',
  inject: ['carousel'],
  props: {
    /**
     * Amount of padding to apply around the label in pixels
     */
    clickTargetSize: {
      type: Number,
      default: 8
    },

    /**
     * Text content of the navigation next button
     */
    nextLabel: {
      type: String,
      default: '&#9654'
    },

    /**
     * Text content of the navigation prev button
     */
    prevLabel: {
      type: String,
      default: '&#9664'
    }
  },
  computed: {
    /**
     * @return {Boolean} Can the slider move forward?
     */
    canAdvanceForward() {
      return this.carousel.canAdvanceForward || false;
    },

    /**
     * @return {Boolean} Can the slider move backward?
     */
    canAdvanceBackward() {
      return this.carousel.canAdvanceBackward || false;
    }

  },
  methods: {
    /**
     * Trigger page change on +/- 1 depending on the direction
     * @param {"backward"} [direction]
     * @return {void}
     */
    triggerPageAdvance(direction) {
      /**
       * @event paginationclick
       * @type {string}
       */
      this.$emit('navigationclick', direction);
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "VueCarousel-navigation"
  }, [_c('button', {
    staticClass: "VueCarousel-navigation-button VueCarousel-navigation-prev",
    class: {
      'VueCarousel-navigation--disabled': !_vm.canAdvanceBackward
    },
    style: "padding: " + _vm.clickTargetSize + "px; margin-right: -" + _vm.clickTargetSize + "px;",
    attrs: {
      "type": "button",
      "aria-label": "Previous page",
      "tabindex": _vm.canAdvanceBackward ? 0 : -1
    },
    domProps: {
      "innerHTML": _vm._s(_vm.prevLabel)
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.triggerPageAdvance('backward');
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "VueCarousel-navigation-button VueCarousel-navigation-next",
    class: {
      'VueCarousel-navigation--disabled': !_vm.canAdvanceForward
    },
    style: "padding: " + _vm.clickTargetSize + "px; margin-left: -" + _vm.clickTargetSize + "px;",
    attrs: {
      "type": "button",
      "aria-label": "Next page",
      "tabindex": _vm.canAdvanceForward ? 0 : -1
    },
    domProps: {
      "innerHTML": _vm._s(_vm.nextLabel)
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.triggerPageAdvance('forward');
      }
    }
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = "data-v-13a4bfcd";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
  name: 'pagination',
  inject: ['carousel'],
  computed: {
    paginationPositionModifierName() {
      const {
        paginationPosition
      } = this.carousel; // guard to add only required class modifiers

      if (paginationPosition.indexOf('overlay') < 0) return;
      return paginationPosition;
    },

    paginationPropertyBasedOnPosition() {
      return this.carousel.paginationPosition.indexOf('top') >= 0 ? 'bottom' : 'top';
    },

    paginationCount() {
      return this.carousel && this.carousel.scrollPerPage ? this.carousel.pageCount : this.carousel.slideCount || 0;
    },

    dotContainerStyle() {
      const {
        carousel
      } = this;
      if (carousel.maxPaginationDotCount === -1) return {
        'margin-top': `${carousel.paginationPadding * 2}px`
      };
      const doublePadding = carousel.paginationPadding * 2;
      const containerWidth = carousel.maxPaginationDotCount * (carousel.paginationSize + doublePadding);
      return {
        'margin-top': `${carousel.paginationPadding * 2}px`,
        overflow: 'hidden',
        width: `${containerWidth}px`,
        margin: '0 auto',
        'white-space': 'nowrap'
      };
    }

  },
  methods: {
    /**
     * Change page by index
     * @param {number} index
     * return {void}
     */
    goToPage(index) {
      /**
       * @event paginationclick
       * @type {number}
       */
      this.$emit('paginationclick', index);
    },

    /**
     * Check on current dot
     * @param {number} index - dot index
     * @return {boolean}
     */
    isCurrentDot(index) {
      return index === this.carousel.currentPage;
    },

    /**
     * Generate dot title
     * @param {number} index - dot index
     * @return {string}
     */
    getDotTitle(index) {
      return this.carousel.$children[index].title ? this.carousel.$children[index].title : `Item ${index}`;
    },

    /**
     * Control dots appear and disappear
     * @param {number} index - dot index
     * @return {Object} - dot(buttn) style
     */
    dotStyle(index) {
      const {
        carousel
      } = this;
      const basicBtnStyle = {};
      basicBtnStyle[`margin-${this.paginationPropertyBasedOnPosition}`] = `${carousel.paginationPadding * 2}px`;
      Object.assign(basicBtnStyle, {
        padding: `${carousel.paginationPadding}px`,
        width: `${carousel.paginationSize}px`,
        height: `${carousel.paginationSize}px`,
        'background-color': `${this.isCurrentDot(index) ? carousel.paginationActiveColor : carousel.paginationColor}`
      });
      if (carousel.maxPaginationDotCount === -1) return basicBtnStyle;
      const eachDotsWidth = carousel.paginationSize + carousel.paginationPadding * 2;
      const maxReverse = carousel.pageCount - carousel.maxPaginationDotCount;
      const translateAmount = carousel.currentPage > maxReverse ? maxReverse : carousel.currentPage <= carousel.maxPaginationDotCount / 2 ? 0 : carousel.currentPage - Math.ceil(carousel.maxPaginationDotCount / 2) + 1;
      const transformWidth = 0 - eachDotsWidth * translateAmount;
      return Object.assign(basicBtnStyle, {
        '-webkit-transform': `translate3d(${transformWidth}px,0,0)`,
        transform: `translate3d(${transformWidth}px,0,0)`,
        '-webkit-transition': `-webkit-transform ${carousel.speed / 1000}s`,
        transition: `transform ${carousel.speed / 1000}s`
      });
    }

  }
};

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.carousel.pageCount > 1,
      expression: "carousel.pageCount > 1"
    }],
    staticClass: "VueCarousel-pagination",
    class: (_obj = {}, _obj["VueCarousel-pagination--" + _vm.paginationPositionModifierName] = _vm.paginationPositionModifierName, _obj)
  }, [_c('div', {
    staticClass: "VueCarousel-dot-container",
    style: _vm.dotContainerStyle,
    attrs: {
      "role": "tablist"
    }
  }, _vm._l(_vm.paginationCount, function (page, index) {
    return _c('button', {
      key: page + "_" + index,
      staticClass: "VueCarousel-dot",
      class: {
        'VueCarousel-dot--active': _vm.isCurrentDot(index)
      },
      style: _vm.dotStyle(index),
      attrs: {
        "aria-hidden": "false",
        "role": "tab",
        "title": _vm.getDotTitle(index),
        "value": _vm.getDotTitle(index),
        "aria-label": _vm.getDotTitle(index),
        "aria-selected": _vm.isCurrentDot(index) ? 'true' : 'false'
      },
      on: {
        "click": function ($event) {
          return _vm.goToPage(index);
        }
      }
    });
  }), 0)]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = "data-v-4f60ad12";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

//
const transitionStartNames = {
  onwebkittransitionstart: 'webkitTransitionStart',
  onmoztransitionstart: 'transitionstart',
  onotransitionstart: 'oTransitionStart otransitionstart',
  ontransitionstart: 'transitionstart'
};
const transitionEndNames = {
  onwebkittransitionend: 'webkitTransitionEnd',
  onmoztransitionend: 'transitionend',
  onotransitionend: 'oTransitionEnd otransitionend',
  ontransitionend: 'transitionend'
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

var script$2 = {
  name: 'carousel',

  beforeUpdate() {
    this.computeCarouselWidth();
  },

  components: {
    Navigation: __vue_component__,
    Pagination: __vue_component__$1
  },

  data() {
    return {
      browserWidth: null,
      carouselWidth: 0,
      currentPage: 0,
      dragging: false,
      dragMomentum: 0,
      dragOffset: 0,
      dragStartY: 0,
      dragStartX: 0,
      isTouch: typeof window !== 'undefined' && 'ontouchstart' in window,
      offset: 0,
      refreshRate: 16,
      slideCount: 0,
      transitionstart: 'transitionstart',
      transitionend: 'transitionend',
      currentHeight: 'auto'
    };
  },

  mixins: [autoplay],

  // use `provide` to avoid `Slide` being nested with other components
  provide() {
    return {
      carousel: this
    };
  },

  props: {
    /**
     *  Adjust the height of the carousel for the current slide
     */
    adjustableHeight: {
      type: Boolean,
      default: false
    },

    /**
     * Slide transition easing for adjustableHeight
     * Any valid CSS transition easing accepted
     */
    adjustableHeightEasing: {
      type: String
    },

    /**
     *  Center images when the size is less than the container width
     */
    centerMode: {
      type: Boolean,
      default: false
    },

    /**
     * Slide transition easing
     * Any valid CSS transition easing accepted
     */
    easing: {
      type: String,
      validator: function (value) {
        return ['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out'].indexOf(value) !== -1 || value.includes('cubic-bezier');
      },
      default: 'ease'
    },

    /**
     * Flag to make the carousel loop around when it reaches the end
     */
    loop: {
      type: Boolean,
      default: false
    },

    /**
     * Minimum distance for the swipe to trigger
     * a slide advance
     */
    minSwipeDistance: {
      type: Number,
      default: 8
    },

    /**
     * Flag to toggle mouse dragging
     */
    mouseDrag: {
      type: Boolean,
      default: true
    },

    /**
     * Flag to toggle touch dragging
     */
    touchDrag: {
      type: Boolean,
      default: true
    },

    /**
     * Listen for an external navigation request using this prop.
     */
    navigateTo: {
      type: [Number, Array],
      default: 0
    },

    /**
     * Amount of padding to apply around the label in pixels
     */
    navigationClickTargetSize: {
      type: Number,
      default: 8
    },

    /**
     * Flag to render the navigation component
     * (next/prev buttons)
     */
    navigationEnabled: {
      type: Boolean,
      default: false
    },

    /**
     * Text content of the navigation next button
     */
    navigationNextLabel: {
      type: String,
      default: '&#9654'
    },

    /**
     * Text content of the navigation prev button
     */
    navigationPrevLabel: {
      type: String,
      default: '&#9664'
    },

    /**
     * The fill color of the active pagination dot
     * Any valid CSS color is accepted
     */
    paginationActiveColor: {
      type: String,
      default: '#000000'
    },

    /**
     * The fill color of pagination dots
     * Any valid CSS color is accepted
     */
    paginationColor: {
      type: String,
      default: '#efefef'
    },

    /**
     * Flag to render pagination component
     */
    paginationEnabled: {
      type: Boolean,
      default: true
    },

    /**
     * The padding inside each pagination dot
     * Pixel values are accepted
     */
    paginationPadding: {
      type: Number,
      default: 10
    },

    /**
     * Configure the position for the pagination component.
     * The possible values are: 'bottom', 'top', 'bottom-overlay' and 'top-overlay'
     */
    paginationPosition: {
      type: String,
      default: 'bottom'
    },

    /**
     * The size of each pagination dot
     * Pixel values are accepted
     */
    paginationSize: {
      type: Number,
      default: 10
    },

    /**
     * Maximum number of slides displayed on each page
     */
    perPage: {
      type: Number,
      default: 2
    },

    /**
     * Configure the number of visible slides with a particular browser width.
     * This will be an array of arrays, ex. [[320, 2], [1199, 4]]
     * Formatted as [x, y] where x=browser width, and y=number of slides displayed.
     * ex. [1199, 4] means if (window <= 1199) then show 4 slides per page
     */
    perPageCustom: {
      type: Array
    },

    /**
     * Resistance coefficient to dragging on the edge of the carousel
     * This dictates the effect of the pull as you move towards the boundaries
     */
    resistanceCoef: {
      type: Number,
      default: 20
    },

    /**
     * Scroll per page, not per item
     */
    scrollPerPage: {
      type: Boolean,
      default: true
    },

    /**
     *  Space padding option adds left and right padding style (in pixels) onto VueCarousel-inner.
     */
    spacePadding: {
      type: Number,
      default: 0
    },

    /**
     *  Specify by how much should the space padding value be multiplied of, to re-arange the final slide padding.
     */
    spacePaddingMaxOffsetFactor: {
      type: Number,
      default: 0
    },

    /**
     * Slide transition speed
     * Number of milliseconds accepted
     */
    speed: {
      type: Number,
      default: 500
    },

    /**
     * Name (tag) of slide component
     * Overwrite when extending slide component
     */
    tagName: {
      type: String,
      default: 'slide'
    },

    /**
     * Support for v-model functionality
     */
    value: {
      type: Number
    },

    /**
     * Support Max pagination dot amount
     */
    maxPaginationDotCount: {
      type: Number,
      default: -1
    },

    /**
     * Support right to left
     */
    rtl: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(val) {
      if (val !== this.currentPage) {
        this.goToPage(val);
        this.render();
      }
    },

    navigateTo: {
      immediate: true,

      handler(val) {
        // checking if val is an array, for arrays typeof returns object
        if (typeof val === 'object') {
          if (val[1] == false) {
            // following code is to disable animation
            this.dragging = true; // clear dragging after refresh rate

            setTimeout(() => {
              this.dragging = false;
            }, this.refreshRate);
          }

          this.$nextTick(() => {
            this.goToPage(val[0]);
          });
        } else {
          this.$nextTick(() => {
            this.goToPage(val);
          });
        }
      }

    },

    currentPage(val) {
      this.$emit('pageChange', val);
      this.$emit('page-change', val);
      this.$emit('input', val);
    },

    autoplay(val) {
      if (val === false) {
        this.pauseAutoplay();
      } else {
        this.restartAutoplay();
      }
    }

  },
  computed: {
    /**
     * Given a viewport width, find the number of slides to display
     * @param  {Number} width Current viewport width in pixels
     * @return {Number} Number of slides to display
     */
    breakpointSlidesPerPage() {
      if (!this.perPageCustom) {
        return this.perPage;
      }

      const breakpointArray = this.perPageCustom;
      const width = this.browserWidth;
      const breakpoints = breakpointArray.sort((a, b) => a[0] > b[0] ? -1 : 1); // Reduce the breakpoints to entries where the width is in range
      // The breakpoint arrays are formatted as [widthToMatch, numberOfSlides]

      const matches = breakpoints.filter(breakpoint => width >= breakpoint[0]); // If there is a match, the result should return only
      // the slide count from the first matching breakpoint

      const match = matches[0] && matches[0][1];
      return match || this.perPage;
    },

    /**
     * @return {Boolean} Can the slider move forward?
     */
    canAdvanceForward() {
      return this.loop || this.offset < this.maxOffset;
    },

    /**
     * @return {Boolean} Can the slider move backward?
     */
    canAdvanceBackward() {
      return this.loop || this.currentPage > 0;
    },

    /**
     * Number of slides to display per page in the current context.
     * This is constant unless responsive perPage option is set.
     * @return {Number} The number of slides per page to display
     */
    currentPerPage() {
      return !this.perPageCustom || this.$isServer ? this.perPage : this.breakpointSlidesPerPage;
    },

    /**
     * The horizontal distance the inner wrapper is offset while navigating.
     * @return {Number} Pixel value of offset to apply
     */
    currentOffset() {
      if (this.isCenterModeEnabled) {
        return 0;
      } else if (this.rtl) {
        return (this.offset - this.dragOffset) * 1;
      } else {
        return (this.offset + this.dragOffset) * -1;
      }
    },

    isHidden() {
      return this.carouselWidth <= 0;
    },

    /**
     * Maximum offset the carousel can slide
     * Considering the spacePadding
     * @return {Number}
     */
    maxOffset() {
      return Math.max(this.slideWidth * (this.slideCount - this.currentPerPage) - this.spacePadding * this.spacePaddingMaxOffsetFactor, 0);
    },

    /**
     * Calculate the number of pages of slides
     * @return {Number} Number of pages
     */
    pageCount() {
      return this.scrollPerPage ? Math.ceil(this.slideCount / this.currentPerPage) : this.slideCount - this.currentPerPage + 1;
    },

    /**
     * Calculate the width of each slide
     * @return {Number} Slide width
     */
    slideWidth() {
      const width = this.carouselWidth - this.spacePadding * 2;
      const perPage = this.currentPerPage;
      return width / perPage;
    },

    /**
     * @return {Boolean} Is navigation required?
     */
    isNavigationRequired() {
      return this.slideCount > this.currentPerPage;
    },

    /**
     * @return {Boolean} Center images when have less than min currentPerPage value
     */
    isCenterModeEnabled() {
      return this.centerMode && !this.isNavigationRequired;
    },

    transitionStyle() {
      const speed = `${this.speed / 1000}s`;
      const transtion = `${speed} ${this.easing} transform`;

      if (this.adjustableHeight) {
        return `${transtion}, height ${speed} ${this.adjustableHeightEasing || this.easing}`;
      }

      return transtion;
    },

    padding() {
      const padding = this.spacePadding;
      return padding > 0 ? padding : false;
    }

  },
  methods: {
    /**
     * @return {Number} The index of the next page
     * */
    getNextPage() {
      if (this.currentPage < this.pageCount - 1) {
        return +this.currentPage + 1;
      }

      return this.loop ? 0 : this.currentPage;
    },

    /**
     * @return {Number} The index of the previous page
     * */
    getPreviousPage() {
      if (this.currentPage > 0) {
        return this.currentPage - 1;
      }

      return this.loop ? this.pageCount - 1 : this.currentPage;
    },

    /**
     * Increase/decrease the current page value
     * @param  {String} direction (Optional) The direction to advance
     */
    advancePage(direction) {
      if (direction && direction === 'backward' && this.canAdvanceBackward) {
        this.goToPage(this.getPreviousPage(), 'navigation');
      } else if ((!direction || direction && direction !== 'backward') && this.canAdvanceForward) {
        this.goToPage(this.getNextPage(), 'navigation');
      }
    },

    goToLastSlide() {
      // following code is to disable animation
      this.dragging = true; // clear dragging after refresh rate

      setTimeout(() => {
        this.dragging = false;
      }, this.refreshRate);
      this.$nextTick(() => {
        this.goToPage(this.pageCount);
      });
    },

    /**
     * A mutation observer is used to detect changes to the containing node
     * in order to keep the magnet container in sync with the height its reference node.
     */
    attachMutationObserver() {
      const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

      if (MutationObserver) {
        let config = {
          attributes: true,
          data: true
        };

        if (this.adjustableHeight) {
          const configAdjustableHeight = {
            childList: true,
            subtree: true,
            characterData: true
          };
          config = Object.assign({}, config, configAdjustableHeight);
        }

        this.mutationObserver = new MutationObserver(() => {
          this.$nextTick(() => {
            this.computeCarouselWidth();
            this.computeCarouselHeight();
          });
        });

        if (this.$parent.$el) {
          let carouselInnerElements = this.$el.getElementsByClassName('VueCarousel-inner');

          for (let i = 0; i < carouselInnerElements.length; i++) {
            this.mutationObserver.observe(carouselInnerElements[i], config);
          }
        }
      }
    },

    handleNavigation(direction) {
      this.advancePage(direction);
      this.pauseAutoplay();
      this.$emit('navigation-click', direction);
    },

    /**
     * Stop listening to mutation changes
     */
    detachMutationObserver() {
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }
    },

    /**
     * Get the current browser viewport width
     * @return {Number} Browser"s width in pixels
     */
    getBrowserWidth() {
      this.browserWidth = window.innerWidth;
      return this.browserWidth;
    },

    /**
     * Get the width of the carousel DOM element
     * @return {Number} Width of the carousel in pixels
     */
    getCarouselWidth() {
      let carouselInnerElements = this.$el.getElementsByClassName('VueCarousel-inner');

      for (let i = 0; i < carouselInnerElements.length; i++) {
        if (carouselInnerElements[i].clientWidth > 0) {
          this.carouselWidth = carouselInnerElements[i].clientWidth || 0;
        }
      }

      return this.carouselWidth;
    },

    /**
     * Get the maximum height of the carousel active slides
     * @return {String} The carousel height
     */
    getCarouselHeight() {
      if (!this.adjustableHeight) {
        return 'auto';
      }

      const slideOffset = this.currentPerPage * (+this.currentPage + 1) - 1;
      const maxSlideHeight = [...Array(this.currentPerPage)].map((_, idx) => this.getSlide(slideOffset + idx)).reduce((clientHeight, slide) => Math.max(clientHeight, slide && slide.$el.clientHeight || 0), 0);
      this.currentHeight = maxSlideHeight === 0 ? 'auto' : `${maxSlideHeight}px`;
      return this.currentHeight;
    },

    /**
     * Filter slot contents to slide instances and return length
     * @return {Number} The number of slides
     */
    getSlideCount() {
      this.slideCount = this.$slots && this.$slots.default && this.$slots.default.filter(slot => slot.tag && slot.tag.match(`^vue-component-\\d+-${this.tagName}$`) !== null).length || 0;
    },

    /**
     * Gets the slide at the specified index
     * @return {Object} The slide at the specified index
     */
    getSlide(index) {
      const slides = this.$children.filter(child => child.$vnode.tag.match(`^vue-component-\\d+-${this.tagName}$`) !== null);
      return slides[index];
    },

    /**
     * Set the current page to a specific value
     * This function will only apply the change if the value is within the carousel bounds
     * for carousel scrolling per page.
     * @param  {Number} page The value of the new page number
     * @param  {string|undefined} advanceType An optional value describing the type of page advance
     */
    goToPage(page, advanceType) {
      if (page >= 0 && page <= this.pageCount) {
        this.offset = this.scrollPerPage ? Math.min(this.slideWidth * this.currentPerPage * page, this.maxOffset) : this.slideWidth * page; // restart autoplay if specified

        if (this.autoplay && !this.autoplayHoverPause) {
          this.restartAutoplay();
        } // update the current page


        this.currentPage = page;

        if (advanceType === 'pagination') {
          this.pauseAutoplay();
          this.$emit('pagination-click', page);
        }
      }
    },

    /**
     * Trigger actions when mouse is pressed
     * @param  {Object} e The event object
     */

    /* istanbul ignore next */
    onStart(e) {
      // alert("start");
      // detect right click
      if (e.button == 2) {
        return;
      }

      document.addEventListener(this.isTouch ? 'touchend' : 'mouseup', this.onEnd, true);
      document.addEventListener(this.isTouch ? 'touchmove' : 'mousemove', this.onDrag, true);
      this.startTime = e.timeStamp;
      this.dragging = true;
      this.dragStartX = this.isTouch ? e.touches[0].clientX : e.clientX;
      this.dragStartY = this.isTouch ? e.touches[0].clientY : e.clientY;
    },

    /**
     * Trigger actions when mouse is released
     * @param  {Object} e The event object
     */
    onEnd(e) {
      // restart autoplay if specified
      if (this.autoplay && !this.autoplayHoverPause) {
        this.restartAutoplay();
      }

      this.pauseAutoplay(); // compute the momemtum speed

      const eventPosX = this.isTouch ? e.changedTouches[0].clientX : e.clientX;
      const deltaX = this.dragStartX - eventPosX;
      this.dragMomentum = deltaX / (e.timeStamp - this.startTime); // take care of the minSwipteDistance prop, if not 0 and delta is bigger than delta

      if (this.minSwipeDistance !== 0 && Math.abs(deltaX) >= this.minSwipeDistance) {
        const width = this.scrollPerPage ? this.slideWidth * this.currentPerPage : this.slideWidth;
        this.dragOffset = this.dragOffset + Math.sign(deltaX) * (width / 2);
      }

      if (this.rtl) {
        this.offset -= this.dragOffset;
      } else {
        this.offset += this.dragOffset;
      }

      this.dragOffset = 0;
      this.dragging = false;
      this.render(); // clear events listeners

      document.removeEventListener(this.isTouch ? 'touchend' : 'mouseup', this.onEnd, true);
      document.removeEventListener(this.isTouch ? 'touchmove' : 'mousemove', this.onDrag, true);
    },

    /**
     * Trigger actions when mouse is pressed and then moved (mouse drag)
     * @param  {Object} e The event object
     */
    onDrag(e) {
      const eventPosX = this.isTouch ? e.touches[0].clientX : e.clientX;
      const eventPosY = this.isTouch ? e.touches[0].clientY : e.clientY;
      const newOffsetX = this.dragStartX - eventPosX;
      const newOffsetY = this.dragStartY - eventPosY; // if it is a touch device, check if we are below the min swipe threshold
      // (if user scroll the page on the component)

      if (this.isTouch && Math.abs(newOffsetX) < Math.abs(newOffsetY)) {
        return;
      }

      e.stopImmediatePropagation();
      this.dragOffset = newOffsetX;
      const nextOffset = this.offset + this.dragOffset;

      if (this.rtl) {
        if (this.offset == 0 && this.dragOffset > 0) {
          this.dragOffset = Math.sqrt(this.resistanceCoef * this.dragOffset);
        } else if (this.offset == this.maxOffset && this.dragOffset < 0) {
          this.dragOffset = -Math.sqrt(-this.resistanceCoef * this.dragOffset);
        }
      } else {
        if (nextOffset < 0) {
          this.dragOffset = -Math.sqrt(-this.resistanceCoef * this.dragOffset);
        } else if (nextOffset > this.maxOffset) {
          this.dragOffset = Math.sqrt(this.resistanceCoef * this.dragOffset);
        }
      }
    },

    onResize() {
      this.computeCarouselWidth();
      this.computeCarouselHeight();
      this.dragging = true; // force a dragging to disable animation

      this.render(); // clear dragging after refresh rate

      setTimeout(() => {
        this.dragging = false;
      }, this.refreshRate);
    },

    render() {
      // add extra slides depending on the momemtum speed
      if (this.rtl) {
        this.offset -= Math.max(-this.currentPerPage + 1, Math.min(Math.round(this.dragMomentum), this.currentPerPage - 1)) * this.slideWidth;
      } else {
        this.offset += Math.max(-this.currentPerPage + 1, Math.min(Math.round(this.dragMomentum), this.currentPerPage - 1)) * this.slideWidth;
      } // & snap the new offset on a slide or page if scrollPerPage


      const width = this.scrollPerPage ? this.slideWidth * this.currentPerPage : this.slideWidth; // lock offset to either the nearest page, or to the last slide

      const lastFullPageOffset = width * Math.floor(this.slideCount / (this.currentPerPage - 1));
      const remainderOffset = lastFullPageOffset + this.slideWidth * (this.slideCount % this.currentPerPage);

      if (this.offset > (lastFullPageOffset + remainderOffset) / 2) {
        this.offset = remainderOffset;
      } else {
        this.offset = width * Math.round(this.offset / width);
      } // clamp the offset between 0 -> maxOffset


      this.offset = Math.max(0, Math.min(this.offset, this.maxOffset)); // update the current page

      this.currentPage = this.scrollPerPage ? Math.round(this.offset / this.slideWidth / this.currentPerPage) : Math.round(this.offset / this.slideWidth);
    },

    /**
     * Re-compute the width of the carousel and its slides
     */
    computeCarouselWidth() {
      this.getSlideCount();
      this.getBrowserWidth();
      this.getCarouselWidth();
      this.setCurrentPageInBounds();
    },

    /**
     * Re-compute the height of the carousel and its slides
     */
    computeCarouselHeight() {
      this.getCarouselHeight();
    },

    /**
     * When the current page exceeds the carousel bounds, reset it to the maximum allowed
     */
    setCurrentPageInBounds() {
      if (!this.canAdvanceForward && this.scrollPerPage) {
        const setPage = this.pageCount - 1;
        this.currentPage = setPage >= 0 ? setPage : 0;
        this.offset = Math.max(0, Math.min(this.offset, this.maxOffset));
      }
    },

    handleTransitionStart() {
      this.$emit('transitionStart');
      this.$emit('transition-start');
    },

    handleTransitionEnd() {
      this.$emit('transitionEnd');
      this.$emit('transition-end');
    }

  },

  mounted() {
    window.addEventListener('resize', debounce(this.onResize, this.refreshRate)); // setup the start event only if touch device or mousedrag activated

    if (this.isTouch && this.touchDrag || this.mouseDrag) {
      this.$refs['VueCarousel-wrapper'].addEventListener(this.isTouch ? 'touchstart' : 'mousedown', this.onStart);
    }

    this.attachMutationObserver();
    this.computeCarouselWidth();
    this.computeCarouselHeight();
    this.transitionstart = getTransitionStart();
    this.$refs['VueCarousel-inner'].addEventListener(this.transitionstart, this.handleTransitionStart);
    this.transitionend = getTransitionEnd();
    this.$refs['VueCarousel-inner'].addEventListener(this.transitionend, this.handleTransitionEnd);
    this.$emit('mounted'); // when autoplay direction is backward start from the last slide

    if (this.autoplayDirection === 'backward') {
      this.goToLastSlide();
    }
  },

  beforeDestroy() {
    this.detachMutationObserver();
    window.removeEventListener('resize', this.getBrowserWidth);
    this.$refs['VueCarousel-inner'].removeEventListener(this.transitionstart, this.handleTransitionStart);
    this.$refs['VueCarousel-inner'].removeEventListener(this.transitionend, this.handleTransitionEnd);
    this.$refs['VueCarousel-wrapper'].removeEventListener(this.isTouch ? 'touchstart' : 'mousedown', this.onStart);
  }

};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "VueCarousel",
    class: {
      'VueCarousel--reverse': _vm.paginationPosition === 'top'
    }
  }, [_c('div', {
    ref: "VueCarousel-wrapper",
    staticClass: "VueCarousel-wrapper"
  }, [_c('div', {
    ref: "VueCarousel-inner",
    class: ['VueCarousel-inner', {
      'VueCarousel-inner--center': _vm.isCenterModeEnabled
    }],
    style: {
      transform: "translate(" + _vm.currentOffset + "px, 0)",
      transition: _vm.dragging ? 'none' : _vm.transitionStyle,
      'ms-flex-preferred-size': _vm.slideWidth + "px",
      'webkit-flex-basis': _vm.slideWidth + "px",
      'flex-basis': _vm.slideWidth + "px",
      visibility: _vm.slideWidth ? 'visible' : 'hidden',
      height: "" + _vm.currentHeight,
      'padding-left': _vm.padding + "px",
      'padding-right': _vm.padding + "px"
    }
  }, [_vm._t("default")], 2)]), _vm._v(" "), _vm.navigationEnabled && _vm.isNavigationRequired ? _vm._t("navigation", [_c('navigation', {
    attrs: {
      "clickTargetSize": _vm.navigationClickTargetSize,
      "nextLabel": _vm.navigationNextLabel,
      "prevLabel": _vm.navigationPrevLabel
    },
    on: {
      "navigationclick": _vm.handleNavigation
    }
  })]) : _vm._e(), _vm._v(" "), _vm.paginationEnabled ? _vm._t("pagination", [_c('pagination', {
    on: {
      "paginationclick": function ($event) {
        return _vm.goToPage($event, 'pagination');
      }
    }
  })]) : _vm._e()], 2);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = undefined;
/* scoped */

const __vue_scope_id__$2 = undefined;
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
  name: 'slide',
  props: ['title'],

  data() {
    return {
      width: null
    };
  },

  inject: ['carousel'],

  mounted() {
    if (!this.$isServer) {
      this.$el.addEventListener('dragstart', e => e.preventDefault());
    }

    this.$el.addEventListener(this.carousel.isTouch ? 'touchend' : 'mouseup', this.onTouchEnd);
  },

  computed: {
    activeSlides() {
      const {
        currentPage,
        breakpointSlidesPerPage,
        $children
      } = this.carousel;
      const activeSlides = [];
      const children = $children.filter(child => child.$el && child.$el.className.indexOf('VueCarousel-slide') >= 0).map(child => child._uid);
      let i = 0;

      while (i < breakpointSlidesPerPage) {
        const child = children[currentPage * breakpointSlidesPerPage + i];
        activeSlides.push(child);
        i++;
      }

      return activeSlides;
    },

    /**
     * `isActive` describes whether a slide is visible
     * @return {Boolean}
     */
    isActive() {
      return this.activeSlides.indexOf(this._uid) >= 0;
    },

    /**
     * `isCenter` describes whether a slide is in the center of all visible slides
     * if perPage is an even number, we quit
     * @return {Boolean}
     */
    isCenter() {
      const {
        breakpointSlidesPerPage
      } = this.carousel;
      if (breakpointSlidesPerPage % 2 === 0 || !this.isActive) return false;
      return this.activeSlides.indexOf(this._uid) === Math.floor(breakpointSlidesPerPage / 2);
    },

    /**
     * `isAdjustableHeight` describes if the carousel adjusts its height to the active slide(s)
     * @return {Boolean}
     */
    isAdjustableHeight() {
      const {
        adjustableHeight
      } = this.carousel;
      return adjustableHeight;
    }

  },
  methods: {
    onTouchEnd(e) {
      /**
       * @event slideclick
       * @event slide-click
       * @type {Object}
       */
      const eventPosX = this.carousel.isTouch && e.changedTouches && e.changedTouches.length > 0 ? e.changedTouches[0].clientX : e.clientX;
      const deltaX = this.carousel.dragStartX - eventPosX;

      if (this.carousel.minSwipeDistance === 0 || Math.abs(deltaX) < this.carousel.minSwipeDistance) {
        this.$emit('slideclick', Object.assign({}, e.currentTarget.dataset));
        this.$emit('slide-click', Object.assign({}, e.currentTarget.dataset));
      }
    }

  }
};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "VueCarousel-slide",
    class: {
      'VueCarousel-slide-active': _vm.isActive,
      'VueCarousel-slide-center': _vm.isCenter,
      'VueCarousel-slide-adjustableHeight': _vm.isAdjustableHeight
    },
    attrs: {
      "tabindex": "-1",
      "aria-hidden": !_vm.isActive,
      "role": "tabpanel"
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Carousel: __vue_component__$2,
  Slide: __vue_component__$3
});

// Import vue components

const install = function installVueConciseCarousel(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install on non-es builds, when vue is found

export default plugin;
export { __vue_component__$2 as Carousel, __vue_component__$3 as Slide };
