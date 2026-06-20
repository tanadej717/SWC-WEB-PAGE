<template>
  <section class="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden" aria-labelledby="hero-title">
    <NuxtImg
      src="/web-hero-braner-1280x720.jpg"
      alt="อุปกรณ์งานชุบ ตู้ไฟชุบ และระบบสำหรับโรงชุบของศรีวิชัยโลหะกิจ"
      class="absolute inset-0 -z-20 h-full w-full object-cover"
      sizes="100vw"
      preload
    />
    <div class="absolute inset-0 -z-10 bg-black/55 dark:bg-black/70" />
    <div class="absolute inset-0 -z-10 bg-linear-to-b from-black/35 via-black/25 to-(--swc-red-900)/85" />

    <div class="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-between px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between text-xs font-semibold uppercase text-white/80">
        <span>Industrial Plating Solutions</span>
        <span class="hidden sm:inline">SWC Lohakit</span>
      </div>

      <div class="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <header class="max-w-4xl">
          <p class="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
            จำหน่ายอุปกรณ์งานชุบ พร้อมคำปรึกษาเปิดโรงชุบ
          </p>
          <h1 id="hero-title" class="text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
            อุปกรณ์งานชุบ
            <span class="block text-(--swc-red-200)">ตู้ไฟชุบ น้ำยาชุบ</span>
            ครบวงจรสำหรับโรงงาน
          </h1>
          <p class="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            ศรีวิชัยโลหะกิจจำหน่ายตู้ไฟชุบมือหนึ่งและมือสอง น้ำยาชุบนิกเกิล น้ำยาชุบทองแดง อะไหล่ตู้ไฟ
            เบรคเกอร์ และอุปกรณ์โรงชุบ พร้อมช่วยเลือกอุปกรณ์ให้เหมาะกับงานจริงตั้งแต่เริ่มวางระบบจนถึงบริการหลังการขาย
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink
              to="/contact"
              class="inline-flex min-h-12 items-center justify-center bg-(--swc-main-color) px-6 text-sm font-semibold text-white transition hover:bg-(--swc-red-700)"
            >
              ติดต่อเรา
            </NuxtLink>
            <NuxtLink
              to="/products"
              class="inline-flex min-h-12 items-center justify-center border border-white/35 px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-(--swc-red-900)"
            >
              ดูสินค้า
            </NuxtLink>
          </div>
        </header>

        <div class="grid grid-cols-2 border border-white/20 bg-black/25 text-white backdrop-blur">
          <div v-for="stat in heroStats" :key="stat.label" class="border-white/15 p-5 odd:border-r [&:nth-child(-n+2)]:border-b">
            <p class="text-3xl font-semibold sm:text-4xl">{{ stat.value }}</p>
            <p class="mt-2 text-sm leading-6 text-white/75">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroStats = [
  { value: "20+", label: "ปีประสบการณ์งานชุบและอุปกรณ์โรงชุบ" },
  { value: "ครบ", label: "ตู้ไฟชุบ น้ำยาชุบ อะไหล่ และอุปกรณ์โรงงาน" },
  { value: "1-2", label: "ตู้ไฟชุบมือหนึ่งและตู้ไฟชุบมือสอง" },
  { value: "SWC", label: "ให้คำปรึกษาเลือกใช้อุปกรณ์งานชุบจริง" },
];
</script>
