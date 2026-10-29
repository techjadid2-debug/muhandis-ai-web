import type { Tone } from "@/components/brand/tone";

/** Landing va marketing sahifalari matnlari (pitch deck asosida). Keyin ru/en qo‘shish uchun shu shaklni nusxalash kifoya. */
export const uz = {
  nav: {
    links: [
      { href: "/#imkoniyatlar", label: "Imkoniyatlar" },
      { href: "/#qanday-ishlaydi", label: "Qanday ishlaydi" },
      { href: "/maktablar", label: "Maktablar uchun" },
      { href: "/narxlar", label: "Narxlar" },
    ],
    login: "Kirish",
    cta: "Bepul boshlash",
  },

  hero: {
    eyebrow: "O‘zbek tilidagi birinchi AI STEM platforma",
    title: "Muhandislikni",
    titleAccent: "qiziqarli o‘rgan",
    subtitle:
      "Muhandis AI — sun’iy intellekt asosidagi STEM platforma. AI Tutor senga shaxsiy yo‘l chizadi, virtual laboratoriyada esa sxemalarni o‘zing yig‘ib sinab ko‘rasan.",
    motto: "O‘rgan, sinab ko‘r, yaratuvchiga aylan",
    primary: "Bepul boshlash",
    secondary: "Demo darsni ko‘rish",
    trust: ["O‘zbek tilida", "AI Tutor", "Virtual laboratoriya", "13–18 yosh uchun"],
  },

  problem: {
    eyebrow: "Muammo",
    title: "Qiziqish bor — imkoniyat cheklangan",
    subtitle: "O‘quvchilar muhandislikni o‘rganishni xohlaydi, lekin amaliyot va ona tilidagi sifatli kontent yetishmaydi.",
    stats: [
      { value: 78, suffix: "%", text: "13–18 yoshli o‘quvchilar muhandislikka qiziqadi", tone: "sky" },
      { value: 1, prefix: "<", suffix: "%", text: "O‘zbek tilidagi muhandislik kontenti", tone: "lavender" },
      { value: 6, suffix: "%", text: "o‘quvchigina amaliy STEM tajribasiga ega", tone: "blush" },
      { value: 11, suffix: "%", text: "maktablarda laboratoriya mavjud", tone: "mint" },
      { value: 92, suffix: "%", text: "o‘quvchi YouTube’dan o‘rganadi — interaktivlik yo‘q", tone: "sun" },
      { value: 74, suffix: "%", text: "o‘quvchi “ko‘rdim, lekin tushunmadim” holatini boshdan kechirgan", tone: "sky" },
    ] satisfies { value: number; prefix?: string; suffix: string; text: string; tone: Tone }[],
  },

  features: {
    eyebrow: "Yechim",
    title: "O‘rganish uchun kerak bo‘lgan hamma narsa — bir joyda",
    subtitle: "Beshta asosiy imkoniyat o‘quvchini tomoshabindan yaratuvchiga aylantiradi.",
    items: [
      {
        key: "ai-tutor",
        title: "AI Tutor",
        text: "Shaxsiy o‘quv yo‘li (roadmap) tuzadi va tushunmagan joylaringni o‘zi aniqlaydi.",
        tone: "sky",
        image: "/images/features/ai-tutor.png",
      },
      {
        key: "video-lessons",
        title: "Interaktiv videodarslar",
        text: "Dars ichida savollar: to‘g‘ri javob ber — dars davom etadi.",
        tone: "lavender",
        image: "/images/features/video-lessons.png",
      },
      {
        key: "virtual-lab",
        title: "Virtual laboratoriya",
        text: "Arduino va elektron sxemalarni brauzerda xavfsiz simulyatsiya qil.",
        tone: "mint",
        image: "/images/features/virtual-lab.png",
      },
      {
        key: "ai-tests",
        title: "AI-testlar",
        text: "Darajangga mos savollar va kuchsiz tomonlaringni ko‘rsatuvchi baholash.",
        tone: "blush",
        image: "/images/features/ai-tests.png",
      },
      {
        key: "gamification",
        title: "Gamifikatsiya",
        text: "Ball, nishonlar va loyiha tanlovlari bilan har kuni rag‘bat.",
        tone: "sun",
        image: "/images/features/gamification.png",
      },
    ] satisfies { key: string; title: string; text: string; tone: Tone; image: string }[],
  },

  steps: {
    eyebrow: "Qanday ishlaydi",
    title: "Uch qadam: o‘rgan, sinab ko‘r, yarat",
    items: [
      { title: "O‘rgan", text: "Qisqa interaktiv videodarslar va AI Tutor tushuntirishlari bilan nazariyani o‘zlashtir.", tone: "sky", image: "/images/steps/organ.png" },
      { title: "Sinab ko‘r", text: "Virtual laboratoriyada sxemani yig‘, xato qilishdan qo‘rqma — hammasi xavfsiz.", tone: "mint", image: "/images/steps/sinab-kor.png" },
      { title: "Yaratuvchiga aylan", text: "O‘z loyihangni yarat, tanlovlarda qatnash va AI sertifikat ol.", tone: "lavender", image: "/images/steps/yarat.png" },
    ] satisfies { title: string; text: string; tone: Tone; image: string }[],
  },

  demo: {
    eyebrow: "Sinab ko‘ring",
    title: "Interaktiv dars qanday ishlaydi?",
    subtitle: "Video to‘xtaydi va savol beradi. To‘g‘ri javob — dars davom etadi. Xato bo‘lsa, AI Tutor yumshoq maslahat beradi.",
    lesson: "Ohm qonuni · 3-dars",
    question: "Rezistor qarshiligi oshsa, zanjirdagi tok kuchi qanday o‘zgaradi?",
    options: [
      { text: "Oshadi", correct: false, hint: "Deyarli! Eslab ko‘r: I = U / R. Maxrajdagi R kattalashsa, kasr nima bo‘ladi?" },
      { text: "Kamayadi", correct: true, hint: "Barakalla! Qarshilik oshsa, tok kamayadi. Dars davom etmoqda…" },
      { text: "O‘zgarmaydi", correct: false, hint: "Unchalik emas. Tok kuchi kuchlanish va qarshilikka bog‘liq: I = U / R." },
    ],
  },

  why: {
    eyebrow: "Nega Muhandis AI",
    title: "Katta ehtiyoj — bo‘sh bozor",
    subtitle: "Muhandis AI bu bo‘shliqni to‘ldiradi: AI, STEM, mahalliy yondashuv va o‘zbek tili — bir platformada.",
    pillars: ["AI asosida", "STEM", "Mahalliy", "O‘zbek tilida"],
    market: [
      { value: "6,5 mln+", text: "maktab o‘quvchisi" },
      { value: "1 mln+", text: "STEMga qiziqqan yoshlar" },
      { value: "90%", text: "platformalar xorijiy tilda" },
      { value: "70%", text: "o‘qituvchilar amaliy kontent yetishmasligini aytadi" },
    ],
    compare: {
      columns: ["Interaktiv darslar", "AI testlar", "Virtual laboratoriya", "O‘zbek tilida", "Maktablarga moslashgan"],
      rows: [
        { name: "Muhandis AI", values: [true, true, true, true, true], highlight: true },
        { name: "Mohirdev", values: [true, false, false, true, false] },
        { name: "Transformers Edu", values: [true, false, false, true, false] },
        { name: "Robbit (offline)", values: [true, false, false, true, "offline"] },
        { name: "Khan Academy", values: [true, false, false, "qisman", false] },
        { name: "Udemy", values: [true, false, false, false, false] },
      ] as { name: string; values: (boolean | string)[]; highlight?: boolean }[],
    },
  },

  schools: {
    eyebrow: "Maktablar va o‘quv markazlari uchun",
    title: "Har bir sinfga virtual laboratoriya",
    subtitle: "O‘qituvchi paneli orqali sinf progressini kuzating, topshiriq bering va AI tahlil asosida kim yordamga muhtojligini ko‘ring.",
    points: [
      "Sinf va guruhlar bo‘yicha progress tahlili",
      "Tayyor dars rejalari va amaliy topshiriqlar",
      "Laboratoriya jihozlarisiz amaliy mashg‘ulot",
      "AI asosida sertifikatlash",
    ],
    cta: "Hamkorlik so‘rovi",
  },

  pricing: {
    eyebrow: "Narxlar",
    title: "Bepul boshlang, tayyor bo‘lganda kengaytiring",
    plans: [
      {
        name: "Bepul",
        price: "0",
        period: "so‘m",
        text: "Boshlash uchun hamma asosiy narsa.",
        features: ["Kirish darslari", "Kuniga 5 ta AI Tutor savoli", "Virtual lab: asosiy komponentlar", "Ball va nishonlar"],
        cta: "Bepul boshlash",
        highlight: false,
      },
      {
        name: "Premium",
        price: "49 000",
        period: "so‘m / oy",
        text: "Jiddiy o‘rganuvchilar uchun to‘liq imkoniyat.",
        features: ["Barcha kurslar va darslar", "Cheksiz AI Tutor", "To‘liq virtual laboratoriya (Arduino)", "AI-testlar va shaxsiy roadmap", "AI sertifikat"],
        cta: "Premiumni sinash",
        highlight: true,
      },
      {
        name: "Maktab",
        price: "Kelishiladi",
        period: "",
        text: "Maktablar va o‘quv markazlari uchun (B2B).",
        features: ["O‘qituvchi paneli", "Sinf bo‘yicha tahlil", "Dars rejalari", "Shaxsiy menejer"],
        cta: "Bog‘lanish",
        highlight: false,
      },
    ],
    note: "Narxlar namunaviy — yakuniy tariflar ishga tushirishdan oldin e’lon qilinadi.",
  },

  team: {
    eyebrow: "Jamoa",
    title: "Muhandis AI ortidagi jamoa",
    members: [
      { name: "Zilola Toshpo‘latova", role: "Project manager", tone: "sky", image: "/images/team/zilola.png" },
      { name: "Rayxona Xalimova", role: "Marketolog", tone: "blush", image: "/images/team/rayxona.png" },
      { name: "Durdona Mo‘ydinjonova", role: "Dasturchi", tone: "lavender", image: "/images/team/durdona.png" },
    ] satisfies { name: string; role: string; tone: Tone; image: string }[],
  },

  faq: {
    eyebrow: "Savollar",
    title: "Ko‘p beriladigan savollar",
    items: [
      { q: "Muhandis AI kimlar uchun?", a: "Asosan 13–18 yoshli o‘quvchilar uchun, lekin muhandislikni noldan o‘rganmoqchi bo‘lgan har kim foydalanishi mumkin." },
      { q: "Virtual laboratoriya uchun qo‘shimcha jihoz kerakmi?", a: "Yo‘q. Barcha sxemalar va Arduino simulyatsiyasi brauzerda ishlaydi — kompyuter yoki planshet yetarli." },
      { q: "AI Tutor qanday yordam beradi?", a: "U javoblaringni tahlil qilib, tushunmagan mavzularingni aniqlaydi, sodda tilda tushuntiradi va keyingi qadamni tavsiya qiladi." },
      { q: "Platforma bepulmi?", a: "Ha, bepul tarif bor. Barcha kurslar, cheksiz AI Tutor va sertifikat uchun Premium tarif mavjud." },
      { q: "Maktabimiz qanday ulanishi mumkin?", a: "“Maktablar uchun” sahifasidagi forma orqali so‘rov qoldiring — jamoamiz siz bilan bog‘lanadi." },
    ],
  },

  cta: {
    title: "Bugun birinchi sxemangni yig‘",
    text: "Ro‘yxatdan o‘tish 1 daqiqa vaqt oladi. Karta talab qilinmaydi.",
    button: "Bepul boshlash",
  },

  footer: {
    tagline: "AI asosidagi STEM platforma. O‘rgan, sinab ko‘r, yaratuvchiga aylan.",
    contact: {
      phone: "+998 93 546 61 02",
      phoneHref: "tel:+998935466102",
      email: "ztoshpolatova@gmail.com",
      site: "www.muhandis.ai",
    },
    columns: [
      { title: "Platforma", links: [{ href: "/#imkoniyatlar", label: "Imkoniyatlar" }, { href: "/kurslar", label: "Kurslar" }, { href: "/laboratoriya", label: "Virtual laboratoriya" }, { href: "/narxlar", label: "Narxlar" }] },
      { title: "Hamkorlik", links: [{ href: "/maktablar", label: "Maktablar uchun" }, { href: "/#jamoa", label: "Jamoa" }, { href: "/#savollar", label: "Savollar" }] },
    ],
    copyright: "© 2026 Muhandis AI. Barcha huquqlar himoyalangan.",
  },
};
