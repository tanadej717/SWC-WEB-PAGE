<template>
  <section class="bg-(--swc-card) px-4 py-12 text-(--swc-text-color)">
    <div class="mx-auto max-w-6xl">
      <header class="max-w-3xl">
        <p class="text-sm font-semibold uppercase text-(--swc-main-color)">Products</p>
        <h1 class="mt-3 text-3xl font-semibold leading-tight md:text-4xl">สินค้าของเรา</h1>
        <p class="mt-4 leading-7 text-(--swc-text-muted)">
          อุปกรณ์งานชุบ ตู้ไฟ น้ำยา อะไหล่ และอุปกรณ์โรงงานอุตสาหกรรม พร้อมคำแนะนำสำหรับการเลือกใช้งานจริง
        </p>
      </header>

      <AppCardItems :items="productItems" class="mt-8" />
    </div>
  </section>
</template>

<script setup lang="ts">
const productItems = [
  {
    title: "ตู้ไฟและระบบควบคุม",
    description: "ตู้ไฟชุบงานมือ 1 และมือ 2 พร้อมอุปกรณ์ควบคุมสำหรับงานชุบหลายขนาด",
    icon: "heroicons:bolt",
  },
  {
    title: "น้ำยาและเคมีงานชุบ",
    description: "น้ำยาชุบนิกเกิล ทองแดง ซิงค์ และเคมีที่เกี่ยวข้องกับกระบวนการชุบ",
    icon: "heroicons:beaker",
  },
  {
    title: "อุปกรณ์โรงงาน",
    description: "เครื่องดูดอากาศ เบรคเกอร์ อะไหล่ และอุปกรณ์สนับสนุนงานหน้าโรงงาน",
    icon: "heroicons:wrench-screwdriver",
  },
];

useSeoMeta({
  title: "สินค้าของเรา | ศรีวิชัยโลหะกิจ",
});
</script>
