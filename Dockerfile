# syntax=docker/dockerfile:1

# ---------- Stage 1: build ----------
# alpine = base image เล็กที่สุด, 22 = LTS (Nuxt 4 ต้องการ Node >= 18.12, เลือก LTS เพื่อความเสถียร)
FROM node:22-alpine AS build

# patch OS-level packages ของ alpine ให้เป็น version ล่าสุด → ลด CVE ที่ค้างใน base image
RUN apk upgrade --no-cache

WORKDIR /app

# Copy เฉพาะ manifest ก่อน install → Docker cache layer นี้ไว้
# ตราบใดที่ package*.json ไม่เปลี่ยน, `npm ci` จะไม่ run ซ้ำตอน build รอบถัดไป (เร็วขึ้นมาก)
COPY package.json package-lock.json ./

# ปิด postinstall ชั่วคราว: script `postinstall: nuxt prepare` ต้องการ source code
# ซึ่งยังไม่ถูก copy ในขั้นนี้ → เลื่อนไป prepare ตอน build แทน
RUN npm ci --ignore-scripts

# Copy source ที่เหลือหลัง install เพื่อรักษา cache layer ของ dependencies
COPY . .

# Build SSR output ไปที่ .output/ (nitro node-server preset เป็น default)
ENV NODE_ENV=production
RUN npm run build


# ---------- Stage 2: runtime ----------
# image runtime ใหม่ทั้งหมด: ไม่มี source, ไม่มี node_modules ของ build, มีแค่ .output → image เล็ก
FROM node:22-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production
# Nitro bind 0.0.0.0 เป็น default อยู่แล้ว แต่ระบุชัดเพื่อความแน่นอนใน container network
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000
ENV PORT=3000

# Copy เฉพาะ build output — self-contained, รวม node_modules ที่จำเป็นของ runtime ไว้ใน .output แล้ว
COPY --from=build /app/.output ./.output

# node:alpine มี user `node` (uid 1000) มาให้ — รัน non-root เพื่อลด attack surface
USER node

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
