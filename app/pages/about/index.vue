<template>
  <div />
</template>

<script setup lang="ts">
// หน้านี้ยังไม่มีเนื้อหา — redirect ไปหน้าแรกเพื่อไม่ให้ Google index หน้าว่าง
definePageMeta({ layout: false });
await navigateTo('/', { redirectCode: 301 });
</script>
