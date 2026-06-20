<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <article
      v-for="item in items"
      :key="item.title"
      class="rounded-xl border border-(--swc-border) bg-(--swc-surface) p-5 text-(--swc-text-color)"
    >
      <!-- width/height กำหนดชัดเพื่อจอง space ก่อน hydration — ป้องกัน CLS -->
      <Icon :name="item.icon" class="text-(--swc-main-color)" style="width:1.875rem;height:1.875rem;display:block;" />
      <h3 class="mt-4 text-lg font-semibold">{{ item.title }}</h3>
      <p class="mt-2 text-sm leading-6 text-(--swc-text-muted)">{{ item.description }}</p>
    </article>
  </div>
</template>

<script setup lang="ts">
import type { CardItemModel } from '~/models/CardItems.model';

defineProps<{
  items: CardItemModel[];
}>();
</script>
