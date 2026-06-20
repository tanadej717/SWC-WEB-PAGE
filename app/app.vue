<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Inline script ใน <head> apply theme ก่อน first paint
// ป้องกัน CLS จาก color shift หลัง JS hydration
// สำคัญ: ต้องเป็น plain string ไม่ใช่ function reference
// เพื่อให้ Nuxt inject เป็น <script> tag inline จริงๆ
useHead({
  script: [
    {
      // innerHTML แทน src เพื่อ inline ใน <head> ก่อน render
      innerHTML: `(function(){try{var t=localStorage.getItem('swc-theme');var d=document.documentElement;if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)){d.dataset.theme='dark';d.style.colorScheme='dark';}else{d.dataset.theme='light';d.style.colorScheme='light';}}catch(e){}})();`,
      // tagPosition: 'head' และไม่มี defer/async — ต้องรันก่อน paint
      tagPosition: 'head',
    },
  ],
});
</script>
