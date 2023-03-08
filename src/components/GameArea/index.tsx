import { submitQuiz } from "@/api/quiz";
import { MODAL_TYPES } from "@/constants";
import LatestQuizResponse from "@/models/QuizResponse";
import { useScreenStore } from "@/zustand";
import useModalStore from "@/zustand/useModal";
import React, { KeyboardEvent, useState } from "react";
import { useMutation } from "react-query";
import { twMerge } from "tailwind-merge";
import useSound from "use-sound";
import CustomKeyboard from "../CustomKeyboard";
import Word from "../Word";

type Props = {
  quiz: LatestQuizResponse;
};

const WORDS = ["Knob", "Mat", "Bell"];

function GameArea({ quiz }: Props) {
  const [isWrong, setIsWrong] = useState(false);
  const { setResultScreen } = useScreenStore((state) => state);
  const { showModal } = useModalStore((state) => state);
  // const [value, setValue] = useState("");
  const [play] = useSound("/fanfare.mp3");

  const submitMutation = useMutation(submitQuiz, {
    onError: () => {
      setIsWrong(true);
    },
    onSuccess: () => {
      setResultScreen();
      play();
    },
  });

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // setResultScreen();
      // play();
      submitMutation.mutate(quiz.id);
    }
  };

  // const handleChange = (val: any) => setValue(val);

  return (
    <div className="px-4">
      <p className="text-[#EEEEEE] text-lg mt-6 leading-[21px]">
        Guess a common prefix/suffix that pairs <br />
        with the words below:
      </p>
      <div className="flex flex-col items-center mt-12 mb-16">
        {WORDS.map((word, idx) => (
          <Word title={word} className="pb-[10px] last:pb-0" key={idx} />
        ))}
      </div>
      <div className="w-[274px] mx-auto">
        <input
          name="answer"
          placeholder="Type from letters below"
          className={twMerge(
            "leading-[21px] w-full bg-[#0C0C0C] border-[0.5px] border-solid border-[#DDDDDD] py-[14px] px-10 outline-none text-center text-2xl font-bold",
            isWrong && "bg-[#CD2828] text-white"
          )}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          // value={value}
          // readOnly
        />
      </div>
      {/* <CustomKeyboard onChange={handleChange} onKeyReleased={handleKeyDown} /> */}

      <p
        className="text-[#828282] text-[15px] text-center leading-[18px] mt-[29px] "
        onClick={() =>
          showModal({
            modalType: MODAL_TYPES.HINT_MODAL,
          })
        }
      >
        Need Hint?
      </p>
    </div>
  );
}

export default GameArea;
