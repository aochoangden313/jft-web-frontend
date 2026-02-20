import { http } from "@/lib/http";
import type {
  ExamSessionType,
  ExamType,
  SessionDetailType,
} from "@/schemaValidations/exam.schema";

const prefix = "exams/";

const examApiRequest = {
  getPublishedExam: (examId: string) =>
    http.get(`${prefix}${examId}`).json<ExamType>(),

  startSession: (examId: string) =>
    http.post(`${prefix}${examId}/sessions`).json<ExamSessionType>(),

  getSessionDetail: (examId: string, sessionId: string) =>
    http
      .get(`${prefix}${examId}/sessions/${sessionId}`)
      .json<SessionDetailType>(),
};

export default examApiRequest;
