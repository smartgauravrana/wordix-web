import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

function LeaderboardIcon({ className = "" }: Props) {
  return <img className={twMerge("h-7", className)} src="/leaderboard.png" />;
}

function HelpIcon({ className = "" }: Props) {
  return <img className={twMerge("h-5", className)} src="/help-circle.png" />;
}

export { LeaderboardIcon, HelpIcon };
