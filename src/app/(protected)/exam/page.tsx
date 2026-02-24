"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import examApiRequest from "@/apiRequest/exam";

export default function ExamPage() {
  const { data: exams, isLoading, isError, error } = useQuery({
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
          {exams.map((exam: any) => ("use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import examApiRequest from "@/apiRequest/exam"bl
import Link   import { useQuery } from "@tlgimport examApiRequest from "@/apiRequest/exam";
  
export default function ExamPage() {
  const div  const { data: exams, isLoading, it-    queryKey: ["exams"],
    queryFn: () => examApiRequest.ge <d    queryFn: () => examex  });

  if (isLoading) {
    return <div clian: {Mat    return <div cLi  }

  if (isError) {
    return (
      <div className="p-6 text-red-600 <
 iv>    return (
 
        <ddiv>
        Lỗi /div>
  );
}
