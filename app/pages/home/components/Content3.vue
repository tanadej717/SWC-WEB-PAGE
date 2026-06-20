<template>
  <section class="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="location-title">
    <div class="mx-auto max-w-7xl">
      <header class="mb-8 grid gap-4 border-t border-(--swc-border) pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p class="text-sm font-semibold uppercase text-(--swc-main-color)">Location</p>
          <h2 id="location-title" class="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">แผนที่ร้าน</h2>
        </div>
        <p class="max-w-3xl leading-8 text-(--swc-text-muted) lg:justify-self-end">
          ติดต่อเข้ามาก่อนเดินทางเพื่อให้ทีมงานเตรียมข้อมูลสินค้าและคำแนะนำที่เหมาะกับงานของคุณ
        </p>
      </header>

      <div class="border border-(--swc-border) bg-(--swc-map-frame)">
        <div class="aspect-[16/10] w-full lg:aspect-[21/9]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.3457299613772!2d100.4085832!3d13.6253903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2bc8de8d82249%3A0x9381f1050604d898!2z4Lio4Lij4Li14Lin4Li04LiK4Lix4Lii4LmC4Lil4Lir4Liw4LiB4Li04LiIIOC4geC4suC4o-C4iuC4uOC4mg!5e0!3m2!1sen!2sth!4v1772295661818!5m2!1sen!2sth"
            class="h-full w-full transition duration-300"
            :class="{ 'grayscale invert hue-rotate-180 contrast-125 brightness-90': isDark }"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { isDark } = useTheme();
</script>
