import { AppShell } from "@/components/app/app-shell";

export default function StudentLayout({ children }: LayoutProps<"/">) {
  return <AppShell>{children}</AppShell>;
}
