import { http } from "@/lib/http";

const prefix = "exams/";

const examApiRequest = {
  getPublishedExam: (examId: string) => http.get(`${prefix}${examId}`).json(),
};

export default examApiRequest;
