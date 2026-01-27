"use client";

import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Role = "admin" | "user";

export function RoleGuard({
  allow,
  children,
}: {
  allow: Role[];
  children: React.ReactNode;
}) {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user || !allow.includes(user.role as Role)) {
      router.replace("/403");
    }
  }, [user, allow, router]);

  if (!user || !allow.includes(user.role as Role)) {
    return null;
  }

  return <>{children}</>;
}
