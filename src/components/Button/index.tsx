import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { CircularProgress } from "@mui/material";
import MuiButton from "@mui/material/Button";

type ButtonVariants = "filled" | "wired";

type Props = {
  onClick?: () => void;
  title: string;
  disabled?: false;
  className?: string;
  isLoading?: boolean;
  variant?: ButtonVariants;
  children?: ReactElement;
};

const commonClassnames =
  "flex items-center rounded-[4px] py-[16px] w-[212px] leading-5 text-lg";

const VARIANTS_CLASSES = {
  filled: twMerge("bg-[#EEEEEE] "),
  wired: twMerge("bg-[#0C0C0C] border border-solid border-white text-white"),
};

function Button({
  onClick = () => {},
  title = "",
  disabled = false,
  className = "",
  isLoading = false,
  variant = "filled",
  children,
}: Props) {
  return (
    <MuiButton
      classes={{
        root: twMerge(commonClassnames, VARIANTS_CLASSES[variant], className),
      }}
      variant="contained"
      disabled={disabled}
      onClick={() => onClick && !isLoading && !disabled && onClick()}
    >
      {isLoading ? (
        <CircularProgress size={25} className="text-[#323331]" />
      ) : (
        title || children
      )}
    </MuiButton>
  );
}

export default Button;
