# Codex uchun tasklar — Muhandis AI rasmlarini generatsiya qilish

Bu fayl Codex (yoki boshqa image-gen agent) uchun. Sayt kodi tayyor: har bir rasm uchun aniq **fayl yo‘li** kodda ishlatilgan. Rasm shu yo‘lga qo‘yilishi bilan saytdagi pastel placeholder avtomatik ravishda haqiqiy rasmga almashadi (`components/brand/illustration.tsx` fayl mavjudligini tekshiradi). **Fayl nomlarini o‘zgartirmang.**

## Umumiy qoidalar

1. **Uslub izchilligi eng muhim.** Avval TASK-01 (hero) ni yarating, natijani tekshiring, so‘ng uni keyingi barcha rasmlar uchun *style reference* sifatida ishlating.
2. Format: **PNG**. "Shaffof" deb belgilangan rasmlar — alpha kanal bilan, fonsiz (kerak bo‘lsa background removal qiling). Qolganlari — to‘liq fonli.
3. Har bir PNG’dan keyin WebP versiya ham yarating: `cwebp -q 85 file.png -o file.webp` (bir xil papkada, bir xil nom). Kod hozircha `.png` ni ishlatadi.
4. **Rasmlarda hech qanday matn, harf, raqam, logo yoki brend belgisi bo‘lmasin** (YouTube, Arduino logosi va h.k. ham yo‘q). Matnni sayt o‘zi qo‘shadi.
5. Odamlar: 13–18 yoshli Markaziy Osiyolik o‘smirlar, xushmuomala, kamtarona kiyim (shortik/ochiq kiyim yo‘q). Qizlar va o‘g‘il bolalar teng ko‘rinsin. **Dunyoviy, neytral ko‘rinish: ro‘mol, hijob yoki diniy belgilar yo‘q** (mijoz talabi, batafsil: `CODEX_TASK_NEYTRAL_QAHRAMONLAR.md`). Qo‘llar va barmoqlar to‘g‘ri chizilganini tekshiring.
6. Har bir rasm uchun o‘zbekcha `alt` matnni `public/images/ALT.md` ga yozing (format: `` `yo‘l` — alt matn ``).
7. Tugagach, `public/images` ichidagi barcha fayllar ro‘yxatini va o‘lchamlarini (`sips -g pixelWidth -g pixelHeight` yoki `file`) tekshirib chiqing.

### Har bir promptga qo‘shiladigan STYLE bloki

```
Style: soft 3D clay illustration, rounded friendly shapes, matte materials,
pastel palette — sky blue #3BA7F5, lavender #9B8AFB, blush pink #F5A3C7,
mint #5FD3B0, warm yellow #FFC96B, warm off-white #FBFAF7 —
soft diffused studio lighting, gentle ambient-occlusion shadows, clean composition,
calm and encouraging educational mood, high detail, no text, no letters, no numbers,
no logos, no watermark.
```

Quyidagi promptlarda `{STYLE}` — shu blokni bildiradi.

---

## TASK-01 — Hero illyustratsiyasi
- **Fayl:** `public/images/hero/hero-student-robot.png`
- **O‘lcham:** 1600×1200 · **Fon:** shaffof
- **Prompt:**
  ```
  A teenage girl and a teenage boy (Central Asian, about 15 years old, modest casual clothes)
  sitting at a rounded desk with an open laptop, building a small electronics project:
  a microcontroller board on a breadboard, colorful jumper wires and a glowing LED.
  Next to them floats a small friendly round AI robot assistant with a soft glowing face
  screen, pointing helpfully at the circuit. Small floating icons around them: a light bulb,
  a gear, a lightning bolt, a check mark. Three-quarter view, centered, isolated object group.
  {STYLE}
  ```

## TASK-02 — Logo belgisi
- **Fayl:** `public/images/brand/logo-mark.png` (+ iloji bo‘lsa `logo-mark.svg`)
- **O‘lcham:** 512×512 · **Fon:** shaffof
- **Prompt:**
  ```
  Minimal app icon mark: a rounded squircle with a smooth gradient from sky blue #3BA7F5
  to lavender #9B8AFB to soft pink #F5A3C7. Inside, a simple white abstract shape suggesting
  a circuit trace that forms a gentle "M"-like path with two small round nodes at its ends.
  Flat-ish with very soft 3D depth, clean vector look, centered, no text.
  ```
