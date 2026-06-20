# `.claude/` — Agents & Skills Usage Guide

โฟลเดอร์นี้เก็บ **agents** และ **skills** เฉพาะของโปรเจค
Claude Code จะโหลดอัตโนมัติเมื่อเปิด session ในไดเรกทอรีนี้

```
.claude/
├── agents/        # sub-agent definitions (5 ตัว)
├── skills/        # knowledge skills (25 ตัว)
└── settings.local.json
```

---

## 1. Agents — เรียกอย่างไร

Agent คือ **sub-agent** ที่มี role/system prompt ของตัวเอง เรียกได้ 2 วิธี:

### วิธี A: ใช้ `@<agent-name>` ในข้อความ (แนะนำ)
```
@review-agent /review app/pages/installment/list.vue
@test-agent /goal
@doc-agent /update
@fix-agent /plan
@test-review-agent /test-review app/unittest/nuxt/***.test.ts
```

### วิธี B: ใช้ slash command อย่างเดียว (ถ้า command ไม่ชนกัน)
```
/review app/pages/***
/goal
/update
/plan
```

### Agent ทั้ง 5 ตัวและเมื่อไหร่ควรเรียก

| Agent | ใช้ตอนไหน | Slash Commands |
|---|---|---|
| **`@review-agent`** | รีวิวโค้ด เน้น performance / Clean Code / karpathy-guidelines | `/review`, `/check-guidelines` |
| **`@test-agent`** | เขียน/รัน unit test, ดัน coverage ให้ถึง 100% | `/goal`, `/coverage` |
| **`@doc-agent`** | อัปเดต/สร้างเอกสารใน `document/` | `/update`, `/generate` |
| **`@fix-agent`** | วางแผนและแก้บั๊ก (ต้อง confirm ก่อนแก้ไฟล์) | `/plan`, `/apply` |
| **`@test-review-agent`** | ทำความสะอาด test cases (minimal/surgical edits) | `/test-review`, `/test-clean` |

> ⚠️ `@fix-agent` และ `@test-review-agent` **ห้ามรัน git commands** — version control เป็นหน้าที่ user เอง

---

## 2. Skills — เรียกอย่างไร

Skill คือ **knowledge pack** (ไม่ใช่ agent) ที่ Claude อ่านเป็น context

### วิธีเรียก

**A. อัตโนมัติ** — Claude จะอ่าน skill description ทั้งหมดและตัดสินใจเรียกเองเมื่อเกี่ยวข้อง

**B. สั่งตรงด้วย `/<skill-name>`** — ผู้ใช้พิมพ์ในแชต เช่น:
```
/project-context
/list-page-pattern
/my-date-picker-component
```

**C. Agent เรียกผ่าน Skill tool** — agent ของเราถูก config ให้เรียก skill ที่เกี่ยวข้องอัตโนมัติก่อนทำงาน (ดู section 3)

### Skill ที่มีในโปรเจค

**Foundation (อ่านก่อนเริ่มทุกงาน):**
- `project-context` — โครงสร้างโปรเจค, ไฟล์ generated, ที่อยู่ของ test/component/state, กฎ API/auth

**General patterns:**
- `implementation-guide` — overview & dev workflow
- `list-page-pattern` — pattern สำหรับหน้า list (อ้าง `claim-management/list.vue`)
- `error-handling` — error handling locations
- `permission-directive` — `v-permission` global directive
- `ai-test-case-guide` — template เขียน Vitest spec

**Components (15):** `loader-component`, `my-address-component`, `my-breadcrumb-component`, `my-button-dropdown-component`, `my-confirm-dialog-component`, `my-date-picker-component`, `my-filter-card-component`, `my-history-sidebar-component`, `my-navbar-component`, `my-sidebar-component`, `my-skeleton-component`, `my-status-dialog-component`, `my-table-header-sort-component`, `pagination-component`, `table-empty-component`

