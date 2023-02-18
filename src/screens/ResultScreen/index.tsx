import React, { useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import AdBanner from "@/components/AdBanner";
import Donate from "@/components/Donate";
import { DownloadIcon, FacebookIcon, WhatsappIcon } from "@/components/ImgIcon";

type Props = {};

function ResultScreen({}: Props) {
  const { width, height } = useWindowSize();

  return (
    <div>
      <Confetti
        width={width}
        height={height}
        recycle={false}
        onConfettiComplete={(confetti) => {
          confetti?.reset();
        }}
      />
      <AdBanner />
      {/* SCORE */}
      <div className="pt-[62px] pb-[32px] flex flex-col items-center">
        <p className="text-2xl font-[500] mb-8">
          Score: <span className="text-[#33F5F5]">510 points</span>
        </p>
        <p className="text-center ">
          <span className="font-[300] leading-[19px]">
            Congrats! You have found the <br />
            word in 28 seconds, you’re among
          </span>
          <br />
          <span className="px-[18px] py-[10px] text-[#101010] bg-[#33F5F5] inline-block mt-[9px] mb-4">
            Top 15%
          </span>
          <br />
          <span className="font-[300] leading-[19px]">
            of the people who played <br /> the game & scored.
          </span>
        </p>
      </div>

      <div className="border border-solid border-[#4B4B4B] mx-[5px]" />

      {/* SHARE */}
      <div className="px-[60px] pt-[33px] pb-[27px]">
        <p>Share this achievement with others</p>
        <div className="flex justify-between mt-4">
          <div className="bg-[#4B4B4B] w-20 py-2.5 flex items-center justify-center">
            <WhatsappIcon />
          </div>
          <div className="bg-[#4B4B4B] w-20 py-2.5 flex items-center justify-center">
            <FacebookIcon />
          </div>
          <div className="bg-[#4B4B4B] w-20 py-2.5 flex items-center justify-center">
            <DownloadIcon />
          </div>
        </div>
      </div>

      <div className="border border-solid border-[#4B4B4B] mx-[5px]" />

      {/* Donate */}
      <div className="px-8 flex flex-col items-center justify-center pt-[72px] pb-[66px]">
        <p className="mb-8 font-[300] leading-[19px]">
          Liked the game? Support Us
        </p>
        <Donate />
      </div>
    </div>
  );
}

export default ResultScreen;
