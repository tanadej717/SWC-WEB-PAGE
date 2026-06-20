<template>
  <section class="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="product-highlight-title">
    <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
      <div class="overflow-hidden bg-(--swc-surface)">
        <NuxtImg
          src="/web-800x800.jpg"
          alt="ตู้ไฟชุบและอุปกรณ์งานชุบสำหรับโรงงานอุตสาหกรรม"
          class="h-full min-h-96 w-full object-cover"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
      </div>

      <article class="flex flex-col justify-between bg-(--swc-surface) p-6 sm:p-8 lg:p-10">
        <div>
          <p class="text-sm font-semibold uppercase text-(--swc-main-color)">About SWC</p>
          <h2 id="product-highlight-title" class="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            ผู้เชี่ยวชาญอุปกรณ์งานชุบและระบบโรงชุบครบวงจร
            <span class="block text-(--swc-main-color)">เลือกให้เหมาะกับงานจริง</span>
          </h2>
          <p class="mt-6 text-base leading-8 text-(--swc-text-muted)">
            ศรีวิชัยโลหะกิจจำหน่ายอุปกรณ์งานชุบอุตสาหกรรม ตู้ไฟชุบ น้ำยาชุบนิกเกิล น้ำยาชุบทองแดง
            น้ำยาชุบซิงค์ เครื่องดูดอากาศโรงงาน เบรคเกอร์ และอะไหล่ตู้ไฟชุบ พร้อมคำปรึกษาสำหรับการเปิดโรงชุบขนาดเล็ก
            การปรับปรุงโรงชุบเดิม และการเลือกอุปกรณ์โรงชุบให้เหมาะกับหน้างาน
          </p>
        </div>

        <div class="mt-10 grid gap-3 sm:grid-cols-2">
          <div v-for="item in highlights" :key="item" class="flex items-start gap-3 border-t border-(--swc-border) pt-4">
            <Icon name="heroicons:check-circle" class="mt-1 text-2xl text-(--swc-main-color)" />
            <p class="leading-7 text-(--swc-text-color)">{{ item }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const highlights = [
  "ออกแบบระบบไฟงานชุบ",
  "คำนวณกระแสงานชุบตามขนาดบ่อ",
  "เลือกตู้ไฟชุบและอุปกรณ์โรงชุบที่เหมาะสม",
  "ติดตั้ง ทดสอบ และบริการหลังการขายงานชุบ",
];
</script>
