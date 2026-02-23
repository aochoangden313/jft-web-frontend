import { cn } from "@/lib/utils";

/**
 * 🎓 SKELETON COMPONENT (shadcn/ui)
 *
 * Mục đích: Placeholder khi dữ liệu đang load
 * Pattern: Giả lập shape/layout của real content
 *
 * Kiến thức:
 * 1. animate-pulse - Tailwind built-in pulse animation
 * 2. bg-primary/10 - Color based on theme (more semantic)
 * 3. Reusable - Map className để tùy chỉnh kích thước
 *
 * Ví dụ:
 * <Skeleton className="h-12 w-12 rounded-full" />  // Avatar
 * <Skeleton className="h-4 w-[250px]" />             // Text line
 * <Skeleton className="h-40 w-full" />               // Large block
 */

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
}

export { Skeleton };

/**
 * 💡 KIẾN THỨC:
 *
 * 1. ANIMATE-PULSE (Tailwind built-in)
 *    opacity: 100% → 50% → 100% (0.5s cycle)
 *    Làm element "blink" để tạo hiệu ứng loading
 *
 * 2. BG-PRIMARY/10 (Semantic Color)
 *    primary color với 10% opacity
 *    Theo theme của app (light/dark mode)
 *    Tốt hơn hardcoded colors
 *
 * 3. CN UTILITY (clsx-like)
 *    cn("base-classes", className)
 *    Merge Tailwind classes safely
 *
 * 4. RESPONSIVE & FLEXIBLE
 *    className props cho phép custom:
 *    - h-4, h-8, h-12 → Text sizes
 *    - w-full, w-3/4, w-1/2 → Widths
 *    - rounded-md, rounded-full → Shapes
 *
 * ➡️ SIMPLE & POWERFUL!
 *    Không cần shimmer animation, animate-pulse đủ tốt ✨
 */
