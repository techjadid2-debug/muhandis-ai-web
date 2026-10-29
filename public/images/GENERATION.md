# Generatsiya holati

26 ta task uchun barcha rasmlar tayyor. Variantlar va asosiy jamoa nusxalari bilan 38 ta PNG, 38 ta WebP va 1 ta SVG logo.

- Rasmlar built-in `image_gen` bilan yaratildi; hero keyingi generatsiyalarda uslub namunasi bo‘ldi.
- Logo saytdagi mavjud SVG belgidan eksport qilindi.
- Promptlar va umumiy uslub: `generation-manifest.json`.
- O‘zbekcha alt matnlar: `ALT.md`.
- Barcha PNG/WebP fayllari, o‘lchamlari, alpha va hajmi: `INVENTORY.md`.
- Jamoa uchun `-a` va `-b` variantlar saqlangan; asosiy nomlarga `-a` nusxalangan.
- `node scripts/prepare-images.mjs`: muvaffaqiyatli, yetishmayotgan fayl yo‘q. O‘lchamlar va belgilangan rasmlarning haqiqiy shaffofligi tasdiqlandi; WebP sifat darajasi 85.
- `npx tsc --noEmit`: muvaffaqiyatli.
- `npm run build`: muhit cheklovi, Turbopack ichki port ocholmaydi (`Operation not permitted`).
- `npm run build -- --webpack`: Google Fonts DNS cheklovi (`ENOTFOUND fonts.googleapis.com`).
- `npm run dev -- --hostname 127.0.0.1 --port 3099`: port ochish bloklangan (`listen EPERM`).
- Brauzer ulanishi mavjud emas; saytda vizual/HTTP tekshiruv yakunlanmadi.

Saytning dastlabki kodi o‘zgartirilmadi. Oddiy mahalliy muhitda build va brauzer tekshiruvini yakunlash kerak.
