"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import examApiRequest from "@/apiRequest/exam";

export default function ExamPage() {
  const {
    data: exams,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["exams"],
    queryFn: () => examApiRequest.getExams(),
  });

  if (isLoading) {
    return <div className="p-6">Đang tải danh sách đề thi...</div>;
  }

  if (isError) {
    return (
      <div className="p-6 text-red-600">
        Lỗi tải danh sách đề thi: {String(error)}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Danh sách đề thi</h1>

      {!exams || exams.length === 0 ? (
        <p className="text-gray-600">Chưa có đề thi nào.</p>
      ) : (
        <div className="space-y-3">
          {exams.map((exam: any) => (
            <div
              key={exam.id}
              className="border p-4 rounded-lg hover:bg-gray-50"
            >
              <Link href={`/exam/${exam.id}`} className="block">
                <div className="text-lg font-semibold text-blue-600 hover:underline">
                  {exam.title}
                </div>
                <p className="text-sm text-gray-600 mt-1">{exam.description}</p>
                <div className="text-xs text-gray-500 mt-2">
                  Thời gian: {Math.floor(exam.timeLimit / 60)} phút
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
