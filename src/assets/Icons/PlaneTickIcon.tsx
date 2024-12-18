import { createIcon } from "@chakra-ui/react";
import React from "react";
export const PlaneTickIcon: React.FC = createIcon({
  displayName: "PlaneTickIcon",
  viewBox: "0 0 24 24",
  path: (
    <svg
      width="32"
      height="32"
      viewBox="0 -1 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="16" height="16" rx="8" fill="#05CD99" />
      <g clipPath="url(#clip0_2_1219)">
        <path
          d="M6.82069 9.74874L5.21653 8.14457C5.03778 7.96582 4.75361 7.96582 4.57486 8.14457C4.39611 8.32332 4.39611 8.60749 4.57486 8.78624L6.49528 10.7067C6.67403 10.8854 6.96277 10.8854 7.14153 10.7067L11.9999 5.85291C12.1786 5.67416 12.1786 5.38999 11.9999 5.21124C11.8211 5.03249 11.5369 5.03249 11.3582 5.21124L6.82069 9.74874Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_1219">
          <rect
            width="11"
            height="11"
            fill="white"
            transform="translate(2.69568 2.32373)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
});
