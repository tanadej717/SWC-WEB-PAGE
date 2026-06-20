<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { initTheme } = useTheme();

if (import.meta.client) {
  initTheme();
}
</script>
