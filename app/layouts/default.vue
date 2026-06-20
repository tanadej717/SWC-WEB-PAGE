<template>
    <div class="min-h-screen flex flex-col">
        <MyHeader />
        <!-- container/padding ถูกจัดการโดยแต่ละ page แล้ว — layout ทำหน้าที่แค่ stretch -->
        <main class="flex-1">
            <slot />
        </main>
        <MyFooter />
    </div>
</template>

<script setup lang="ts">
// Layout ตั้งค่า fallback ขั้นต่ำเท่านั้น — ทุก page override ด้วย useSeoPage() ของตัวเอง
useHead({
    link: [
        // favicon.ico (4KB) แทน logo.svg (16KB) — ลด overhead ต่อทุก request
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    htmlAttrs: { lang: 'th' },
});
</script>
