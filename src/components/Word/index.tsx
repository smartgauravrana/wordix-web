import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  className?: string;
};

function Word({ title, className = "" }: Props) {
  return (
    <div
      className={twMerge(
        "text-3xl font-bold tracking-[0.25em] uppercase",
        className
      )}
    >
      {title}
    </div>
  );
}

export default Word;
