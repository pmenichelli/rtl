import React from "react";
import "./hero.scss";

/**
 *
 * @param {*} param0
 */
export function Hero({ headline, subtext }) {
  return (
    <div className="hero">
      <div className="hero__inner">
        <h1 className="hero__headline">{headline}</h1>
        <p className="hero__subtext">{subtext}</p>
      </div>
    </div>
  );
}
