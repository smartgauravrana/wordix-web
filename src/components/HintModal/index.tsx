import useModalStore from "@/zustand/useModal";
import React from "react";
import Button from "../Button";
import { CloseIcon } from "../ImgIcon";

type Props = {};

function HintModal({}: Props) {
  const { hideModal } = useModalStore((state) => state);

  return (
    <div className="relative max-w-[360px] bg-[#101010] mx-auto pt-8 pb-[26px] flex flex-col items-center mt-[150px]">
      <CloseIcon className="absolute right-6 top-6" onClick={hideModal} />
      <p className="text-2xl font-semibold">Hint</p>
      <p className="font-medium mb-11 mt-6 text-center">
        <span className="text-[#33F5F5]">Another word will be unlocked.</span>{" "}
        <br />
        This will help you guess the common <br /> prefix/suffix better.
      </p>

      <p className="font-light mb-[35px] text-center">
        Taking the hint will increase the time <br /> elapsed by 3 minutes
      </p>

      <Button
        title="Take Hint"
        onClick={hideModal}
        className="mb-3 h-[52px] text-lg"
      />
      <Button
        variant="wired"
        title="I don’t need Hint"
        onClick={hideModal}
        className="h-9 text-sm"
      />
    </div>
  );
}

export default HintModal;
