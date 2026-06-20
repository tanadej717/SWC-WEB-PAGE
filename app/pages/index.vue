<template>
  <div>
    <HeroContent />
    <Content1 />
    <Content2 />
    <Content3 />
  </div>
</template>

<script setup lang="ts">
import Content1 from './home/components/Content1.vue';
import Content2 from './home/components/Content2.vue';
import Content3 from './home/components/Content3.vue';
import HeroContent from './home/components/HeroContent.vue';

useSeoPage({
  title: 'ศรีวิชัยโลหะกิจ | จำหน่ายอุปกรณ์งานชุบ ตู้ไฟชุบ น้ำยาชุบ และอุปกรณ์โรงชุบ',
  description:
    'ศรีวิชัยโลหะกิจ จำหน่ายอุปกรณ์งานชุบ ตู้ไฟชุบมือหนึ่งและมือสอง น้ำยาชุบนิกเกิล น้ำยาชุบทองแดง อะไหล่ตู้ไฟ เบรคเกอร์ เครื่องดูดอากาศ และอุปกรณ์โรงชุบ พร้อมให้คำปรึกษาเปิดโรงชุบและออกแบบระบบไฟงานชุบ',
  path: '/',
  ogImage: '/web-hero-braner-1280x720.jpg',
});

useSeoMeta({
  keywords:
    'อุปกรณ์งานชุบ,จำหน่ายอุปกรณ์งานชุบ,ตู้ไฟชุบ,ตู้ไฟชุบมือสอง,น้ำยาชุบ,น้ำยาชุบนิกเกิล,น้ำยาชุบทองแดง,อุปกรณ์โรงชุบ,ออกแบบระบบไฟงานชุบ,คำนวณกระแสงานชุบ,ให้คำปรึกษาเปิดโรงชุบ,อะไหล่ตู้ไฟชุบ,เบรคเกอร์งานชุบ,เครื่องดูดอากาศโรงงาน,ศรีวิชัยโลหะกิจ,SWC โลหะกิจ',
});

// LocalBusiness JSON-LD schema
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'ศรีวิชัยโลหะกิจ',
        alternateName: 'SWC Lohakit',
        url: 'https://swclohakit.com',
        telephone: '+66616766837',
        email: 'swc.service725@gmail.com',
        image: 'https://swclohakit.com/web-800x800.jpg',
        sameAs: ['https://www.facebook.com/swclohakit'],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        description:
          'จำหน่ายอุปกรณ์งานชุบ ตู้ไฟชุบ น้ำยาชุบนิกเกิล น้ำยาชุบทองแดง อะไหล่ตู้ไฟ เบรคเกอร์ เครื่องดูดอากาศ และอุปกรณ์โรงชุบ พร้อมให้คำปรึกษาเปิดโรงชุบ',
        priceRange: '฿฿',
        currenciesAccepted: 'THB',
        areaServed: 'TH',
      }),
    },
  ],
});
</script>
