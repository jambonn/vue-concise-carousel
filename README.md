# vue-concise-carousel
> Vue Concise Carousel is SSR and CSR friendly.
> An upgraded version from [vue-carousel](https://github.com/SSENSE/vue-carousel)

**[Full examples](https://jambonn.github.io/vue-concise-carousel/#example-full)**

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Events](#events)
- [Methods](#methods)
- [Slots](#slots)
- [Development](#compiles-and-hot-reloads-for-development)
- [License](#license)

## Installation

``` bash
npm install @jambonn/vue-concise-carousel
```

or if you prefer yarn

``` bash
yarn add @jambonn/vue-concise-carousel
```

## Usage

### Global

You may install Vue Concise Carousel globally:

``` js
import Vue from 'vue';
import VueConciseCarousel from '@jambonn/vue-concise-carousel';
import '@jambonn/vue-concise-carousel/dist/vue-slick-carousel.css'

Vue.component('carousel', VueConciseCarousel.Carousel);
Vue.component('slide', VueConciseCarousel.Slide);
```
This will make **&lt;carousel&gt;** and **&lt;slide&gt;** available to all components within your Vue app.

### Local

Include the carousel directly into your component using import:

``` js
import { Carousel, Slide } from '@jambonn/vue-concise-carousel';
import '@jambonn/vue-concise-carousel/dist/vue-slick-carousel.css'

export default {
  ...
  components: {
    Carousel,
    Slide
  }
  ...
};
```

## Configuration
| Property                    | Type    | Default | Description                                                                                                                                                                                                                                                                           |
|:----------------------------|:--------|:--------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| adjustableHeight            | Boolean | false   | Adjust the height of the carousel for the current slide.
| adjustableHeightEasing      | String  |         | Slide transition easing for adjustableHeight. Any valid CSS transition easing accepted.
| autoplay                    | Boolean | false   | Flag to enable autoplay.                                                                                                                                                                                                                                                              |
| autoplayDirection           | String  | forward | Sets the autoplay direction for the carousel during autoplay. By default it is forward but can also be set to backward. If an incorrect string is supplied it will default to forward.                                                                                                |
| autoplayHoverPause          | Boolean | true    | Flag to pause autoplay on hover.                                                                                                                                                                                                                                                      |
| autoplayTimeout             | Number  | 2000    | Time elapsed before advancing slide in autoplay.                                                                                                                                                                                                                                      |
| centerMode                  | Boolean | false   | Center images when the size is less than the container width.                                                                                                                                                                                                                         |
| easing                      | String  | ease    | Slide transition easing. Any valid CSS transition easing accepted.                                                                                                                                                                                                                    |
| loop                        | Boolean | false   | Flag to make the carousel loop around when it reaches the end.                                                                                                                                                                                                                        |
| minSwipeDistance            | Number  | 8       | Minimum distance for the swipe to trigger a slide advance.                                                                                                                                                                                                                            |
| mouseDrag                   | Boolean | true    | Flag to toggle mouse dragging.                                                                                                                                                                                                                                                        |
| navigateTo                  | Number, Array  | 0       | Listen for an external navigation request using this prop. When the supplied prop is of type Number the slide with the matching index is animated into view, however you can disable this animation by supplying an Array consisting of exactly two element: the new slide index and a boolean indication whether the change should be animated or not (eg. [3, false] would mean "go to the slide with index 3 without animation").                                                                                                                                                                                                                            |
| navigationClickTargetSize   | Number  | 8       | Amount of padding to apply around the label in pixels.                                                                                                                                                                                                                                |
| navigationEnabled           | Boolean | false   | Flag to render the navigation component (next/prev buttons).                                                                                                                                                                                                                          |
| navigationNextLabel         | String  | ▶       | Text content of the navigation next button.                                                                                                                                                                                                                                           |
| navigationPrevLabel         | String  | ◀       | Text content of the navigation prev button.                                                                                                                                                                                                                                           |
| paginationActiveColor       | String  | #000000 | The fill color of the active pagination dot. Any valid CSS color is accepted.                                                                                                                                                                                                         |
| paginationColor             | String  | #efefef | The fill color of pagination dots. Any valid CSS color is accepted.                                                                                                                                                                                                                   |
| paginationPosition          | String  | bottom  | The position of pagination dots. Possible values are `bottom`, `bottom-overlay`, `top` and `top-overlay`. The overlay values place the pagination component over the images.                                                                                                          |
| paginationEnabled           | Boolean | true    | Flag to render pagination component.                                                                                                                                                                                                                                                  |
| paginationPadding           | Number  | 10      | The padding inside each pagination dot. Pixel values are accepted.                                                                                                                                                                                                                    |
| paginationSize              | Number  | 10      | The size of each pagination dot. Pixel values are accepted.                                                                                                                                                                                                                           |
| perPage                     | Number  | 2       | Maximum number of slides displayed on each page.                                                                                                                                                                                                                                      |
| perPageCustom               | Array   |         | Configure the number of visible slides with a particular browser width. This will be an array of arrays, ex. [[320, 2], [1199, 4]]. Formatted as [x, y] where x=browser width, and y=number of slides displayed. Ex. [1199, 4] means if (window >= 1199) then show 4 slides per page. |
| resistanceCoef              | Number  | 20      | Resistance coefficient to dragging on the edge of the carousel. This dictates the effect of the pull as you move towards the boundaries.                                                                                                                                              |
| scrollPerPage               | Boolean | true    | Scroll per page, not per item.                                                                                                                                                                                                                                                        |
| spacePadding                | Number  | 0       | Stage padding option adds left and right padding style (in pixels) onto VueCarousel-inner.                                                                                                                                                                                            |
| spacePaddingMaxOffsetFactor | Number  | 0       | Specify by how much should the space padding value be multiplied of, to re-arange the final slide padding.                                                                                                                                                                            |
| speed                       | Number  | 500     | Slide transition speed. Number of milliseconds accepted.                                                                                                                                                                                                                              |
| tagName                     | String  | slide   | Name (tag) of slide component. Overwrite with coponent name when extending slide component.                                                                                                                                                                                           |
| touchDrag                   | Boolean | true    | Flag to toggle touch dragging.                                                                                                                                                                                                                                                        |
| value                       | Number  |         | Support for v-model functionality. Setting this value will change the current page to the number inputted (if between 0 and pageCount).                                                                                                                                               |
| maxPaginationDotCount       | Number  |  -1     | Support Max pagination dot amount                                                                                                                                                                                                                                                     |
| rtl                         | Boolean |  false  | Support right to left                                                                                                                                                                                                                                                                 |


## Events
| Event                     | Type    | Emitter  | Description                                                                                                                                                                                                                                                                           |
|:--------------------------|:--------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `navigation-click`             |         | Carousel | Emits when the a navigation button is clicked, with the current direction (`backward` or `forward`)                                                                                                                                                                                                                     |
| `pagination-click`             |         | Carousel | Emits when a pagination button is clicked, with the current `pageNumber`                                                                                                                                                                                                                        |
| `page-change`                 | Number  | Carousel | Emits with the current page number.                                                                                                                                                                                                                       |
| `slide-click`                | Object  | Slide    | Emits with the *dataset* object of the selected element                        ··
| `transition-start` | | Carousel | Emits when the transition end is reached                                                                                                                                                  |
| `transition-end`             |         | Carousel | Emits when the transition start is reached                                                                                                     ·                                                                                                               |
| `mounted`             |         | Carousel | Emits when carousel ready                                                                                                   ·                                                                                                               |

Lowercase versions of the above events are also emitted, namely—`pagechange`, `slideclick`, `transitionstart` and `transitionend`.

### HTML Structure

Once the **Carousel** and **Slide** components are installed globally or imported, they can be used in templates in the following manner:

``` vue
  <Carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
    <Slide>
      Slide 1 Content
    </Slide>
    <Slide>
      Slide 2 Content
    </Slide>
  </Carousel>
```

To listen for the 'slideclick' event you can do the following:

``` vue
  <Carousel>
    <Slide
        data-index="0"
        data-name="MySlideName"
        @slideclick="handleSlideClick">
      Slide 1 Content
    </Slide>
    ...
  </Carousel>
```

``` js
  handleSlideClick (dataset) => {
    console.log(dataset.index, dataset.name)
  }
```

## Methods

### Calling Methods

```html
<template>
  <Carousel ref="carousel">
    <Slide>
      Slide 1 Content
    </Slide>
    <Slide>
      Slide 2 Content
    </Slide>
  </Carousel>
  <button @click="showNext">show me the next</button>
</template>
<script>
  export default {
    methods: {
      showNext() {
        this.$refs.carousel.handleNavigation('forward')
      },
    },
  }
</script>
```
### All Methods

| Method name     | Description                                                          | Returns | Parameters                               | Default |
| --------------- | -------------------------------------------------------------------- | ------- | ---------------------------------------- | ------- |
| handleNavigation| go to the next or previous slide                                     | -       | direction: forward or backward           | -       |
| goToPage        | go to slide index                                                    | -       | slide:Number - slide number              | null    |
| restartAutoplay | restarts the autoplay                                                | -       |                                          |         |
| pauseAutoplay   | pauses the autoplay                                                  | -       |                                          |         |

## Slots

### Customizing Navigation & Pagination

```html
<template>
  <Carousel ref="carousel" @page-change="handlePageChange">
      <Slide>
        Slide 1 Content
      </Slide>
      <Slide>
        Slide 2 Content
      </Slide>
      <div class="custom-navigation" slot="navigation">
        <button type="button" :disabled="currentPage > 0" @click="onChangeNavigation('backward')">Back</button>
        <button type="button" :disabled="!isEnableForward" @click="onChangeNavigation('forward')">Next</button>
      </div>
      <ul class="custom-pagination" slot="pagination">
        <li @click="onChangePagination(1)">1</li>
        <li @click="onChangePagination(2)">2</li>
      </ul>
  </Carousel>
</template>
<script>
  export default {
    data() {
      return {
        currentPage: 0,
        isEnableForward: true,
      }
    },
    methods: {
      handlePageChange(currentPage) {
        this.currentPage = currentPage
        this.isEnableForward = this.$refs.carousel.canAdvanceForward
      },
      onChangePagination(index) {
        this.$refs.carousel.goToPage(index, 'pagination')
      },
      onChangeNavigation(direction) {
        this.$refs.carousel.handleNavigation(direction)
      },
    },
  }
</script>
```

### All Slots

| Name         | Description                           | Method                                       |
| ------------ | ------------------------------------- | -------------------------------------------- |
| pagination   | Custom pagination                     | goToPage(currentSlide: Number)               |
|              |                                       |                                              |
| navigation   | Custom navigation                     | handleNavigation(direction: String)          |
|              |                                       |                                              |

### Compiles and hot-reloads for development
``` bash
yarn install
yarn serve
```
then navigate to `http://localhost:8080`

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
