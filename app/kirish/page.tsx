import type { Metadata } from "next";
import { AuthCard } from "@/components/app/auth-card";

export const metadata: Metadata = { title: "Kirish" };

export default function LoginPage() {
  return <AuthCard mode="login" />;
}
