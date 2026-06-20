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
        <!--
          รูปแรก (index 0) คือ LCP candidate — ห้าม lazy load
          fetchpriority="high" บอก browser ให้ fetch ก่อนทุก resource อื่น
          รูปที่เหลือ lazy load ตามปกติ
        -->
        <NuxtImg
          v-for="(image, index) in portfolioImages"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          class="h-72 w-full rounded-xl object-cover"
          width="400"
          height="288"
          format="webp"
          quality="80"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :fetchpriority="index === 0 ? 'high' : 'auto'"
          sizes="(min-width: 640px) 33vw, 100vw"
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

useSeoPage({
  title: 'ผลงานของเรา | ศรีวิชัยโลหะกิจ',
  description: 'ตัวอย่างผลงานอุปกรณ์ ระบบ และการติดตั้งที่ศรีวิชัยโลหะกิจดูแลให้ลูกค้าในงานชุบและอุตสาหกรรมที่เกี่ยวข้อง',
  path: '/portfolio',
});

// หมายเหตุ: ไม่ใส่ manual preload link สำหรับ NuxtImg
// เพราะ @nuxt/image serve รูปจาก /_ipx/ path ใน production
// การ preload URL ต้นฉบับ (.jpg) จะทำให้ browser fetch ซ้ำสอง URL
// แทนที่ด้วย fetchpriority="high" + loading="eager" บนรูปแรกซึ่งเพียงพอแล้ว
</script>
