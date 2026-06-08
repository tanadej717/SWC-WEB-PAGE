<template>
  <div class="mt-5">
    <article class="mx-auto flex items-center px-6 md:px-10">
      <header class="w-full text-center">
        <h2 id="customer-success-title" class="text-xl font-semibold leading-tight sm:text-2xl md:text-3xl">
          มากกว่า 20 ปีที่เราเป็นส่วนหนึ่งของความสำเร็จในงานชุบของลูกค้า
        </h2>
      </header>
    </article>

    <div class="mx-auto mt-3">
      <div class="overflow-hidden border border-(--swc-border) bg-(--swc-surface)">
        <NuxtImg
          src="/content2-1280x720.jpg"
          alt="งานติดตั้งและระบบสำหรับโรงชุบ"
          class="h-75 w-full object-cover"
        />
      </div>
    </div>

    <div class="mt-5">
      <div class="mx-auto mt-3 grid grid-cols-1 gap-4 px-4 sm:grid-cols-3 sm:gap-6 sm:px-6">
        <div
          v-for="image in images"
          :key="image.src"
          class="overflow-hidden rounded-xl border border-(--swc-border) bg-(--swc-surface)"
        >
          <NuxtImg :src="image.src" :alt="image.alt" class="h-100 w-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    src: "/content2-400x400-1.jpg",
    alt: "ตัวอย่างอุปกรณ์สำหรับงานชุบ",
  },
  {
    src: "/content2-400x400-2.jpg",
    alt: "ตัวอย่างตู้ไฟและระบบควบคุม",
  },
  {
    src: "/content2-400x400-5.jpg",
    alt: "ตัวอย่างงานติดตั้งในโรงงาน",
  },
];
</script>
