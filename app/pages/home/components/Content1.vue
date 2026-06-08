<template>
    <div class="mx-auto grid  grid-cols-1 gap-4 px-4 sm:gap-6 sm:px-6 md:grid-cols-2 md:items-stretch">
        <div class="overflow-hidden rounded-xl border border-(--swc-border) bg-(--swc-surface)">
            <NuxtImg
src="/web-800x800.jpg" alt="อุปกรณ์และตู้ไฟสำหรับงานชุบ"
                class="h-100 min-h-64 w-full object-cover" />
        </div>
        <article class="flex flex-col  rounded-xl p-5 ">
            <header>
                <h2 id="product-highlight-title" class="text-xl font-semibold leading-tight sm:text-2xl md:text-3xl">
                    ผู้เชี่ยวชาญงานชุบครบวงจร
                </h2>
            </header>

            <p class="mt-4 text-sm leading-7 text-(--swc-text-muted) sm:text-base">
                SWC จำหน่ายอุปกรณ์งานชุบอุตสาหกรรม ตู้ไฟชุบงานมือ 1–มือ 2 น้ำยาชุบนิกเกิล ทองแดง ซิงค์อุปกรณ์โรงงาน
                เครื่องดูดอากาศ เบรคเกอร์ และอะไหล่พร้อมให้คำปรึกษาการเปิดโรงชุบทุกขนาดโดยทีมช่างผู้มีประสบการณ์มากกว่า
                20 ปี
            </p>
            <ol class="mt-2 list-decimal list-inside">
                <li class="mx-5 mt-4 flex items-start gap-3 text-sm leading-7 text-(--swc-text-muted) sm:text-base">
                    <span class="mt-1 flex h-6 w-6 items-center justify-center text-(--swc-main-color)">
                        <Icon name="heroicons:check-circle" class="text-5xl" />
                    </span>
                    ออกแบบระบบไฟงานชุบ
                </li>
                <li class="mx-5 mt-4 flex items-start gap-3 text-sm leading-7 text-(--swc-text-muted) sm:text-base">
                    <span class="mt-1 flex h-6 w-6 items-center justify-center text-(--swc-main-color)">
                        <Icon name="heroicons:check-circle" class="text-5xl" />
                    </span>
                    คำนวณกระแสตามขนาดบ่อชุบและอุปกรณ์ที่ใช้
                </li>
                <li class="mx-5 mt-4 flex items-start gap-3 leading-7 text-(--swc-text-muted) sm:text-base">
                    <span class="mt-1 flex h-6 w-6 items-center justify-center text-(--swc-main-color)">
                        <Icon name="heroicons:check-circle" class="text-5xl" />
                    </span>
                    ติดตั้งและเทสระบบหน้างาน
                </li>
                <li class="mx-5 mt-4 flex items-start gap-3 text-sm leading-7 text-(--swc-text-muted) sm:text-base">
                    <span class="mt-1 flex h-6 w-6 items-center justify-center text-(--swc-main-color)">
                        <Icon name="heroicons:check-circle" class="text-5xl" />
                    </span>
                    บริการหลังการขาย
                </li>
            </ol>
        </article>
    </div>
</template>