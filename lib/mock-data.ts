import type { Tone } from "@/components/brand/tone";

/** UI skeleti uchun namunaviy ma’lumotlar. Backend ulanganda shu shakldagi API javoblari bilan almashtiriladi. */

export const student = {
  name: "Aziza",
  fullName: "Aziza Karimova",
  grade: "9-sinf",
  xp: 1240,
  level: 7,
  streak: 6,
  dailyGoal: { done: 2, total: 3 },
};

export type Course = {
  slug: string;
  title: string;
  category: string;
  level: "Boshlang‘ich" | "O‘rta" | "Yuqori";
  lessons: number;
  progress: number;
  tone: Tone;
  image: string;
};

export const categories = ["Hammasi", "Elektronika", "Arduino", "Robototexnika", "Fizika", "3D modellash", "Dasturlash"];

export const courses: Course[] = [
  { slug: "elektronika-asoslari", title: "Elektronika asoslari", category: "Elektronika", level: "Boshlang‘ich", lessons: 12, progress: 58, tone: "sky", image: "/images/courses/elektronika.png" },
  { slug: "arduino-bilan-tanishuv", title: "Arduino bilan tanishuv", category: "Arduino", level: "Boshlang‘ich", lessons: 10, progress: 20, tone: "mint", image: "/images/courses/arduino.png" },
  { slug: "robot-yasash", title: "Birinchi robotimni yasayman", category: "Robototexnika", level: "O‘rta", lessons: 14, progress: 0, tone: "lavender", image: "/images/courses/robototexnika.png" },
  { slug: "amaliy-fizika", title: "Amaliy fizika: tok va magnit", category: "Fizika", level: "O‘rta", lessons: 9, progress: 100, tone: "sun", image: "/images/courses/fizika.png" },
  { slug: "3d-modellash", title: "3D modellash va chop etish", category: "3D modellash", level: "O‘rta", lessons: 8, progress: 0, tone: "blush", image: "/images/courses/3d-modellash.png" },
  { slug: "muhandislar-uchun-dasturlash", title: "Muhandislar uchun dasturlash", category: "Dasturlash", level: "Yuqori", lessons: 16, progress: 5, tone: "sky", image: "/images/courses/dasturlash.png" },
];

export const continueLesson = {
  course: courses[0],
  lessonId: "3",
  title: "Ohm qonuni: tok, kuchlanish va qarshilik",
  minutesLeft: 6,
  progress: 46,
};

export type RoadmapNode = { title: string; state: "done" | "current" | "locked"; xp: number };

export const roadmap: RoadmapNode[] = [
  { title: "Elektr toki nima?", state: "done", xp: 50 },
  { title: "Kuchlanish va batareya", state: "done", xp: 50 },
  { title: "Ohm qonuni", state: "current", xp: 80 },
  { title: "Ketma-ket va parallel ulanish", state: "locked", xp: 80 },
  { title: "Loyiha: tungi chiroq", state: "locked", xp: 150 },
];

export const weeklyActivity = [
  { day: "Du", minutes: 25 },
  { day: "Se", minutes: 40 },
  { day: "Ch", minutes: 15 },
  { day: "Pa", minutes: 50 },
  { day: "Ju", minutes: 30 },
  { day: "Sh", minutes: 10 },
  { day: "Ya", minutes: 0 },
];

export const badges = [
  { key: "first-lesson", title: "Birinchi dars", earned: true, tone: "sky" },
  { key: "streak-7", title: "7 kunlik seriya", earned: false, tone: "sun" },
  { key: "circuit-master", title: "Sxema ustasi", earned: true, tone: "mint" },
  { key: "test-champion", title: "Test chempioni", earned: true, tone: "lavender" },
  { key: "project-author", title: "Loyiha muallifi", earned: false, tone: "blush" },
  { key: "explorer", title: "Tadqiqotchi", earned: false, tone: "sky" },
] satisfies { key: string; title: string; earned: boolean; tone: Tone }[];

export const weakTopics = [
  { topic: "Ohm qonuni", score: 48, tone: "blush" },
  { topic: "Parallel ulanish", score: 55, tone: "sun" },
  { topic: "Rezistor rang kodlari", score: 62, tone: "sun" },
] satisfies { topic: string; score: number; tone: Tone }[];

