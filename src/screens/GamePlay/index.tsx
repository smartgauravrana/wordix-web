import { getQuiz } from "@/api/quiz";
import AdBanner from "@/components/AdBanner";
import GameArea from "@/components/GameArea";
import Header from "@/components/Header";
import LatestQuizResponse from "@/models/QuizResponse";
import React from "react";
import { useQuery } from "react-query";

type Props = {};

function GamePlay({}: Props) {
  const quizQuery = useQuery<LatestQuizResponse>("quiz", getQuiz);
  console.log(quizQuery);
  return (
    <div>
      <Header />
      <AdBanner />
      <GameArea />
    </div>
  );
}

export default GamePlay;
