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
          <!-- Lazy-load facade: แสดง placeholder จนกว่า user จะคลิก
               ป้องกัน Google Maps iframe จาก blocking LCP -->
          <button
            v-if="!mapLoaded"
            type="button"
            class="flex h-full w-full flex-col items-center justify-center gap-4 bg-(--swc-surface) text-(--swc-text-color)"
            aria-label="คลิกเพื่อโหลดแผนที่ Google Maps ของศรีวิชัยโลหะกิจ"
            @click="loadMap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-14 w-14 text-(--swc-main-color)"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.324 3.5 8.327a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-base font-semibold">คลิกเพื่อดูแผนที่</span>
            <span class="text-sm text-(--swc-text-muted)">ศรีวิชัยโลหะกิจ — กรุงเทพฯ</span>
          </button>

          <!-- iframe โหลดเฉพาะหลัง user คลิก เพื่อไม่ให้กระทบ LCP -->
          <!-- will-change: transform ทำให้ browser สร้าง compositing layer ล่วงหน้า
               ป้องกัน repaint เมื่อ filter เปลี่ยนตาม dark mode -->
          <iframe
            v-else
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.3457299613772!2d100.4085832!3d13.6253903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2bc8de8d82249%3A0x9381f1050604d898!2z4Lio4Lij4Li14Lin4Li04LiK4Lix4Lii4LmC4Lil4Lir4Liw4LiB4Li04LiIIOC4geC4suC4o-C4iuC4uOC4mg!5e0!3m2!1sen!2sth!4v1772295661818!5m2!1sen!2sth"
            title="แผนที่ตั้งของร้านศรีวิชัยโลหะกิจ"
            class="h-full w-full"
            :class="{ 'grayscale invert hue-rotate-180 contrast-125 brightness-90': isDark }"
            style="border: 0; will-change: transform;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// mapLoaded ควบคุมว่าจะแสดง facade หรือ iframe จริง
// iframe จะไม่โหลดเลยจนกว่า user จะกด → ป้องกัน LCP 35.7s
const mapLoaded = ref(false)

const loadMap = (): void => {
  mapLoaded.value = true
}

const { isDark } = useTheme()
</script>
