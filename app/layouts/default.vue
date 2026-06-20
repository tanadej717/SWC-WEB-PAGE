<template>
    <div class="min-h-screen flex flex-col">
        <MyHeader />
        <main class="flex-1 container mx-auto px-4 py-6">
            <slot />
        </main>
        <MyFooter />
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "ศรีวิชัยโลหะกิจ | จำหน่ายอุปกรณ์การชุบ ตู้ไฟชุบงานมือ 2 น้ำยาชุบ และอุปกรณ์โรงงาน",
    description:
        "ศรีวิชัยโลหะกิจ จำหน่ายอุปกรณ์การชุบ ตู้ไฟชุบงานมือ 2 น้ำยาชุบนิกเกิล ทองแดง โลหะชุบ อุปกรณ์โรงงานอุตสาหกรรม เครื่องดูดอากาศ อะไหล่ตู้ไฟ เบรคเกอร์ พร้อมให้คำปรึกษาเปิดโรงชุบขนาดเล็กถึงขนาดใหญ่ โดยทีมช่างและผู้มีประสบการณ์มากกว่า 20 ปี",
    keywords:
        "จำหน่ายอุปกรณ์การชุบ,ตู้ไฟชุบงานมือ 2,น้ำยาชุบ,นิกเกิล,ทองแดง,โลหะชุบ,อุปกรณ์โรงงานอุตสาหกรรม,เครื่องดูดอากาศ,อะไหล่ตู้ไฟ,เบรคเกอร์,ให้คำปรึกษาเปิดโรงชุบ,ศรีวิชัยโลหะกิจ",
    ogTitle: "ศรีวิชัยโลหะกิจ | อุปกรณ์การชุบและโซลูชันโรงชุบครบวงจร",
    ogDescription:
        "ให้คำปรึกษาและจำหน่ายอุปกรณ์การชุบครบวงจร ตั้งแต่โรงชุบขนาดเล็กถึงขนาดใหญ่ โดยทีมงานประสบการณ์กว่า 20 ปี",
    ogType: "website",
    ogUrl: "https://www.facebook.com/swclohakit",
    ogImage: "/logo.svg",
    twitterCard: "summary_large_image",
    twitterImage: "/logo.svg",
});

useHead({
    link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
});
</script>
