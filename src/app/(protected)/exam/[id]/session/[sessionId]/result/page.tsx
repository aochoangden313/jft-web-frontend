"use client";

import { useParams } from "next/navigation";
import { useExamResultQuery } from "@/queries/exam";

export default function ExamResultPage() {
  const params = useParams<{ id: string; sessionId: string }>();
  const examId = params?.id ?? "";
  const sessionId = params?.sessionId ?? "";

  const { data, isLoading, isError, error } = useExamResultQuery({
    examId,
    sessionId,
  });

  if (isLoading) return <div className="p-6">Đang tải kết quả...</div>;
  if (isError)
    return <div className="p-6 text-red-600">Lỗi: {String(error)}</div>;
  if (!data) return <div className="p-6">Không có dữ liệu</div>;

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header: Tổng quan kết quả */}
      <div className="bg-white rounded-lg p-6 shadow">
        <h1 className="text-2xl font-bold mb-4">Kết quả bài thi</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-4xl font-bold text-green-600">
              {data.totalCorrect}
            </div>
            <div className="text-sm text-gray-600 mt-2">Câu đúng</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-4xl font-bold text-red-600">
              {data.totalWrong}
            </div>
            <div className="text-sm text-gray-600 mt-2">Câu sai</div>
          </div>
          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <div className="text-4xl font-bold text-gray-600">
              {data.totalUnanswered}
            </div>
            <div className="text-sm text-gray-600 mt-2">Chưa trả lời</div>
          </div>
        </div>
      </div>

      {/* Chi tiết từng câu */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Chi tiết từng câu</h2>
        {data.questions.map((q) => (
          <div
            key={q.questionId}
            className="bg-white rounded-lg p-5 shadow hover:shadow-md transition-shadow"
          >
            {/* Question Header */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-semibold text-lg flex-1">
                Câu {q.order}:{" "}
                <span dangerouslySetInnerHTML={{ __html: q.contentHtml }} />
              </h3>
              {/* Result Badge */}
              <div className="ml-4 flex-shrink-0">
                {q.isCorrect === true && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    ✓ Đúng
                  </span>
                )}
                {q.isCorrect === false && (
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                    ✗ Sai
                  </span>
                )}
                {q.isCorrect === null && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                    ⊘ Chưa trả lời
                  </span>
                )}
              </div>
            </div>

            {/* Options */}
            <div className="space-y-2">
              {q.options.map((opt) => {
                const isUserSelected = q.selectedOptionId === opt.id;
                const isCorrectAnswer = opt.isCorrect;

                return (
                  <div
                    key={opt.id}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      isCorrectAnswer
                        ? "bg-green-50 border-green-500"
                        : isUserSelected
                          ? "bg-red-50 border-red-500"
                          : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      {isCorrectAnswer && (
                        <span className="text-green-600 font-bold text-xl">
                          ✓
                        </span>
                      )}
                      {isUserSelected && !isCorrectAnswer && (
                        <span className="text-red-600 font-bold text-xl">
                          ✗
                        </span>
                      )}
                      {!isCorrectAnswer && !isUserSelected && (
                        <span className="text-gray-400 text-xl">○</span>
                      )}

                      {/* Content */}
                      <span
                        className={`flex-1 ${
                          isCorrectAnswer
                            ? "font-semibold text-green-800"
                            : isUserSelected
                              ? "text-red-800"
                              : "text-gray-700"
                        }`}
                        dangerouslySetInnerHTML={{ __html: opt.contentHtml }}
                      />

                      {/* Labels */}
                      {isCorrectAnswer && (
                        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                          Đáp án đúng
                        </span>
                      )}
                      {isUserSelected && !isCorrectAnswer && (
                        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">
                          Bạn đã chọn
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
