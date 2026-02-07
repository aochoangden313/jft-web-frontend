import examApiRequest from "@/apiRequest/exam";
import { useQuery } from "@tanstack/react-query";

export const usePublishedExamQuery = ({ examId }: { examId: string }) => {
  return useQuery({
    queryKey: ["exam", examId],
    queryFn: () => examApiRequest.getPublishedExam(examId),
    enabled: Boolean(examId),
  });
};
