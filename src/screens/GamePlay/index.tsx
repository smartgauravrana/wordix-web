import AdBanner from "@/components/AdBanner";
import GameArea from "@/components/GameArea";
import Header from "@/components/Header";
import React from "react";

type Props = {};

function GamePlay({}: Props) {
  return (
    <div>
      <Header />
      <AdBanner />
      <GameArea />
    </div>
  );
}

export default GamePlay;
