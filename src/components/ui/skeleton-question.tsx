import { Skeleton } from "./skeleton";

/**
 * 🎓 SKELETON QUESTION
 *
 * Mục đích: Giả lập loading state của 1 question card
 * Pattern: Mimic real component structure nhưng dùng Skeleton thay vì real content
 *
 * Kiến thức:
 * 1. Component composition - ghép nhều Skeleton together
 * 2. Spacing - gap giữa các skeleton elements
 * 3. Grid layout - layout question + options
 *
 * Real structure:
 * ┌─ Question Title (1 line text)
 * ├─ Question Description (2-3 lines)
 * ├─ Options:
 * │  ├─ Option A (1 line)
 * │  ├─ Option B (1 line)
 * │  ├─ Option C (1 line)
 * │  └─ Option D (1 line)
 * └─ Navigation buttons
 */

export function SkeletonQuestion() {
  return (
    <div className="space-y-6">
      {/* 📌 QUESTION HEADER */}
      <div className="space-y-2">
        {/* Question title skeleton */}
        <Skeleton className="h-6 w-3/4" />
        {/* Question description - 2 lines */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>

      {/* 📌 OPTIONS SKELETON */}
      <div className="space-y-3">
        {/* 4 options, mỗi option là 1 button-like shape */}
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg"
          >
            {/* Radio button placeholder */}
            <Skeleton className="h-5 w-5 rounded-full flex-shrink-0" />
            {/* Option text */}
            <Skeleton className="h-4 flex-1" />
          </div>
        ))}
      </div>

      {/* 📌 NAVIGATION BUTTONS SKELETON */}
      <div className="flex gap-3 justify-between">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );
}

/**
 * 💡 KIẾN THỨC:
 *
 * 1. COMPONENT COMPOSITION
 *    export function SkeletonQuestion() {
 *      return (
 *        <div>
 *          <Skeleton /> ← reuse base component
 *          <Skeleton />
 *        </div>
 *      );
 *    }
 *    ✅ Tái sử dụng Skeleton base component
 *
 * 2. LAYOUT STRUCTURE
 *    Skeleton layout phải match với real component layout
 *    Ex: Real question có 4 options → Skeleton cũng map 4 items
 *
 * 3. SPACING
 *    space-y-6: gap giữa sections (title, options, buttons)
 *    space-y-3: gap giữa individual options
 *    gap-3: horizontal spacing (radio + text)
 *
 * 4. SIZING
 *    h-6 w-3/4: Title (slightly shorter than full width)
 *    h-4 w-full: Description line 1
 *    h-4 w-5/6: Description line 2 (shorter tail)
 *    h-5 w-5: Radio button circle
 *    h-10 w-24: Buttons
 *
 * ➡️ PATTERN: Clone real layout, replace content dengan Skeleton!
 */
