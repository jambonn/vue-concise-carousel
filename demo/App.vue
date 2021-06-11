<template>
  <div id="hero" style="margin-top: 50px; margin-bottom: 50px">
    <h1 style="text-align: center">
      Vue Concise Carousel is SSR and CSR friendly.
    </h1>
    <p class="action" style="text-align: center">
      <a class="button" href="#install">GET STARTED</a>
      <a
        class="button white"
        href="https://github.com/jambonn/vue-concise-carousel#readme"
      >
        GITHUB
      </a>
    </p>
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
    <div id="install" class="container">
      <h2
        id="installation"
        style="border-bottom: 1px solid #eaecef; padding-bottom: 0.3em"
      >
        Installation
      </h2>
      <h3>yarn/npm</h3>
      <pre
        class="language-bash"
      ><code class="language-bash"><span class="token comment"># npm</span>
<span class="token function">npm</span> i @jambonn/vue-concise-carousel
<span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> @jambonn/vue-concise-carousel</code></pre>
    </div>
    <div id="quick-start" class="container">
      <h2 style="border-bottom: 1px solid #eaecef; padding-bottom: 0.3em">
        Quick Start
      </h2>
      <p>
        See
        <a href="https://github.com/jambonn/vue-concise-carousel#configuration">
          Configuration
        </a>
        to learn advanced usage.
      </p>
      <pre
        class="language-html"
      ><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:center-mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">:navigation-enabled</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> { Carousel, Slide } <span class="token keyword">from</span> <span class="token string">'@jambonn/vue-concise-carousel'</span>
  <span class="token keyword">import</span> <span class="token string">'@jambonn/vue-concise-carousel/dist/vue-concise-carousel.css'</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token string">'ConciseCarouselComponent'</span><span class="token punctuation">,</span>
    components<span class="token punctuation">:</span> <span class="token punctuation">{</span> Carousel, Slide <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code></pre>
    </div>
    <div id="example-full" class="container">
      <h2 style="border-bottom: 1px solid #eaecef; padding-bottom: 0.3em">
        Examples
      </h2>
      <example-basic />
      <example-responsive />
      <example-scroll-per-page />
    </div>
    <div id="license" class="container">
      <h2 style="border-bottom: 1px solid #eaecef; padding-bottom: 0.3em">
        License
      </h2>
      <p>
        This software is licensed under the
        <a
          href="https://github.com/jambonn/vue-concise-carousel/blob/next/LICENSE.md"
        >
          MIT
        </a>
        .
      </p>
    </div>
  </div>
</template>
<script>
import ExampleBasic from "./ExampleBasic.vue";
import ExampleResponsive from "./ExampleResponsive.vue";
import ExampleScrollPerPage from "./ExampleScrollPerPage.vue";
export default {
  name: "App",
  components: { ExampleBasic, ExampleResponsive, ExampleScrollPerPage },
  setup() {
    return { slideCount: 6 };
  },
};
</script>

<style lang="css">
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #34495e;
  background-color: #fff;
  margin: 0;
}
.container {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 960px) {
  .container {
    max-width: 900px;
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: 1185px;
  }
}
pre[class*="language-"] {
  background: #2d2d2d;
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;
  tab-size: 4;
  hyphens: none;
}
code {
  color: #bd4147;
  white-space: pre;
  word-break: normal;
  background: transparent;
  overflow: visible;
  padding: 0;
  border: 0;
  display: inline;
  line-height: inherit;
  margin: 0;
}
code:before,
code:after {
  content: " ";
  letter-spacing: -1px;
}
.token.block-comment,
.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
  color: #999;
}
.token.boolean,
.token.function,
.token.number {
  color: #f08d49;
}
.token.punctuation {
  color: #ccc;
}
.token.attr-value,
.token.char,
.token.regex,
.token.string,
.token.variable {
  color: #7ec699;
}
.token.attr-name,
.token.deleted,
.token.namespace,
.token.tag {
  color: #e2777a;
}
.token.atrule,
.token.builtin,
.token.important,
.token.keyword,
.token.selector {
  color: #cc99cd;
}
a {
  text-decoration: none;
}
.button {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #34495e;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #34495e;
}
.button.white {
  background-color: #fff;
  color: #34495e;
}
.action .button:first-child {
  margin-right: 1em;
}
.action .button {
  margin: 1em 0;
  font-size: 1.05em;
  font-weight: 600;
  letter-spacing: 0.1em;
}
</style>
