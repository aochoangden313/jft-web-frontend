import Link from "next/link";

const EXAM_ID = "71cf2aec-4894-4f28-8dde-261c9fe49c1e";

export default function ExamPage() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Danh sách đề thi</h1>

      <Link href={`/exam/${EXAM_ID}`} className="text-blue-600 hover:underline">
        Mở đề thi mẫu
      </Link>
    </div>
  );
}
