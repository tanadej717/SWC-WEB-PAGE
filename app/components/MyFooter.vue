<template>
  <footer
    class="border-t text-(--swc-text-light)"
    style="border-color: var(--swc-border); background: linear-gradient(to bottom, var(--swc-red-900), var(--swc-red-800), var(--swc-red-900));"
  >
    <div class="container mx-auto px-4 py-10">
      <div class="grid gap-6 md:grid-cols-3">
        <div class="space-y-3">
          <div class="text-lg font-semibold tracking-wide">SWC Company</div>
          <p class="text-sm text-(--swc-gray-100)">
            เราให้บริการและดูแลด้วยมาตรฐานมืออาชีพ ใส่ใจคุณภาพในทุกขั้นตอน
          </p>
        </section>

        <div class="space-y-3">
          <div class="text-sm font-semibold uppercase tracking-wider text-(--swc-gray-100)">ติดต่อเรา</div>
          <div class="space-y-2 text-sm">
            <div class="flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-(--swc-gray-100)"></span>
              <span>Email: swc.service725@gmail.com</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-(--swc-gray-100)"></span>
              <span>Tel: 061-676-6837</span>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <div class="text-sm font-semibold uppercase tracking-wider text-(--swc-gray-100)">เวลาทำการ</div>
          <div class="text-sm text-(--swc-gray-100)">
            จันทร์ - เสาร์: 09:00 - 18:00
          </div>
          <div class="text-sm text-(--swc-gray-100)">อาทิตย์: ปิดทำการ</div>
        </div>
      </div>

      <div
        class="mt-8 flex flex-wrap items-center justify-between gap-3 border-t pt-4 text-xs text-(--swc-gray-100)"
        style="border-color: var(--swc-border);"
      >
        <div>© {{ new Date().getFullYear() }} SWC Company. All rights reserved.</div>
        <div class="flex items-center gap-2">
          <span class="h-1.5 w-1.5 rounded-full bg-(--swc-gray-100)"></span>
          <span>Trusted Service. Quality First.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = useState("current-year", () => new Date().getFullYear());
</script>