**Dialogs (4):** `dialog-add-remark-component`, `dialog-initializer-component`, `dialog-popup-component`, `dialog-upload-file-component`

---

## 3. Agent ↔ Skill mapping (อัตโนมัติ)

แต่ละ agent ถูก prompt บังคับให้เรียก skill ที่เกี่ยวข้อง **ก่อน** ทำงานจริง:

| Agent | Skills ที่จะเรียกอัตโนมัติ |
|---|---|
| `@review-agent` | `karpathy-guidelines`, `project-context` + component/pattern skill ตามไฟล์ที่รีวิว |
| `@test-agent` | `project-context`, `ai-test-case-guide` + component/pattern skill ที่ปรากฏในหน้าที่เทสต์ |
| `@doc-agent` | `project-context` + component/pattern skill ที่ตรงกับไฟล์ที่แก้ |
| `@fix-agent` | `karpathy-guidelines`, `project-context` + skill ที่เกี่ยวกับไฟล์ที่จะแก้ |
| `@test-review-agent` | `ai-test-case-guide`, `project-context` + skill ของ subject under test |

ดังนั้น **ผู้ใช้ไม่ต้องสั่งเรียก skill เอง** — แค่เรียก agent แล้ว agent จะดึง knowledge ที่เกี่ยวข้องมาก่อนทำงาน

---

## 4. ตัวอย่าง workflow

### A. เขียน unit test ใหม่ให้หน้า installment/list.vue ให้ครอบคลุม 100%
```
@test-agent /goal
```
→ agent อ่าน `project-context` + `ai-test-case-guide` + `list-page-pattern` + skill ของ component ในหน้านั้น → สร้าง `app/unittest/nuxt/installment-list.test.ts` → รัน `npm run test:coverage`

### B. รีวิวโค้ดที่เพิ่ง commit
```
@review-agent /review
```
→ ได้ Markdown report พร้อม `Score: X/100` แบ่ง performance / readability / maintainability

### C. Pipeline เต็ม (test → review → fix loop)
```
@test-agent /goal
@test-review-agent /test-review
# ถ้า branch coverage < 90% หรือมีโค้ดที่ test ไม่ได้
@fix-agent /plan
# ยืนยันแผน
@fix-agent /apply
# วน Phase 1 ใหม่
@test-agent /goal
```

### D. แก้บั๊กที่ review-agent หาเจอ
```
@fix-agent /plan        # ดูแผนก่อน
@fix-agent /apply       # ยืนยันแล้วค่อยแก้
```

### E. อัปเดตเอกสารหลังแก้โค้ด
```
@doc-agent /update
```

---

## 5. แก้/เพิ่ม agent หรือ skill

- **เพิ่ม skill**: สร้างโฟลเดอร์ `skills/<name>/SKILL.md` ที่มี frontmatter:
  ```markdown
  ---
  name: <name>
  description: <ใช้ทำอะไร — Claude อ่านอันนี้เพื่อตัดสินใจเรียก>
  ---
  <เนื้อหา>
  ```
- **เพิ่ม agent**: สร้าง `agents/<name>.md` ที่มี frontmatter `name`, `description`, `tools` แล้วตามด้วย system prompt
- **สำคัญ**: ไฟล์ต้องเป็น UTF-8 **ไม่มี BOM** มิฉะนั้น Claude จะ parse frontmatter ไม่ได้

---

## 6. หมายเหตุ

- Skill description คือสิ่งที่ Claude ใช้ตัดสินใจเรียก — เขียนให้ specific
- ถ้า agent ไม่เรียก skill ที่ควรเรียก ให้แก้ section "Skills you MUST consult" ใน agent markdown
- ถ้าเปลี่ยน `document/CLAUDE.md` หรือ `document/IMPLEMENTATION_GUIDE_AI.md` ต้อง regenerate `skills/project-context/SKILL.md` ให้ sync
