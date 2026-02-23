import { Skeleton } from "./skeleton";
import { SkeletonQuestion } from "./skeleton-question";

/**
 * 🎓 SKELETON LAYOUT
 *
 * Mục đích: Loading state cho TOÀN BỘ ExamSessionPage
 * Pattern: Mimic full page layout (header + main content + sidebar)
 *
 * Structure:
 * ┌─── HEADER (Timer) ───────┐
 * │ Time: [████████░░] 25:30  │
 * ├──────────────────────────┤
 * │  MAIN CONTENT            │
 * │  ┌─ Question 1 skeleton ┐│
 * │  │ [████] ← Title       ││
 * │  │ [████████] [████]    ││
 * │  │ [▭] Option A [████]  ││
 * │  │ [▭] Option B [████]  ││
 * │  │ [▭] Option C [████]  ││
 * │  │ [▭] Option D [████]  ││
 * │  └──────────────────────┘│
 * └──────────────────────────┘
 */

export function SkeletonLayout() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* 📌 HEADER SKELETON */}
      <div className="bg-white border-b sticky top-0 z-10 p-4">
        <div className="flex justify-between items-center">
          {/* Timer skeleton */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Thời gian còn lại:</span>
            <Skeleton className="h-8 w-20" />
          </div>

          {/* Progress bar skeleton */}
          <div className="flex-1 mx-4 h-2 bg-slate-200 rounded-full">
            <Skeleton className="h-2 w-1/2" />
          </div>

          {/* Status skeleton */}
          <Skeleton className="h-6 w-32" />
        </div>
      </div>

      {/* 📌 MAIN CONTENT */}
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-2xl mx-auto">
          {/* Question number skeleton */}
          <Skeleton className="h-5 w-24 mb-4" />

          {/* Question skeleton (reuse component) */}
          <SkeletonQuestion />
        </div>
      </div>
    </div>
  );
}

/**
 * 💡 KIẾN THỨC:
 *
 * 1. FULL PAGE LAYOUT
 *    h-screen flex flex-col → Full height + flexbox column
 *    Sticky header → bg-white border-b
 *    Flex-1 content → Fills remaining space
 *
 * 2. COMPONENT REUSE
 *    <SkeletonQuestion /> ← Reuse question skeleton
 *    Tránh duplicate code, maintain consistency
 *
 * 3. VISUAL HIERARCHY
 *    Header (smaller, compact)
 *    ↓
 *    Main content (larger, prominent)
 *    ↓
 *    Footer (buttons)
 *    Skeleton layout phải match visual hierarchy
 *
 * 4. SPACING & LAYOUT
 *    p-6: padding around content
 *    max-w-2xl mx-auto: center + limit width
 *    Space-y-*: vertical spacing
 *    gap-3: component gaps
 *
 * ➡️ PATTERN: Skeleton Layout = Loading state preview!
 *    User thấy layout trước khi data load → smooth UX
 */
