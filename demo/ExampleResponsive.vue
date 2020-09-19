<template>
  <div class="content">
    <h3 style="border-bottom: 1px solid #eaecef; padding-bottom: 0.3em">
      2. Responsive
    </h3>
    <p>
      Configured breakpoints: 2 slides on mobile (&lt;= 480px), 3 slides on
      tablet (&lt;= 768).
    </p>
    <div class="example-responsive" style="margin-bottom: 50px">
      <div class="preview">
        <carousel
          :per-page-custom="[
            [480, 2],
            [768, 3],
          ]"
        >
          <slide v-for="index in 10" :key="index">
            <img
              style="width: 100%"
              src="https://via.placeholder.com/1080.png/09f/fff"
            />
          </slide>
        </carousel>
      </div>
      <div class="template">
        <p>Template</p>
        <pre
          class="language-html"
        ><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:per-page-custom</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>[[480, 2], [768, 3]]<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExampleResponsive',
}
</script>
