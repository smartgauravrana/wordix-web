import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  onClick?: () => void;
};

function LeaderboardIcon({ className = "" }: Props) {
  return <img className={twMerge("h-7", className)} src="/leaderboard.png" />;
}

function HelpIcon({ className = "" }: Props) {
  return <img className={twMerge("h-5", className)} src="/help-circle.png" />;
}

function WhatsappIcon({ className = "" }: Props) {
  return <img className={twMerge("h-6", className)} src="/whatsapp.png" />;
}
function FacebookIcon({ className = "" }: Props) {
  return <img className={twMerge("h-6", className)} src="/facebook.png" />;
}
function DownloadIcon({ className = "" }: Props) {
  return <img className={twMerge("h-6", className)} src="/download.png" />;
}

function CloseIcon({ className = "", onClick }: Props) {
  return (
    <img
      className={twMerge("h-4", className)}
      src="/close-btn.png"
      onClick={() => onClick && onClick()}
    />
  );
}

export {
  LeaderboardIcon,
  HelpIcon,
  WhatsappIcon,
  FacebookIcon,
  DownloadIcon,
  CloseIcon,
};
