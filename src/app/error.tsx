"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log lỗi để debug
    console.error("🔴 Application Error:", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-red-50 to-white px-4">
      <div className="max-w-md w-full text-center space-y-4">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="bg-red-100 rounded-full p-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
        </div>

        {/* Error Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Có lỗi xảy ra</h1>
          <p className="text-gray-600 mt-2">
            Xin lỗi, ứng dụng gặp lỗi không mong muốn. Vui lòng thử lại.
          </p>
        </div>

        {/* Error Message (Development Only) */}
        {process.env.NODE_ENV === "development" && error?.message && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-left">
            <p className="text-xs font-mono text-red-700 break-words">
              {error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 flex-col sm:flex-row justify-center pt-4">
          <Button
            onClick={reset}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Thử lại
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
          >
            Quay về trang chủ
          </Button>
        </div>

        {/* Error ID for Support */}
        {error.digest && (
          <p className="text-xs text-gray-500 pt-4">
            Mã lỗi: <code className="font-mono">{error.digest}</code>
          </p>
        )}
      </div>
    </div>
  );
}
