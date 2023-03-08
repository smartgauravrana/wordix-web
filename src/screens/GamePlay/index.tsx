import { getQuiz } from "@/api/quiz";
import AdBanner from "@/components/AdBanner";
import GameArea from "@/components/GameArea";
import Header from "@/components/Header";
import LatestQuizResponse from "@/models/QuizResponse";
import { CircularProgress } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";

type Props = {};

function GamePlay({}: Props) {
  const quizQuery = useQuery<LatestQuizResponse>("quiz", getQuiz, {
    cacheTime: Infinity,
  });

  return (
    <div>
      <Header />
      <AdBanner />
      {quizQuery.isLoading ? (
        <CircularProgress className="block mx-auto mt-8" />
      ) : (
        <GameArea quiz={quizQuery.data as LatestQuizResponse} />
      )}
    </div>
  );
}

export default GamePlay;
