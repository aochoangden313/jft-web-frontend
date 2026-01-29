"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Header } from "@/components/layout/header";
import { AuthBootstrap } from "@/components/providers/auth-bootstrap";
import { useAuthStore } from "@/stores/auth.store";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { initialized, isAuthenticated, user } = useAuthStore();
  const router = useRouter();

  // 🔐 Guard: chỉ chạy SAU khi auth bootstrap xong
  useEffect(() => {
    if (!initialized) return;

    if (!isAuthenticated && user === null) {
      router.replace("/login");
    }
  }, [initialized, isAuthenticated, user, router]);

  return (
    <>
      <AuthBootstrap />
      {initialized && (
        <>
          <Header />
          {children}
        </>
      )}
    </>
  );
}
