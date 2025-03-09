"use client";

import { useState } from "react";

export function LikeHeart() {
    const [liked, setLiked] = useState(false);
    return (
      <svg
      onClick={() => setLiked(!liked)}
      cursor={'pointer'}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={liked ? "#D3302F" : "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99417 4.27984C8.328 2.332 5.54963 1.80804 3.46208 3.59168C1.37454 5.37532 1.08065 8.3575 2.72 10.467C4.08302 12.2209 8.20798 15.9201 9.55992 17.1173C9.71117 17.2513 9.78684 17.3183 9.875 17.3446C9.952 17.3676 10.0363 17.3676 10.1133 17.3446C10.2014 17.3183 10.2771 17.2513 10.4283 17.1173C11.7803 15.9201 15.9053 12.2209 17.2683 10.467C18.9076 8.3575 18.6496 5.35656 16.5262 3.59168C14.4028 1.8268 11.6603 2.332 9.99417 4.27984Z"
          stroke="#D3302F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }