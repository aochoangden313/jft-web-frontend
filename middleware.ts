import { NextRequest, NextResponse } from "next/server";

// Danh sách đường dẫn cần bảo vệ (có thể mở rộng hoặc đưa vào biến môi trường)
const PROTECTED_PATHS = ["/exam"];

export function middleware(request: NextRequest) {
  // Kiểm tra xem người dùng có token truy cập hay không
  const hasCookie = request.cookies.get("access_token");

  // Nếu không có token và url bắt đầu bằng một trong các PROTECTED_PATHS
  const pathname = request.nextUrl.pathname;
  const needsAuth = PROTECTED_PATHS.some((p) => pathname.startsWith(p));

  if (!hasCookie && needsAuth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Cho phép yêu cầu tiếp tục nếu có token hoặc không nằm trong danh sách cần auth
  return NextResponse.next();
}

// Để Next.js phân tích tĩnh, matcher phải là mảng tĩnh, không dùng biến động
export const config = {
  matcher: [
    "/exam/:path*",
    // Thêm các path khác nếu cần
  ],
};
