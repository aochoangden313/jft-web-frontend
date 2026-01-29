// src/hooks/useMe.ts
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { authApi, type User } from "@/api/auth.api";
import { useAuthStore } from "@/stores/auth.store";

export function useMe() {
  const setUser = useAuthStore((s) => s.setUser);

  const query = useQuery<User>({
    queryKey: ["me"],
    queryFn: authApi.me,
    retry: false,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  const { status, data, error } = query;

  useEffect(() => {
    // ⛔ chưa có kết quả auth
    if (status === "pending") return;

    if (status === "success") {
      setUser(data); // initialized = true
      return;
    }

    if (status === "error") {
      setUser(null); // initialized = true
    }
  }, [status, data, error, setUser]);

  return query;
}
