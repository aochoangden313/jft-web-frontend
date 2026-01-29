"use client";

import { http } from "@/lib/http";

export default function DevTestPage() {
  const callApi = async () => {
    const res = await http.get("users/me").json();
    console.log(res);
  };

  return <button onClick={callApi}>Call /me</button>;
}
