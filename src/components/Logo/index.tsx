import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

function Logo({ className = "" }: Props) {
  return <img className={twMerge("h-7", className)} src="/logo.png" />;
}

export default Logo;
