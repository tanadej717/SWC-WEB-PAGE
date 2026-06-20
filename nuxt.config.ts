// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', '~/assets/css/variables.css', '~/assets/css/custom.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
  ],

  // mode: 'svg' → icon render เป็น inline SVG ตั้งแต่ SSR
  // ป้องกัน CLS จาก icon ที่ขนาด 0 ก่อน JS hydration
  icon: {
    mode: 'svg',
  },

  // Image optimization defaults — ใช้ทั้ง site โดยไม่ต้องระบุซ้ำแต่ละ NuxtImg
  // screens ใช้กับ sizes prop เพื่อ generate srcset ที่ถูกต้อง
  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },

  // Compress static assets (gzip/brotli) — ลด transfer size ทุกไฟล์
  nitro: {
    compressPublicAssets: true,
  },

  // Preconnect + โหลด Google Fonts แบบ non-blocking
  // pattern: preload as="style" + onload trick ทำให้ font ไม่ block first paint
  app: {
    head: {
      link: [
        // 1) ลด DNS+TCP latency ล่วงหน้า
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        // 2) โหลด font stylesheet แบบ non-render-blocking
        //    media="print" ทำให้ browser โหลดโดยไม่ block render
        //    onload เปลี่ยน media กลับเป็น "all" หลังโหลดสำเร็จ
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&display=swap',
          media: 'print',
          onload: "this.media='all'",
        },
      ],
      // noscript fallback สำหรับ user ที่ปิด JS
      noscript: [
        {
          innerHTML: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&display=swap">',
        },
      ],
    },
  },
})
