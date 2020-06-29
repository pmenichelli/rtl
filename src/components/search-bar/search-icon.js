import React from "react";

export default function SearchIcon() {
  return (
    <svg
      className="search-bar__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 50 50"
    >
      <path d="M21 3C11.6 3 4 10.6 4 20s7.6 17 17 17 17-7.6 17-17S30.4 3 21 3zm0 30c-7.2 0-13-5.8-13-13S13.8 7 21 7s13 5.8 13 13-5.8 13-13 13z"></path>
      <path
        fill="currentColor"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M31.2 31.2l13.3 13.3"
      ></path>
    </svg>
  );
}
