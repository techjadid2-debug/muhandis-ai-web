import type { Metadata } from "next";
import { AuthCard } from "@/components/app/auth-card";

export const metadata: Metadata = { title: "Ro‘yxatdan o‘tish" };

export default function SignupPage() {
  return <AuthCard mode="signup" />;
}
