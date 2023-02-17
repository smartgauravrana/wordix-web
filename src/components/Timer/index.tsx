import React from "react";

type Props = {};

function Timer({}: Props) {
  return (
    <div className="text-[#919191]">
      <p className="text-xs ">Time elapsed</p>
      <div className="border border-solid border-[#4E4E4E] text-center mt-2">
        00{" : "}20
      </div>
    </div>
  );
}

export default Timer;
