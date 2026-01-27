import { AuthGuard } from "@/components/guards/auth-guard";
import { RoleGuard } from "@/components/guards/role-guard";

export default function ExamPage() {
  return (
    <AuthGuard>
      <RoleGuard allow={["admin"]}>
        <h1>Exam Page</h1>
      </RoleGuard>
    </AuthGuard>
  );
}
