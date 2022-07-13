<template>
  <div class="content">
    <h3 style="border-bottom: 1px solid #eaecef; padding-bottom: 0.3em">
      4. Adjust
    </h3>
    <p>
      Sometimes we need to show not the first slide. And do not want to reduce
      the score of page speed.
    </p>
    <div class="example-basic" style="margin-bottom: 50px">
      <div class="preview">
        <carousel :per-page="1" :navigate-to="1" :navigationEnabled="true">
          <slide :adjust="true">
            <img src="https://via.placeholder.com/1211x300.png/09f/fff" />
          </slide>
          <slide>
            <img src="https://via.placeholder.com/1210x300.png/09f/fff" />
          </slide>
          <slide>
            <img src="https://via.placeholder.com/1211x300.png/09f/fff" />
          </slide>
          <slide>
            <img src="https://via.placeholder.com/1212x300.png/09f/fff" />
          </slide>
        </carousel>
      </div>
      <div class="template">
        <pre
          class="language-html"
        ><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide <span class="token attr-name">:adjust</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>
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
  name: 'ExampleBasic',
};
</script>
