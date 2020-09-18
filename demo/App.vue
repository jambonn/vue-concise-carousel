<template>
  <div id="hero" style="margin-top: 50px; margin-bottom: 50px">
    <h1 style="text-align: center">
      Vue Concise Carousel with True SSR Written for Jambon.
    </h1>
    <div id="example">
      <carousel
        :per-page-custom="[
          [480, 1],
          [768, 4],
        ]"
        :center-mode="true"
        :navigation-enabled="false"
      >
        <slide v-for="index in slideCount" :key="index">
          <img
            style="width: 100%"
            src="https://via.placeholder.com/1080.png/09f/fff"
          />
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      slideCount: 6,
    }
  },
}
</script>
