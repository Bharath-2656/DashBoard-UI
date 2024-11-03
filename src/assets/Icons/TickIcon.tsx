import { createIcon } from "@chakra-ui/react";
import React from "react";
export const TickIcon: React.FC = createIcon({
  displayName: "TickIcon",
  viewBox: "0 0 24 24",
  path: (
    <svg
      width="16"
      height="16"
      viewBox="0 -3 9 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4L3 6L8 1"
        stroke="#E6E4F0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
});
