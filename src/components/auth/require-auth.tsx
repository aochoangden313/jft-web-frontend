"use client";

import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export function RequireAuth({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated && user === null) {
      router.replace("/login"); // Tạm thời disable để debug
      // eslint-disable-next-line no-console
      // console.warn("Chưa đăng nhập, sẽ không redirect để debug");
    }
  }, [isAuthenticated, user, router]);

  return <>{children}</>;
}