- Eslatma: kodda hozir SVG logo bor (`components/brand/logo.tsx`). Bu rasm favicon/app-icon uchun.

## TASK-03…07 — 5 ta asosiy imkoniyat (Features)
- **Papka:** `public/images/features/`
- **O‘lcham:** 800×800 · **Fon:** shaffof · bitta markaziy obyekt-sahna, atrofida bo‘sh joy

| Task | Fayl | Prompt (oxiriga `{STYLE}` qo‘shing) |
|---|---|---|
| 03 | `ai-tutor.png` | A friendly round AI robot tutor holding a small glowing map with a winding dotted path and milestone flags (a personal learning roadmap), a speech bubble with a light bulb above it. |
| 04 | `video-lessons.png` | A rounded tablet screen showing a big play button, with a floating quiz card next to it containing three answer pills, one highlighted mint green with a check mark. |
| 05 | `virtual-lab.png` | A breadboard with a microcontroller board, resistors, jumper wires and a glowing LED, a small battery, a magnifying glass hovering over it, floating sparkles. |
| 06 | `ai-tests.png` | A clipboard with a test sheet showing check-box rows, a pencil, and a small bar chart with three pastel bars rising, a tiny robot face sticker on the clipboard. |
| 07 | `gamification.png` | A shiny golden trophy cup with a star, surrounded by floating coins, small stars, a flame badge and a ribbon medal. |

## TASK-08…10 — "Qanday ishlaydi" 3 qadam
- **Papka:** `public/images/steps/` · **O‘lcham:** 600×600 · **Fon:** shaffof

| Task | Fayl | Prompt |
|---|---|---|
| 08 | `organ.png` | An open book with a glowing light bulb rising out of its pages, small floating formula-like abstract symbols (no real letters). {STYLE} |
| 09 | `sinab-kor.png` | Two hands of a teenager placing a jumper wire into a breadboard, an LED lighting up, small spark effect. {STYLE} |
| 10 | `yarat.png` | A small finished DIY robot on wheels with a sensor head, standing proudly on a little pedestal with confetti around it. {STYLE} |

## TASK-11 — Muammo bo‘limi
- **Fayl:** `public/images/problem/curious-student.png`
- **O‘lcham:** 900×900 · **Fon:** shaffof
- **Prompt:**
  ```
  A teenage student sitting in front of a generic video player screen (no brand), looking
  confused and thoughtful, hand on chin, with several floating soft question marks around
  the head. The screen shows an abstract complex circuit diagram. Gentle, empathetic mood,
  not sad. {STYLE}
  ```

## TASK-12 — Maktablar uchun (B2B)
- **Fayl:** `public/images/schools/teacher-dashboard.png`
- **O‘lcham:** 1400×1000 · **Fon:** to‘liq, juda och krem `#FBFAF7` → och ko‘k gradient
- **Prompt:**
  ```
  A bright friendly classroom: a female teacher standing next to a large wall screen showing
  abstract progress charts and colorful bars (no text), several teenage students at desks
  using tablets, small electronics kits on desks. Wide view, cozy, plants by the window. {STYLE}
  ```

## TASK-13…18 — Kurs muqovalari
- **Papka:** `public/images/courses/`
- **O‘lcham:** 1200×750 · **Fon:** to‘liq; har bir kursga o‘z pastel fon rangi (pastda ko‘rsatilgan)
- Kompozitsiya: markazda bitta asosiy obyekt-sahna, chap/o‘ng tomonlarda yengil bo‘sh joy.

| Task | Fayl | Fon rangi | Obyekt |
|---|---|---|---|
| 13 | `elektronika.png` | och ko‘k `#E4F3FE` | resistors, capacitors, LED and a multimeter arranged neatly |
| 14 | `arduino.png` | och mint `#E2F8F1` | a generic microcontroller board (no logo) connected to a servo motor and LED strip |
| 15 | `robototexnika.png` | och lavanda `#EFECFF` | a cute wheeled robot with robotic arm picking up a cube |
| 16 | `fizika.png` | och sariq `#FFF4DC` | a pendulum, magnet with field lines, a prism splitting light into a pastel rainbow |
| 17 | `3d-modellash.png` | och pushti `#FDEAF3` | a small 3D printer printing a gear, wireframe cube floating above |
| 18 | `dasturlash.png` | och ko‘k-binafsha | a laptop with abstract colorful code blocks (no readable text) and a tiny robot reading them |

