"use client";

import { CustomButtonProps } from "@/types";

const CustomButtom = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>Title</span>
    </button>
  );
};

export default CustomButtom;