export const lesson = {
  title: "Ohm qonuni: tok, kuchlanish va qarshilik",
  course: "Elektronika asoslari",
  number: 3,
  total: 12,
  checkpoints: [
    {
      at: "02:14",
      question: "Rezistor qarshiligi oshsa, zanjirdagi tok kuchi qanday o‘zgaradi?",
      options: [
        { text: "Oshadi", correct: false, hint: "Deyarli! Eslab ko‘r: I = U / R. Maxrajdagi R kattalashsa, kasr nima bo‘ladi?" },
        { text: "Kamayadi", correct: true, hint: "Barakalla! Qarshilik oshsa, tok kamayadi. Dars davom etmoqda…" },
        { text: "O‘zgarmaydi", correct: false, hint: "Unchalik emas. Tok kuchi kuchlanish va qarshilikka bog‘liq: I = U / R." },
      ],
    },
  ],
  notes: [
    "Tok kuchi (I) — amperda o‘lchanadi.",
    "Kuchlanish (U) — voltda o‘lchanadi.",
    "Qarshilik (R) — omda o‘lchanadi.",
    "Ohm qonuni: I = U / R",
  ],
  chapters: ["Kirish", "Tok va kuchlanish", "Ohm qonuni formulasi", "Amaliy misol: LED uchun rezistor", "Xulosa"],
};

export const labComponents = [
  { key: "battery", title: "Batareya 9V", tone: "sun" },
  { key: "resistor", title: "Rezistor 330 Ω", tone: "lavender" },
  { key: "led", title: "LED (yashil)", tone: "mint" },
  { key: "button", title: "Tugma", tone: "sky" },
  { key: "arduino", title: "Mikrokontroller", tone: "sky" },
  { key: "buzzer", title: "Buzzer", tone: "blush" },
] satisfies { key: string; title: string; tone: Tone }[];

export const quiz = {
  topic: "Elektronika asoslari",
  questions: [
    { q: "Qaysi asbob kuchlanishni o‘lchaydi?", options: ["Ampermetr", "Voltmetr", "Ommetr", "Termometr"], answer: 1, topic: "O‘lchov asboblari" },
    { q: "LED ni rezistorsiz to‘g‘ridan-to‘g‘ri 9V batareyaga ulasak nima bo‘ladi?", options: ["Yorqinroq yonadi", "Kuyib qolishi mumkin", "Yonmaydi", "Hech narsa o‘zgarmaydi"], answer: 1, topic: "Ohm qonuni" },
    { q: "U = 6V, R = 3Ω bo‘lsa, tok kuchi qancha?", options: ["18 A", "0,5 A", "2 A", "3 A"], answer: 2, topic: "Ohm qonuni" },
    { q: "Ikki bir xil rezistor parallel ulansa, umumiy qarshilik…", options: ["Ikki barobar oshadi", "Ikki barobar kamayadi", "O‘zgarmaydi", "Nolga teng bo‘ladi"], answer: 1, topic: "Parallel ulanish" },
  ],
};

export const topicScores = [
  { topic: "O‘lchov asboblari", score: 90 },
  { topic: "Tok va kuchlanish", score: 82 },
  { topic: "Rezistor rang kodlari", score: 62 },
  { topic: "Parallel ulanish", score: 55 },
  { topic: "Ohm qonuni", score: 48 },
];

export const tutorChat = [
  { from: "tutor", text: "Salom, Aziza! 👋 Kecha Ohm qonuni testida 2 ta savolda qiynalding. Birga takrorlaymizmi?" },
  { from: "me", text: "Ha, nega qarshilik oshsa tok kamayadi?" },
  {
    from: "tutor",
    text: "Zo‘r savol! Tasavvur qil: suv quvuri. Kuchlanish — suv bosimi, tok — oqayotgan suv miqdori, qarshilik — quvurning torligi. Quvur toraysa, bir xil bosimda kamroq suv oqadi. Formulada ham shunday: I = U / R.",
  },
] as { from: "tutor" | "me"; text: string }[];

export const tutorSuggestions = ["Menga misol bilan tushuntir", "Ohm qonuni bo‘yicha 3 ta savol ber", "Keyingi darsim qaysi?", "LED uchun rezistorni qanday tanlayman?"];

export const leaderboard = [
  { name: "Javohir T.", school: "Toshkent, 110-maktab", xp: 2380 },
  { name: "Madina R.", school: "Samarqand, 5-maktab", xp: 2210 },
  { name: "Sardor A.", school: "Namangan, 12-maktab", xp: 1990 },
  { name: "Aziza K.", school: "Toshkent, 21-maktab", xp: 1240, me: true },
  { name: "Bekzod M.", school: "Buxoro, 3-maktab", xp: 1180 },
  { name: "Nilufar S.", school: "Farg‘ona, 8-maktab", xp: 1090 },
] as { name: string; school: string; xp: number; me?: boolean }[];

export const contests = [
  { title: "Aqlli uy: avtomatik chiroq", deadline: "15-noyabr", prize: "Arduino to‘plami", participants: 124, tone: "mint" },
  { title: "Eng ijodiy robot dizayni", deadline: "1-dekabr", prize: "3D printer kursi + sertifikat", participants: 87, tone: "lavender" },
  { title: "Fizika tajribasi videosi", deadline: "20-dekabr", prize: "Premium 6 oy", participants: 56, tone: "sun" },
] satisfies { title: string; deadline: string; prize: string; participants: number; tone: Tone }[];
