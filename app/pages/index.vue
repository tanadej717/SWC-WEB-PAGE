<template>
  <div class="bg-(--swc-card) text-(--swc-text-color)">
    <HeroContent />
    <Content1 />
    <Content2 />
    <AppHistorybar />
    <Content3 />
  </div>
</template>

<script setup lang="ts">
import Content1 from './home/components/Content1.vue';
import Content2 from './home/components/Content2.vue';
import Content3 from './home/components/Content3.vue';
import HeroContent from './home/components/HeroContent.vue';

const title = "ศรีวิชัยโลหะกิจ | จำหน่ายอุปกรณ์งานชุบ ตู้ไฟชุบ น้ำยาชุบ และอุปกรณ์โรงชุบ";
const description =
  "ศรีวิชัยโลหะกิจ จำหน่ายอุปกรณ์งานชุบ ตู้ไฟชุบมือหนึ่งและมือสอง น้ำยาชุบนิกเกิล น้ำยาชุบทองแดง อะไหล่ตู้ไฟ เบรคเกอร์ เครื่องดูดอากาศ และอุปกรณ์โรงชุบ พร้อมให้คำปรึกษาเปิดโรงชุบและออกแบบระบบไฟงานชุบ";

useSeoMeta({
  title,
  description,
  keywords:
    "อุปกรณ์งานชุบ,จำหน่ายอุปกรณ์งานชุบ,ตู้ไฟชุบ,ตู้ไฟชุบมือสอง,น้ำยาชุบ,น้ำยาชุบนิกเกิล,น้ำยาชุบทองแดง,อุปกรณ์โรงชุบ,ออกแบบระบบไฟงานชุบ,คำนวณกระแสงานชุบ,ให้คำปรึกษาเปิดโรงชุบ,อะไหล่ตู้ไฟชุบ,เบรคเกอร์งานชุบ,เครื่องดูดอากาศโรงงาน,ศรีวิชัยโลหะกิจ,SWC โลหะกิจ",
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
});
</script>
