import React from "react";
import { HelpIcon, LeaderboardIcon } from "../ImgIcon";
import Logo from "../Logo";
import Timer from "../Timer";

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex items-center justify-between px-[10px] h-[82px]">
      <Logo />
      <Timer />
      <div className="flex items-center">
        <HelpIcon />
        <LeaderboardIcon className="ml-[14px]" />
      </div>
    </div>
  );
}

export default Header;
