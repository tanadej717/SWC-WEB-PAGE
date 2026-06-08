<template>
  <section class="bg-(--swc-card) px-4 py-12 text-(--swc-text-color)">
    <div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_1.2fr] md:items-start">
      <header>
        <p class="text-sm font-semibold uppercase text-(--swc-main-color)">Contact</p>
        <h1 class="mt-3 text-3xl font-semibold leading-tight md:text-4xl">ติดต่อเรา</h1>
        <div class="mt-6 space-y-3 leading-7 text-(--swc-text-muted)">
          <p>Email: swc.service725@gmail.com</p>
          <p>Tel: 061-676-6837</p>
          <a
            href="https://www.facebook.com/swclohakit"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex text-(--swc-main-color) underline underline-offset-4"
          >
            Facebook: ศรีวิชัยโลหะกิจ
          </a>
        </div>
      </header>

      <Content3 />
    </div>
  </section>
</template>

<script setup lang="ts">
import Content3 from '../home/components/Content3.vue';

useSeoMeta({
  title: "ติดต่อเรา | ศรีวิชัยโลหะกิจ",
});
</script>
