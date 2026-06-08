<template>
  <section class="bg-(--swc-card) px-4 py-12 text-(--swc-text-color)">
    <div class="mx-auto max-w-6xl">
      <header class="max-w-3xl">
        <p class="text-sm font-semibold uppercase text-(--swc-main-color)">Services</p>
        <h1 class="mt-3 text-3xl font-semibold leading-tight md:text-4xl">บริการของเรา</h1>
        <p class="mt-4 leading-7 text-(--swc-text-muted)">
          ให้คำปรึกษา ออกแบบระบบ ติดตั้ง และดูแลหลังการขายสำหรับโรงชุบขนาดเล็กถึงขนาดใหญ่
        </p>
      </header>

      <AppCardItems :items="serviceItems" class="mt-8" />
    </div>
  </section>
</template>

<script setup lang="ts">
const serviceItems = [
  {
    title: "ออกแบบระบบไฟงานชุบ",
    description: "วางระบบให้เหมาะกับชนิดงาน ขนาดบ่อ และกำลังการผลิตที่ต้องการ",
    icon: "heroicons:clipboard-document-check",
  },
  {
    title: "คำนวณกระแสและอุปกรณ์",
    description: "ช่วยเลือกตู้ไฟและอุปกรณ์ให้สัมพันธ์กับพื้นที่ชุบและรูปแบบการใช้งาน",
    icon: "heroicons:calculator",
  },
  {
    title: "ติดตั้งและดูแลหน้างาน",
    description: "ติดตั้งระบบ ทดสอบการทำงาน และให้คำแนะนำการใช้งานหลังส่งมอบ",
    icon: "heroicons:check-badge",
  },
];

useSeoMeta({
  title: "บริการของเรา | ศรีวิชัยโลหะกิจ",
});
</script>
