"use client";

import { Check, X } from "lucide-react";

/**
 * 🎓 QUESTION NAVIGATION SIDEBAR
 *
 * Mục đích: Hiển thị danh sách câu hỏi với status (answered/unanswered)
 * Pattern: Click để chuyển đến câu hỏi đấy
 *
 * UI:
 * ┌─ Questions ─────┐
 * │ Q1 ✓ Answered  │
 * │ Q2 ✗ Unseen    │
 * │ Q3 ✓ Answered  │
 * │ Q4 ○ Current   │
 * │ ...            │
 * └────────────────┘
 *
 * Kiến thức:
 * 1. Grid layout - 2 cột question tiles
 * 2. Conditional styling - Khác color cho answered/unanswered
 * 3. Hover state - Interactive feedback
 * 4. Overflow - Scrollable nếu có nhiều câu
 */

interface Question {
  id: string;
  questionNumber: number;
  selectedOptionId: string | null;
}

interface QuestionNavigationSidebarProps {
  questions: Question[];
  currentQuestionIndex: number;
  onSelectQuestion: (index: number) => void;
}

export function QuestionNavigationSidebar({
  questions,
  currentQuestionIndex,
  onSelectQuestion,
}: QuestionNavigationSidebarProps) {
  return (
    <aside className="w-64 bg-white border-l border-slate-200 p-4">
      {/* 📌 HEADER */}
      <h2 className="font-bold text-lg mb-4">Danh sách câu hỏi</h2>

      {/* 📌 STATS */}
      <div className="mb-4 p-3 bg-slate-50 rounded-lg text-sm space-y-1">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-green-600" />
          <span>
            {questions.filter((q) => q.selectedOptionId !== null).length}/
            {questions.length} đã làm
          </span>
        </div>
        <div className="flex items-center gap-2">
          <X className="w-4 h-4 text-slate-400" />
          <span>
            {questions.filter((q) => q.selectedOptionId === null).length} chưa
            làm
          </span>
        </div>
      </div>

      {/* 📌 QUESTIONS GRID - SCROLLABLE */}
      <div className="overflow-y-auto max-h-[calc(100vh-200px)] space-y-2">
        <div className="grid grid-cols-2 gap-2">
          {questions.map((question, index) => {
            const isAnswered = question.selectedOptionId !== null;
            const isCurrent = index === currentQuestionIndex;

            return (
              <button
                key={question.id}
                onClick={() => onSelectQuestion(index)}
                className={`
                  relative p-3 rounded-lg font-semibold text-sm
                  transition-all duration-200 transform
                  hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-offset-1

                  ${
                    isCurrent
                      ? "bg-blue-500 text-white ring-2 ring-blue-300 shadow-lg"
                      : isAnswered
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }
                `}
                title={`Câu ${question.questionNumber}${isAnswered ? " - Đã làm" : " - Chưa làm"}`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span>Q{question.questionNumber}</span>
                  {isAnswered && <Check className="w-4 h-4 flex-shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

/**
 * 💡 KIẾN THỨC:
 *
 * 1. CONDITIONAL STYLING
 *    ${isCurrent ? "..." : isAnswered ? "..." : "..."}
 *    Ternary chain để 3 states:
 *    - Current → Blue highlight
 *    - Answered → Green
 *    - Unanswered → Gray
 *
 * 2. HOVER EFFECTS
 *    hover:scale-105 → Button phóng to khi hover
 *    hover:bg-green-200 → Background change
 *    transition-all duration-200 → Smooth animation
 *
 * 3. GRID LAYOUT
 *    grid grid-cols-2 gap-2
 *    2 cột questions, gap 2 space
 *    Responsive (có thể change cols trên mobile)
 *
 * 4. OVERFLOW HANDLING
 *    overflow-y-auto → Vertical scroll nếu questions > screen
 *    max-h-[calc(100vh-200px)] → Dynamic height calc
 *
 * 5. STATS COMPONENT
 *    filter(q => q.selectedOptionId !== null).length
 *    Count answered questions
 *
 * 6. ACCESSIBILITY
 *    - title prop → Tooltip on hover
 *    - focus:ring-2 → Keyboard navigation support
 *    - Semantic button element
 *
 * ➡️ COMPACT & INTERACTIVE!
 *    User nhìn progress + easy navigation
 */
