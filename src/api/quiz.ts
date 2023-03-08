import { getApiUrl } from "../utils";
import { apiCall } from "../utils/request";

export const getQuiz = () =>
  apiCall({
    url: getApiUrl("/quiz"),
  });
