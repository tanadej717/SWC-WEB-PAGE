<template>
  <section class="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="service-title">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <header class="lg:sticky lg:top-24">
          <p class="text-sm font-semibold uppercase text-(--swc-main-color)">What We Do</p>
          <h2 id="service-title" class="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            บริการและสินค้า
            <span class="block text-(--swc-main-color)">สำหรับงานชุบทุกขั้นตอน</span>
          </h2>
          <p class="mt-5 leading-8 text-(--swc-text-muted)">
            ตั้งแต่ให้คำปรึกษาเปิดโรงชุบ ออกแบบระบบไฟงานชุบ คำนวณกระแส เลือกตู้ไฟชุบ น้ำยาชุบ
            และอุปกรณ์โรงชุบ ไปจนถึงการติดตั้งและบริการหลังการขาย
          </p>
          <NuxtLink
            to="/services"
            class="mt-8 inline-flex min-h-12 items-center justify-center border border-(--swc-main-color) px-6 text-sm font-semibold text-(--swc-main-color) transition-colors hover:bg-(--swc-main-color) hover:text-white"
          >
            ดูบริการทั้งหมด
          </NuxtLink>
        </header>

        <div class="divide-y divide-(--swc-border) border-y border-(--swc-border)">
          <article v-for="service in services" :key="service.number" class="grid gap-4 py-7 sm:grid-cols-[5rem_1fr]">
            <p class="text-2xl font-semibold text-(--swc-main-color)">{{ service.number }}</p>
            <div>
              <h3 class="text-2xl font-semibold">{{ service.title }}</h3>
              <p class="mt-3 leading-7 text-(--swc-text-muted)">{{ service.description }}</p>
            </div>
          </article>
        </div>
      </div>

      <div class="mt-16 overflow-hidden bg-(--swc-surface)">
        <NuxtImg
          src="/content2-1280x720.jpg"
          alt="งานติดตั้งระบบงานชุบและอุปกรณ์โรงชุบ"
          class="h-80 w-full object-cover lg:h-120"
          sizes="100vw"
          width="1280"
          height="720"
          format="webp"
          quality="80"
          loading="lazy"
        />
      </div>

      <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div v-for="image in images" :key="image.src" class="overflow-hidden bg-(--swc-surface)">
          <NuxtImg
            :src="image.src"
            :alt="image.alt"
            class="h-80 w-full object-cover"
            width="400"
            height="400"
            format="webp"
            quality="80"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    number: "001",
    title: "ออกแบบระบบไฟงานชุบ",
    description: "วางแนวทางระบบไฟงานชุบให้เหมาะกับชนิดงาน ขนาดบ่อ และกำลังการผลิตของหน้างานจริง",
  },
  {
    number: "002",
    title: "คำนวณกระแสและเลือกอุปกรณ์งานชุบ",
    description: "ช่วยเลือกตู้ไฟชุบ เบรคเกอร์ อะไหล่ตู้ไฟ และอุปกรณ์โรงชุบให้สัมพันธ์กับกระบวนการชุบ",
  },
  {
    number: "003",
    title: "จำหน่ายน้ำยาชุบและเคมีงานชุบ",
    description: "จำหน่ายน้ำยาชุบนิกเกิล น้ำยาชุบทองแดง น้ำยาชุบซิงค์ และเคมีที่เกี่ยวข้องกับงานชุบอุตสาหกรรม",
  },
  {
    number: "004",
    title: "ติดตั้งและบริการหลังการขายงานชุบ",
    description: "ติดตั้ง ทดสอบระบบ และให้คำแนะนำการใช้งานเพื่อให้ลูกค้าเริ่มงานโรงชุบได้อย่างมั่นใจ",
  },
];

const images = [
  {
    src: "/content2-400x400-1.jpg",
    alt: "ตัวอย่างอุปกรณ์งานชุบและอุปกรณ์โรงชุบ",
  },
  {
    src: "/content2-400x400-2.jpg",
    alt: "ตัวอย่างตู้ไฟชุบและระบบควบคุมงานชุบ",
  },
  {
    src: "/content2-400x400-5.jpg",
    alt: "ตัวอย่างงานติดตั้งอุปกรณ์โรงชุบในโรงงาน",
  },
];
</script>
