import Link from "next/link";

import { Hand } from "lucide-react";
import { Blobs } from "@/components/brand/blobs";
import { Illustration } from "@/components/brand/illustration";
import { Logo } from "@/components/brand/logo";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AuthCard({ mode }: { mode: "login" | "signup" }) {
  const signup = mode === "signup";
  const fields: { id: string; label: string; type: string; placeholder: string }[] = [
    ...(signup ? [{ id: "name", label: "Ismingiz", type: "text", placeholder: "Aziza Karimova" }] : []),
    { id: "phone", label: "Telefon raqam", type: "tel", placeholder: "+998 __ ___ __ __" },
    { id: "password", label: "Parol", type: "password", placeholder: "••••••••" },
  ];
  return (
    <div className="relative grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden items-center justify-center overflow-hidden bg-gradient-to-br from-[#e6f3fe] via-[#efeaff] to-[#fde9f3] p-12 lg:flex">
        <Blobs variant="corner" />
        <div className="w-full max-w-md">
          <Illustration src="/images/auth/welcome.png" alt="Qo‘l silkitib kutib olayotgan AI robot" width={1000} height={1200} tone="lavender" icon={Hand} label="Kirish illyustratsiyasi (TASK-24)" />
          <p className="mt-6 text-center font-heading text-2xl font-bold text-ink">O‘rgan, sinab ko‘r, yaratuvchiga aylan</p>
        </div>
      </div>
      <div className="flex flex-col px-5 py-8 sm:px-10">
        <Logo />
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-10">
          <h1 className="text-3xl font-bold text-ink">{signup ? "Hisob yaratish" : "Qaytganingdan xursandmiz!"}</h1>
          <p className="mt-2 text-ink-soft">{signup ? "1 daqiqada ro‘yxatdan o‘t va birinchi darsni boshla." : "Davom etish uchun hisobingga kir."}</p>
          {/* Demo: auth hali ulanmagan — forma dashboardga olib o‘tadi */}
          <form action="/dashboard" className="mt-8 flex flex-col gap-4">
            {fields.map((f) => (
              <label key={f.id} className="flex flex-col gap-1.5 text-sm font-bold text-ink">
                {f.label}
                <Input id={f.id} type={f.type} placeholder={f.placeholder} className="h-12 rounded-2xl bg-white px-4 text-base" />
              </label>
            ))}
            {signup && (
              <fieldset className="flex flex-col gap-1.5">
                <legend className="mb-1.5 text-sm font-bold text-ink">Men…</legend>
                <div className="grid grid-cols-3 gap-2">
                  {["O‘quvchi", "O‘qituvchi", "Ota-ona"].map((r, i) => (
                    <label key={r} className="cursor-pointer rounded-2xl border-2 border-line bg-white px-2 py-2.5 text-center text-sm font-semibold text-ink-soft has-checked:border-sky has-checked:bg-sky-soft has-checked:text-sky-deep">
                      <input type="radio" name="role" defaultChecked={i === 0} className="sr-only" /> {r}
                    </label>
                  ))}
                </div>
              </fieldset>
            )}
            <button type="submit" className={buttonVariants({ size: "lg", variant: "gradient", className: "mt-2" })}>
              {signup ? "Ro‘yxatdan o‘tish" : "Kirish"}
            </button>
          </form>
          <p className="mt-6 text-center text-ink-soft">
            {signup ? "Hisobing bormi? " : "Hisobing yo‘qmi? "}
            <Link href={signup ? "/kirish" : "/royxat"} className="font-bold text-sky-deep hover:underline">{signup ? "Kirish" : "Ro‘yxatdan o‘tish"}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

