import { useScreenStore } from "@/zustand";
import useModalStore from "@/zustand/useModal";
import React from "react";
import Button from "../Button";
import { CloseIcon } from "../ImgIcon";

type Props = {};

function HowToPlayModal({}: Props) {
  const { hideModal } = useModalStore((state) => state);
  const { setGameplay } = useScreenStore((state) => state);
  return (
    <div className="relative max-w-[358px] bg-[#101010] mx-auto pt-8 pb-[26px] flex flex-col items-center mt-[150px]">
      <CloseIcon className="absolute right-6 top-6" onClick={hideModal} />
      <p className="text-2xl font-semibold">How to play</p>
      <p className="text-lg font-light leading-[21px] mt-4">
        Guess a common word that pairs <br /> with multiple prefix and suffix.
      </p>

      <hr className="mt-[29px] mb-6 bg-[#454545] w-full" />

      <p className="mb-[15px] text-sm font-medium leading-[17px]">EXAMPLE</p>

      <p>
        <span className="text-[#33F5F5] tracking-[.18em] text-2xl">DOOR</span>{" "}
        <span className="text-3xl font-bold">KNOB</span>
      </p>
      <p className="my-[10px]">
        <span className="text-[#33F5F5] tracking-[.18em] text-2xl">DOOR</span>{" "}
        <span className="text-3xl font-bold">MAT</span>
      </p>
      <p>
        <span className="text-3xl font-bold">BIG</span>{" "}
        <span className="text-[#33F5F5] tracking-[.18em] text-2xl">DOOR</span>
      </p>
      <p className="mt-[60px] mb-11 font-light">
        “<span className="text-[#33F5F5]">DOOR</span>” being the common word
        here <br /> that pairs with KNOB, MAT & BIG
      </p>

      <Button
        title="Got it, Start Game"
        className="w-[308px]"
        onClick={() => {
          setGameplay();
          hideModal();
        }}
      />
    </div>
  );
}

export default HowToPlayModal;
