import React from "react";
import * as C from '@helpers/constants'

interface Props {
  size: number;
  type?: string;
}

const handleDegrees = (type: string): number => {
  let degrees = 0;
  switch (type) {
    case C.ICON_LEFT:
      degrees = 0
      break;
    case C.ICON_RIGHT:
      degrees = 180
      break;
  
    default:
      break;
  }
  return degrees;
}

const ArrowIcon = ({ size, type = C.ICON_LEFT }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size, transform: `rotate(${handleDegrees(type)}deg)` }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
};

export default ArrowIcon;
