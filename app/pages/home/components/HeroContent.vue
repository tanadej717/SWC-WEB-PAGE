<template>
    <section class="relative isolate overflow-hidden" aria-labelledby="hero-title">
    <NuxtImg
src="/web-hero-braner-1280x720.jpg" alt="SWC Hero Background"
      class="absolute inset-0 -z-20 h-full w-full object-cover" />

    <div class="absolute inset-0 -z-10 bg-black/35 dark:bg-black/60"/>
    <div
      class="absolute inset-0 -z-10 bg-linear-to-r from-black/45 via-black/30 to-black/50 dark:from-black/75 dark:via-black/50 dark:to-black/80"/>

    <article class="mx-auto flex min-h-screen items-center px-6 md:px-10">
      <header class="flex w-full flex-col items-center gap-6">
        <h1
id="hero-title"
          class=" text-center text-3xl font-light leading-tight tracking-wide text-white sm:text-4xl md:text-5xl">
          เลือกสินค้าที่ตอบโจทย์ ธุรกิจของคุณ
          <br >
          ที่ <span class=" font-bold text-(--swc-main-color)">swc</span>
        </h1>
        <p class="text-center mt-4 text-sm text-white/80 sm:text-base">
          โซลูชันที่เหมาะกับงานติดตั้งและระบบตู้คอนโทรลสำหรับธุรกิจของคุณ
        </p>
      </header>
    </article>
  </section>
</template>