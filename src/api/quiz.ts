import { getApiUrl } from "../utils";
import { apiCall, HTTP_METHODS } from "../utils/request";

export const getQuiz = () =>
  apiCall({
    url: getApiUrl("/quiz"),
  });

export const submitQuiz = (quizId: string) =>
  apiCall({
    method: HTTP_METHODS.POST,
    url: getApiUrl(`/quiz/${quizId}/submit`),
  });
