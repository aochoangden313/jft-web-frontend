import { http } from "@/lib/http";

export type Role = "USER" | "EDITOR" | "ADMIN";

export type User = {
  id: string;
  email: string;
  role: Role;
};

export const authApi = {
  me: () => {
    console.log("authApi.me called");
    return http.get("users/me").json<User>();
  },
  logout: () => http.post("auth/logout"),
};
