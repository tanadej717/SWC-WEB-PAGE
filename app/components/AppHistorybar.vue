<template>
  <section class="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="history-title">
    <div class="mx-auto max-w-7xl border-y border-(--swc-border) py-12">
      <div class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <header>
          <p class="text-sm font-semibold uppercase text-(--swc-main-color)">History</p>
          <h2 id="history-title" class="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            เส้นทางการเติบโตของ SWC
          </h2>
        </header>

        <div class="grid gap-4 md:grid-cols-3">
          <article v-for="item in historyItems" :key="item.year" class="bg-(--swc-surface) p-6">
            <p class="text-4xl font-semibold text-(--swc-main-color)">{{ item.year }}</p>
            <p class="mt-4 leading-7 text-(--swc-text-muted)">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const historyItems = [
  {
    year: "2004",
    description: "เริ่มต้นธุรกิจด้านอุปกรณ์และระบบงานชุบ พร้อมให้คำปรึกษาหน้างาน",
  },
  {
    year: "2014",
    description: "ขยายบริการสู่การออกแบบ ติดตั้ง และดูแลโรงชุบครบวงจร",
  },
  {
    year: "2024",
    description: "พัฒนาสินค้าและบริการให้รองรับงานอุตสาหกรรมหลากหลายมากขึ้น",
  },
];
</script>
