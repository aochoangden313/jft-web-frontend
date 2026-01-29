"use client";

import { useMe } from "@/hooks/useMe";
import { ReactNode } from "react";

export function AuthProvider({ children }: { children: ReactNode }) {
  const { isLoading } = useMe();
  if (isLoading) {
    return <div className="p-6">Checking authentication...</div>;
  }
  return <>{children}</>;
}