## TASK-19…21 — Jamoa avatarlari
- **Papka:** `public/images/team/` · **O‘lcham:** 512×512 · **Fon:** to‘liq, doira ichiga mos pastel (sky / lavender / blush)
- Stilizatsiyalangan 3D-clay avatar (haqiqiy portret EMAS), yelkadan yuqori, tabassum bilan, yosh o‘zbek ayol mutaxassis.
- **Muhim:** har biri uchun 2 variant yarating — `*-a.png` (hijobsiz), `*-b.png` (ro‘mol/hijob bilan) — jamoa o‘zi tanlaydi; tanlangan variantni asosiy nomga (`zilola.png`) nusxalang. Agar tanlanmagan bo‘lsa — `-a` ni nusxalang.

| Task | Fayl | Tafsilot |
|---|---|---|
| 19 | `zilola.png` | Project manager — notebook/planshet ushlagan, ishonchli ko‘rinish, fon sky `#E4F3FE` |
| 20 | `rayxona.png` | Marketolog — megafon yoki grafik pufakcha bilan, fon blush `#FDEAF3` |
| 21 | `durdona.png` | Dasturchi — noutbuk va naushnik, fon lavender `#EFECFF` |

## TASK-22 — AI Tutor avatari (chat uchun)
- **Fayl:** `public/images/app/tutor-avatar.png` · **O‘lcham:** 256×256 · **Fon:** shaffof
- **Prompt:** `Head of the same friendly round AI robot from the hero image, front view, glowing face screen with two happy oval eyes and a small smile, tiny antenna with a light bulb tip. {STYLE}`

## TASK-23 — Nishonlar (Badges), 6 ta
- **Papka:** `public/images/app/badges/` · **O‘lcham:** 256×256 · **Fon:** shaffof
- Hammasi bir xil shakl: yumaloq medal + lenta, ichida ikonka-obyekt.

| Fayl | Ichidagi obyekt | Asosiy rang |
|---|---|---|
| `first-lesson.png` | ochilgan kitob | sky |
| `streak-7.png` | olov alangasi | sun / blush |
| `circuit-master.png` | yonib turgan LED | mint |
| `test-champion.png` | belgi (check) + yulduz | lavender |
| `project-author.png` | kichik robot | blush |
| `explorer.png` | lupa | sky / mint |

## TASK-24 — Kirish/Ro‘yxatdan o‘tish sahifasi
- **Fayl:** `public/images/auth/welcome.png` · **O‘lcham:** 1000×1200 (vertikal) · **Fon:** shaffof
- **Prompt:** `A cheerful teenage student waving hello, standing next to the friendly AI robot who holds a glowing key, a small floating door made of light behind them, welcoming mood. {STYLE}`

## TASK-25 — Bo‘sh holatlar
- **Papka:** `public/images/empty/` · **O‘lcham:** 500×500 · **Fon:** shaffof

| Fayl | Prompt |
|---|---|
| `no-courses.png` | An empty cardboard box with the small AI robot peeking inside curiously. {STYLE} |
| `no-results.png` | The small AI robot holding a magnifying glass, searching, a few soft dotted circles around. {STYLE} |

## TASK-26 — OG rasm (ijtimoiy tarmoqlarda ulashish)
- **Fayl:** `public/og-image.png` · **O‘lcham:** 1200×630 · **Fon:** to‘liq
- **Prompt:** `Wide banner: on the right side, the hero scene (two teenagers, laptop, circuit, friendly AI robot) in the same style; left 55% is empty soft cream #FBFAF7 space with blurred pastel blobs of sky blue, lavender and pink (space reserved for text added later). {STYLE}`

---

## Tekshiruv ro‘yxati (Codex tugatgach)
- [x] 26 ta task bo‘yicha barcha fayllar to‘g‘ri yo‘lda, to‘g‘ri o‘lchamda
- [x] Shaffof deb belgilanganlar haqiqatan alpha kanalga ega
- [x] Hech bir rasmda matn/logo yo‘q
- [x] Barcha rasmlar bir xil uslubda (hero bilan solishtiring)
- [x] `.webp` versiyalar yaratilgan
- [x] `public/images/ALT.md` to‘ldirilgan
- [ ] `npm run build` xatosiz o‘tadi va `npm run dev` da placeholderlar rasmlarga almashgan
