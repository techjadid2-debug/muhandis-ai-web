# Codex uchun task — rasmlardagi qahramonlarni neytral qilish

## Nima uchun

Mijoz fikri: platforma muhandislik va STEM o‘qitadi, diniy ta’lim yoki arab tili emas. Rasmlarda doim hijobli qiz turgani noto‘g‘ri taassurot qoldirishi mumkin ("bu diniy platformami?"). Shuning uchun qahramonlar **dunyoviy va neytral** bo‘lishi kerak: o‘g‘il bola, ro‘molsiz qiz yoki AI robot.

## Asosiy qoidalar

1. **Fayl nomlari va yo‘llarini o‘zgartirmang.** Faqat quyidagi 5 ta rasmni qayta yarating va eski faylning ustiga yozing (`.png` + `.webp`).
2. **Uslub aynan avvalgidek qolsin.** Joriy `public/images/hero/hero-student-robot.png` ni *style reference* sifatida ishlating: o‘sha 3D-clay uslub, pastel palitra, yorug‘lik va robot dizayni. Faqat odamlar o‘zgaradi.
3. **Robot o‘zgarmaydi.** Oq korpusli, ko‘k ekran-yuzli, lavanda quloqchinli AI robot barcha rasmlarda bir xil qolsin. U brendning maskoti.
4. **Odamlarga qo‘yiladigan talablar:**
   - Bosh kiyimi yo‘q: ro‘mol, hijob, do‘ppi yoki diniy belgi bo‘lmasin.
   - Qizlar: ochiq sochli yoki sochi orqaga yig‘ilgan (ot dumi), kamtarona, zamonaviy kiyimda: hudi, sviter, futbolka ustidan ko‘ylak, uzun shim.
   - O‘g‘il bolalar: hudi, futbolka, sviter.
   - 13–18 yosh, Markaziy Osiyolik ko‘rinish, xushchaqchiq.
   - Ochiq-sochiq kiyim bo‘lmasin (shortik, kalta yeng ustki kiyim).
   - Bitta rasmda ikki jins bo‘lsa, ular teng va hamkor ko‘rinsin: ikkalasi ham ishlayapti, hech biri faqat tomoshabin emas.
5. Rasmlarda matn, harf, raqam yoki logo bo‘lmasin.
6. Shaffof deb belgilangan rasmlar haqiqiy alpha kanalga ega bo‘lsin.
7. WebP: `cwebp -q 85 file.png -o file.webp`.
8. **Eski rasmlarni o‘chirmang.** Yangilarini yaratishdan oldin eskilarini `../image-archive/v1-hijob/` papkasiga (loyiha papkasidan tashqariga) shu tuzilma bilan nusxalang.

### STYLE bloki (avvalgidek)

```
Style: soft 3D clay illustration, rounded friendly shapes, matte materials,
pastel palette — sky blue #3BA7F5, lavender #9B8AFB, blush pink #F5A3C7,
mint #5FD3B0, warm yellow #FFC96B, warm off-white #FBFAF7 —
soft diffused studio lighting, gentle ambient-occlusion shadows, clean composition,
calm and encouraging educational mood, high detail, no text, no letters, no numbers,
no logos, no watermark.
```

### NEUTRAL bloki (odam bor har bir promptga qo‘shing)

```
Secular, modern look: no headscarf, no hijab, no hat, no religious symbols or clothing.
Modest casual clothes (hoodies, sweaters, long trousers).
```

---

## TASK-N1 — Hero (bosh sahifa)
- **Fayl:** `public/images/hero/hero-student-robot.png` · **1600×1200** · **shaffof**
- **Kompozitsiya:** avvalgidek: dumaloq stol, noutbuk, breadboard, yonib turgan LED, o‘ng tomonda robot, atrofida suzib yurgan ikonkalar (lampochka, tishli g‘ildirak, chaqmoq, check).
- **Prompt:**
  ```
  A teenage boy and a teenage girl (Central Asian, about 15 years old) sitting together at a
  rounded white desk with an open laptop, building a small electronics project: a microcontroller
  board on a breadboard, colorful jumper wires and a glowing LED. The girl has dark hair tied in a
  ponytail and wears a soft lavender hoodie; the boy has short dark curly hair and a sky-blue hoodie.
  Both are actively working with their hands and smiling. Next to them floats the small friendly
  round white AI robot with a dark glowing face screen and lavender headphones, pointing helpfully
  at the circuit. Small floating icons: a light bulb, a gear, a lightning bolt, a check mark.
  Three-quarter view, centered, isolated object group.
  {NEUTRAL} {STYLE}
  ```

