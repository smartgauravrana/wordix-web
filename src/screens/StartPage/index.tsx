import Button from "@/components/Button";
import Logo from "@/components/Logo";
import React from "react";

type Props = {};

function StartPage({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center w-[284px] mx-auto">
      <Logo />
      <p className="my-10 text-lg">
        Guess a common word that pairs with multiple prefix and suffix.
      </p>
      <Button title="Start Game" className="mb-5" />
      <Button title="How to play" variant="wired" />
      <p className="mt-12 text-[#828282] text-sm">
        Fun Fact: It’s reported that people who play word games have higher IQ
        than 73% of the population{" "}
      </p>
    </div>
  );
}

export default StartPage;
