<template>
  <header class="border-b bg-(--swc-surface) text-(--swc-text-color)" style="border-color: var(--swc-border);">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <NuxtLink to="/" class="group flex items-center gap-3">
        <div
          class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-(--swc-red-900) bg-(--swc-red-800) text-(--swc-white) text-xs font-semibold tracking-widest shadow-md"
        >
          S.W.C
        </div>
        <div class="hidden text-xs font-semibold uppercase tracking-widest text-(--swc-red-900) sm:block">
          Service • Quality • Care
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-6 text-sm md:flex">
        <NuxtLink
          to="/"
          class="border-b-2 border-transparent pb-1 transition hover:border-(--swc-red-700) hover:text-(--swc-red-900)"
          exact-active-class="border-(--swc-red-700) text-(--swc-red-900)"
        >
          รู้จักพวกเรา
        </NuxtLink>
        <NuxtLink
          to="/portfolio"
          class="border-b-2 border-transparent pb-1 transition hover:border-(--swc-red-700) hover:text-(--swc-red-900)"
          exact-active-class="border-(--swc-red-700) text-(--swc-red-900)"
        >
          ผลงานของเรา
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="border-b-2 border-transparent pb-1 transition hover:border-(--swc-red-700) hover:text-(--swc-red-900)"
          exact-active-class="border-(--swc-red-700) text-(--swc-red-900)"
        >
          สินค้าของเรา
        </NuxtLink>
        <NuxtLink
          to="/services"
          class="border-b-2 border-transparent pb-1 transition hover:border-(--swc-red-700) hover:text-(--swc-red-900)"
          exact-active-class="border-(--swc-red-700) text-(--swc-red-900)"
        >
          การบริการ
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="border-b-2 border-transparent pb-1 transition hover:border-(--swc-red-700) hover:text-(--swc-red-900)"
          exact-active-class="border-(--swc-red-700) text-(--swc-red-900)"
        >
          ติดต่อ
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-(--swc-red-900) shadow-sm transition"
          style="border-color: var(--swc-border); background: var(--swc-card);"
          aria-label="Toggle dark mode"
          data-theme-toggle
          @click="toggleTheme"
        >
          <span
            class="h-6 w-6 rounded-full bg-(--swc-gray-300)"
            :class="{ 'bg-(--swc-red-700)': isDark }"
          ></span>
          <span class="hidden sm:inline">Dark Mode</span>
        </button>

        <button
          type="button"
          class="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border text-(--swc-red-900)"
          style="border-color: var(--swc-border); background: var(--swc-card);"
          aria-label="Open menu"
        >
          <span class="block h-0.5 w-4 bg-(--swc-red-900)"></span>
        </button>
      </div>
    </div>

    <div class="md:hidden border-t bg-(--swc-surface-2) px-4 py-3" style="border-color: var(--swc-border);">
      <div class="flex flex-wrap gap-4 text-sm">
        <NuxtLink to="/" class="text-(--swc-red-900)">รู้จักพวกเรา</NuxtLink>
        <NuxtLink to="/portfolio">ผลงานของเรา</NuxtLink>
        <NuxtLink to="/products">สินค้าของเรา</NuxtLink>
        <NuxtLink to="/services">การบริการ</NuxtLink>
        <NuxtLink to="/contact">ติดต่อ</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";

const isDark = ref(false);

onMounted(() => {
  isDark.value = document.documentElement.dataset.theme === "dark";
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.dataset.theme = isDark.value ? "dark" : "light";
};
</script>