## TASK-N2 — OG banner (ijtimoiy tarmoqlarda ulashish)
- **Fayl:** `public/og-image.png` · **1200×630** · **to‘liq fon**
- **Prompt:**
  ```
  Wide banner: on the right side, the same scene as the new hero image (teenage boy and girl
  with ponytail, laptop, breadboard circuit, friendly AI robot) in the same style; left 55% is
  empty soft cream #FBFAF7 space with blurred pastel blobs of sky blue, lavender and pink
  (space reserved for text). {NEUTRAL} {STYLE}
  ```
- Yangi hero tayyor bo‘lgach, uni reference qilib yarating: qahramonlar aynan bir xil bo‘lsin.

## TASK-N3 — "Muammo" bo‘limi
- **Fayl:** `public/images/problem/curious-student.png` · **900×900** · **shaffof**
- **Qahramon:** o‘g‘il bola (heroda ikkalasi bor, bu yerda muvozanat uchun o‘g‘il bola).
- **Prompt:**
  ```
  A teenage boy (Central Asian, about 15, short dark hair, mint-green sweater) sitting at a small
  desk with a stack of books, looking at a generic monitor that shows an abstract complex circuit
  diagram, hand on chin, thoughtful and curious (not sad), several soft floating question marks
  around his head. The small AI robot peeks from the side of the monitor.
  {NEUTRAL} {STYLE}
  ```

## TASK-N4 — Maktablar uchun (B2B)
- **Fayl:** `public/images/schools/teacher-dashboard.png` · **1400×1000** · **to‘liq fon** (krem `#FBFAF7` → och ko‘k gradient)
- **Prompt:**
  ```
  A bright friendly classroom: a young teacher (woman with shoulder-length hair in a neat
  blazer, OR a young man in a sweater) standing next to a large wall screen showing abstract
  progress charts and colorful bars (no text). A mixed group of teenage boys and girls at desks
  using tablets, small electronics kits on desks, girls with ponytails or loose hair.
  The small AI robot stands on the teacher's desk. Wide view, cozy, plants by the window.
  {NEUTRAL} {STYLE}
  ```
- Ikkala o‘qituvchi variantini yarating: `teacher-dashboard-a.png` (ayol) va `teacher-dashboard-b.png` (erkak). Asosiy faylga `-a` ni nusxalang.

## TASK-N5 — Kirish / Ro‘yxatdan o‘tish
- **Fayl:** `public/images/auth/welcome.png` · **1000×1200** (vertikal) · **shaffof**
- **Qahramon:** faqat **AI robot**, odam yo‘q. Robot brend maskoti bo‘ladi, shunda kirish sahifasi har qanday foydalanuvchiga (o‘quvchi, o‘qituvchi, ota-ona) mos keladi.
- **Prompt:**
  ```
  The friendly round white AI robot (same design as hero: dark glowing face screen with happy
  oval eyes, lavender headphones, small antenna with a glowing tip) standing in full height,
  cheerfully waving hello with one hand and holding a glowing golden key in the other.
  Behind it, a small floating rounded door made of soft light opening into a pastel sky with
  clouds; floating sparkles, a tiny light bulb and a gear around. Welcoming mood, vertical
  composition. {STYLE}
  ```
- Kodda alt matnni yangilang: `components/app/auth-card.tsx` faylida `alt="Qo‘l silkitib kutib olayotgan o‘quvchi va AI robot"` → `alt="Qo‘l silkitib kutib olayotgan AI robot"`.

---

## Qo‘shimcha
- `public/images/ALT.md` dagi 5 ta faylning alt matnlarini yangilang (o‘zbekcha, rasmni aniq tasvirlasin).
- `public/images/generation-manifest.json` ga yangi promptlarni yozing.
- Jamoa avatarlari (`team/*.png`) **o‘zgarmaydi**: hijobsiz `-a` variantlar allaqachon ishlatilgan.

## Tekshiruv ro‘yxati
- [ ] 5 ta rasm qayta yaratilgan, nomlari va o‘lchamlari avvalgidek
- [ ] Hech bir rasmda ro‘mol, hijob yoki diniy belgi yo‘q
- [ ] Robot barcha rasmlarda bir xil dizaynda
- [ ] Hero va OG bannerdagi qahramonlar bir xil
- [ ] Uslub boshqa rasmlar (features, courses, steps) bilan mos
- [ ] Shaffof rasmlarda alpha kanal bor; `.webp` versiyalar yangilangan
- [ ] Eski rasmlar `../image-archive/v1-hijob/` da saqlangan
- [ ] `auth-card.tsx` dagi alt matn yangilangan, `ALT.md` yangilangan
- [ ] `npx tsc --noEmit` xatosiz

Tugagach, Claude Code saytni build qiladi, Vercel'ga deploy qiladi va A4 PDF'ni yangi rasmlar bilan qayta yaratadi.
