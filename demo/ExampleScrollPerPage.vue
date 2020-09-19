<template>
  <div class="content">
    <h3 style="border-bottom: 1px solid #eaecef; padding-bottom: 0.3em">
      3. Scroll per page false
    </h3>
    <p>
      Instead of scrolling per page, the carousel will scroll on a per item
      basis or perPageCustom with each movement.
    </p>
    <div class="example-scroll-per-page" style="margin-bottom: 50px">
      <div class="preview">
        <carousel :scroll-per-page="false">
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
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:scroll-per-page</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
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
  name: 'ExampleScrollPerPage',
}
</script>
