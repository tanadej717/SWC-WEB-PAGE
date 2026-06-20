<template>
  <!-- sticky + h-16 คงที่เสมอ → reserve space ตั้งแต่ SSR กัน CLS
       backdrop-blur/พื้นหลังโปร่งแสง เปิดเฉพาะตอน scroll ด้วย transition-colors -->
  <header
    class="sticky top-0 z-50 border-b transition-colors"
    :class="scrolled
      ? 'bg-(--swc-header-bg) backdrop-blur-md shadow-sm'
      : 'bg-(--swc-surface)'"
    style="border-color: var(--swc-border);"
  >
    <div class="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
      <!-- โลโก้ + ชื่อแบรนด์ + tagline -->
      <NuxtLink to="/" class="group flex items-center gap-3" @click="menuOpen = false">
        <div
          class="flex h-11 w-11 items-center justify-center rounded-xl border border-(--swc-red-900) bg-(--swc-red-800) text-(--swc-white) text-[0.65rem] font-bold tracking-widest shadow-md transition-colors group-hover:bg-(--swc-red-900)"
        >
          S.W.C
        </div>
        <div class="flex flex-col leading-tight">
          <span class="text-base font-bold text-(--swc-red-900) sm:text-lg">ศรีวิชัยโลหะกิจ</span>
          <span class="hidden text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-(--swc-text-muted) sm:block">
            Service • Quality • Care
          </span>
        </div>
      </NuxtLink>

      <!-- เมนู desktop — active indicator เป็น underline animated (scaleX, composited) -->
      <nav class="hidden items-center gap-1 lg:flex" aria-label="เมนูหลัก">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="group relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-(--swc-red-900)"
          :class="isActive(link.to)
            ? 'text-(--swc-red-900)'
            : 'text-(--swc-text-color)'"
        >
          {{ link.label }}
          <!-- underline: scaleX 0→1 บน active/hover (transform = composited, ไม่ trigger layout) -->
          <span
            class="pointer-events-none absolute inset-x-3 -bottom-px h-0.5 origin-center rounded-full bg-(--swc-red-700) transition-transform duration-200 ease-out group-hover:scale-x-100"
            :class="isActive(link.to) ? 'scale-x-100' : 'scale-x-0'"
          />
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2 sm:gap-3">
        <!-- CTA เบอร์โทร — เด่นทางขวา (ซ่อนบนจอเล็กเพื่อพื้นที่) -->
        <a
          href="tel:0616766837"
          class="hidden items-center gap-2 rounded-full bg-(--swc-red-800) px-4 py-2 text-sm font-semibold text-(--swc-white) shadow-sm transition-colors hover:bg-(--swc-red-900) md:inline-flex"
        >
          <Icon name="heroicons:phone" style="width:1.05rem;height:1.05rem;display:block;" />
          <span>061-676-6837</span>
        </a>

        <!-- Dark mode toggle — sun/moon สลับนุ่มนวล (opacity/transform = composited) -->
        <button
          type="button"
          class="relative inline-flex h-9 w-9 items-center justify-center rounded-full border text-(--swc-red-900) transition-colors hover:bg-(--swc-surface-2)"
          style="border-color: var(--swc-border); background: var(--swc-card);"
          :aria-label="isDark ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด'"
          :aria-pressed="isDark"
          data-theme-toggle
          @click="toggleTheme"
        >
          <Icon
            name="heroicons:sun-solid"
            class="absolute transition-transform duration-300"
            :class="isDark ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'"
            style="width:1.1rem;height:1.1rem;display:block;"
          />
          <Icon
            name="heroicons:moon-solid"
            class="absolute transition-transform duration-300"
            :class="isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'"
            style="width:1.1rem;height:1.1rem;display:block;"
          />
        </button>

        <!-- Hamburger — animate เป็น X ด้วย transform เท่านั้น -->
        <button
          type="button"
          class="relative inline-flex h-9 w-9 items-center justify-center rounded-md border text-(--swc-red-900) transition-colors hover:bg-(--swc-surface-2) lg:hidden"
          style="border-color: var(--swc-border); background: var(--swc-card);"
          :aria-label="menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="sr-only">เมนู</span>
          <span class="relative block h-4 w-5">
            <span
              class="absolute left-0 block h-0.5 w-5 rounded-full bg-(--swc-red-900) transition-transform duration-300"
              :class="menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'"
            />
            <span
              class="absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-(--swc-red-900) transition-opacity duration-200"
              :class="menuOpen ? 'opacity-0' : 'opacity-100'"
            />
            <span
              class="absolute left-0 block h-0.5 w-5 rounded-full bg-(--swc-red-900) transition-transform duration-300"
              :class="menuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'"
            />
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile menu — v-show แทน v-if เพื่อให้ height เป็น 0 ตั้งแต่ SSR กัน CLS
         slide-down ด้วย transform/opacity (composited) -->
    <div
      v-show="menuOpen"
      id="mobile-menu"
      class="border-t bg-(--swc-surface-2) lg:hidden"
      style="border-color: var(--swc-border);"
    >
      <nav class="container mx-auto flex flex-col px-4 py-2" aria-label="เมนูมือถือ">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-(--swc-surface)"
          :class="isActive(link.to)
            ? 'text-(--swc-red-900)'
            : 'text-(--swc-text-color)'"
          @click="menuOpen = false"
        >
          <span>{{ link.label }}</span>
          <Icon
            v-show="isActive(link.to)"
            name="heroicons:chevron-right"
            class="text-(--swc-red-700)"
            style="width:1.1rem;height:1.1rem;display:block;"
          />
        </NuxtLink>

        <!-- CTA โทรในเมนูมือถือ -->
        <a
          href="tel:0616766837"
          class="mt-2 mb-1 flex items-center justify-center gap-2 rounded-full bg-(--swc-red-800) px-4 py-3 text-base font-semibold text-(--swc-white) transition-colors hover:bg-(--swc-red-900)"
          @click="menuOpen = false"
        >
          <Icon name="heroicons:phone" style="width:1.15rem;height:1.15rem;display:block;" />
          <span>โทร 061-676-6837</span>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// ใช้ composable กลางแทน local state ซ้ำซ้อน
// ทำให้ theme sync กับทุก component ที่ใช้ useTheme()
const { isDark, toggleTheme } = useTheme();

// ปิด mobile menu เป็น default — ป้องกัน CLS จาก menu ที่เปิดค้างใน SSR
const menuOpen = ref(false);

// route ปัจจุบันสำหรับ active link indicator
const route = useRoute();

interface NavLink {
  readonly to: string;
  readonly label: string;
}

// หน้า /about redirect 301 → / ดังนั้น "รู้จักพวกเรา" ชี้ที่ / ถูกต้อง
const navLinks: readonly NavLink[] = [
  { to: '/', label: 'รู้จักพวกเรา' },
  { to: '/portfolio', label: 'ผลงานของเรา' },
  { to: '/products', label: 'สินค้าของเรา' },
  { to: '/services', label: 'การบริการ' },
  { to: '/contact', label: 'ติดต่อ' },
];

// home ต้อง exact match, หน้าอื่น match prefix เพื่อรองรับ nested route ในอนาคต
const isActive = (to: string): boolean => {
  if (to === '/') {
    return route.path === '/';
  }
  return route.path === to || route.path.startsWith(`${to}/`);
};

// scrolled state คุม backdrop-blur — passive listener + cleanup กัน memory leak
const scrolled = ref(false);

const onScroll = (): void => {
  scrolled.value = window.scrollY > 8;
};

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>
