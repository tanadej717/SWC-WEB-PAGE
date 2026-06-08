<template>
  <section class="bg-(--swc-card) px-4 py-12 text-(--swc-text-color)">
    <div class="mx-auto max-w-6xl">
      <header class="max-w-3xl">
        <p class="text-sm font-semibold uppercase text-(--swc-main-color)">Portfolio</p>
        <h1 class="mt-3 text-3xl font-semibold leading-tight md:text-4xl">ผลงานของเรา</h1>
        <p class="mt-4 leading-7 text-(--swc-text-muted)">
          ตัวอย่างงานอุปกรณ์ ระบบ และการติดตั้งที่เราดูแลให้ลูกค้าในงานชุบและอุตสาหกรรมที่เกี่ยวข้อง
        </p>
      </header>

      <div class="mt-8 grid gap-4 sm:grid-cols-3">
        <NuxtImg
          v-for="image in portfolioImages"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          class="h-72 w-full rounded-xl object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const portfolioImages = [
  { src: "/content2-400x400-1.jpg", alt: "ผลงานอุปกรณ์งานชุบ" },
  { src: "/content2-400x400-2.jpg", alt: "ผลงานระบบตู้ไฟ" },
  { src: "/content2-400x400-5.jpg", alt: "ผลงานติดตั้งหน้างาน" },
];

useSeoMeta({
  title: "ผลงานของเรา | ศรีวิชัยโลหะกิจ",
});
</script>
