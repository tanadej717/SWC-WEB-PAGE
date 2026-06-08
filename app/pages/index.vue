<template>
  <div>
    <HeroContent />
    <section class="bg-(--swc-card) py-8 text-(--swc-text-color) md:py-6" aria-labelledby="product-highlight-title">
      <Content1 />
      <Content2 />
      <AppHistorybar />
      <Content3 />
    </section>
  </div>
</template>

<script setup lang="ts">
import Content1 from './home/components/Content1.vue';
import Content2 from './home/components/Content2.vue';
import Content3 from './home/components/Content3.vue';
import HeroContent from './home/components/HeroContent.vue';

useSeoMeta({
  title: "ศรีวิชัยโลหะกิจ | จำหน่ายอุปกรณ์การชุบ ตู้ไฟชุบงานมือ 2 น้ำยาชุบ และอุปกรณ์โรงงาน",
});
</script>
