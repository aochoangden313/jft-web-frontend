import { FileQuestion, Home, LogIn } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="max-w-md w-full text-center space-y-4">
        {/* 404 Icon */}
        <div className="flex justify-center">
          <div className="bg-blue-100 rounded-full p-4">
            <FileQuestion className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* 404 Title */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">404</h1>
          <p className="text-gray-600 mt-2">
            Trang bạn tìm kiếm không tồn tại hoặc đã bị xóa.
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500">
          Đường dẫn không hợp lệ hoặc bạn không có quyền truy cập trang này.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 flex-col sm:flex-row justify-center pt-6">
          <Link href="/" className="w-full sm:w-auto">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <Home className="w-4 h-4 mr-2" />
              Trang chủ
            </Button>
          </Link>
          <Link href="/login" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
