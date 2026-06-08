<template>
  <main class="bg-(--swc-card) text-(--swc-text-color)">
    <section class="px-4 py-14 sm:px-6 lg:px-8" aria-labelledby="products-title">
      <div class="mx-auto max-w-7xl">
        <header class="grid gap-6 border-b border-(--swc-border) pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p class="text-sm font-semibold uppercase text-(--swc-main-color)">Products</p>
            <h1 id="products-title" class="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              สินค้าของเรา
            </h1>
          </div>
          <p class="max-w-3xl leading-8 text-(--swc-text-muted) lg:justify-self-end">
            อุปกรณ์งานชุบ ตู้ไฟ น้ำยา อะไหล่ และอุปกรณ์โรงงานอุตสาหกรรม พร้อมคำแนะนำในการเลือกใช้ให้เหมาะกับหน้างานจริง
          </p>
        </header>

        <div class="mt-10 grid auto-rows-[18rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(product, index) in products"
            :key="product.title"
            class="group relative isolate overflow-hidden bg-(--swc-surface)"
            :class="{ 'lg:col-span-2 lg:row-span-2': index === 0 }"
          >
            <NuxtImg
              :src="product.image"
              :alt="product.alt"
              class="absolute inset-0 -z-20 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div class="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/30 to-black/5" />

            <div class="flex h-full flex-col justify-between p-5 text-white sm:p-6">
              <span class="w-fit border border-white/35 bg-black/25 px-3 py-1 text-xs font-semibold uppercase backdrop-blur">
                {{ product.category }}
              </span>
              <div>
                <h2 class="text-2xl font-semibold leading-tight">{{ product.title }}</h2>
                <p class="mt-3 max-w-xl text-sm leading-6 text-white/80">{{ product.description }}</p>
              </div>
            </div>
          </article>
        </div>

        <section class="mt-12 grid gap-6 bg-(--swc-surface) p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase text-(--swc-main-color)">Need Advice?</p>
            <h2 class="mt-3 text-3xl font-semibold">ไม่แน่ใจว่าควรเลือกอุปกรณ์แบบไหน</h2>
            <p class="mt-3 leading-7 text-(--swc-text-muted)">
              ส่งรายละเอียดงานหรือรูปหน้างานมาให้ทีม SWC ช่วยประเมินสินค้าและอุปกรณ์ที่เหมาะสมได้
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="inline-flex min-h-12 items-center justify-center bg-(--swc-main-color) px-6 text-sm font-semibold text-white transition hover:bg-(--swc-red-700)"
          >
            ติดต่อเรา
          </NuxtLink>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const products = [
  {
    title: "ตู้ไฟและระบบควบคุมงานชุบ",
    category: "Control",
    description: "ตู้ไฟชุบงานมือ 1 และมือ 2 พร้อมอุปกรณ์ควบคุมสำหรับงานชุบหลายขนาด",
    image: "/web-800x800.jpg",
    alt: "ตู้ไฟและอุปกรณ์ควบคุมสำหรับงานชุบ",
  },
  {
    title: "น้ำยาและเคมีงานชุบ",
    category: "Chemical",
    description: "น้ำยาชุบนิกเกิล ทองแดง ซิงค์ และเคมีที่เกี่ยวข้องกับกระบวนการชุบ",
    image: "/content2-400x400-1.jpg",
    alt: "น้ำยาและอุปกรณ์สำหรับงานชุบ",
  },
  {
    title: "อะไหล่ตู้ไฟและเบรคเกอร์",
    category: "Parts",
    description: "อะไหล่ เบรคเกอร์ และอุปกรณ์ประกอบสำหรับงานซ่อมบำรุงระบบไฟ",
    image: "/content2-400x400-2.jpg",
    alt: "อะไหล่ตู้ไฟและเบรคเกอร์",
  },
  {
    title: "เครื่องดูดอากาศและระบบหน้างาน",
    category: "Factory",
    description: "อุปกรณ์สนับสนุนโรงงานและระบบระบายอากาศสำหรับพื้นที่งานชุบ",
    image: "/content2-1280x720.jpg",
    alt: "เครื่องดูดอากาศและระบบในโรงงาน",
  },
  {
    title: "อุปกรณ์ประกอบบ่อชุบ",
    category: "Equipment",
    description: "อุปกรณ์ที่ใช้ร่วมกับบ่อชุบและระบบการผลิตในโรงงานอุตสาหกรรม",
    image: "/content2-400x400-4.jpg",
    alt: "อุปกรณ์ประกอบบ่อชุบ",
  },
  {
    title: "ชุดอุปกรณ์สำหรับเริ่มโรงชุบ",
    category: "Solution",
    description: "จัดชุดอุปกรณ์ตามขนาดงาน พร้อมคำแนะนำสำหรับการเริ่มต้นหรือปรับปรุงโรงชุบ",
    image: "/content2-400x400-5.jpg",
    alt: "ชุดอุปกรณ์สำหรับโรงชุบ",
  },
];

useSeoMeta({
  title: "สินค้าของเรา | ศรีวิชัยโลหะกิจ",
  description: "รวมสินค้าอุปกรณ์งานชุบ ตู้ไฟ น้ำยา อะไหล่ และอุปกรณ์โรงงานอุตสาหกรรมจากศรีวิชัยโลหะกิจ",
});
</script>
