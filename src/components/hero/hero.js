import React from "react";

import "./hero.scss";

/**
 * WARNING: I'm using dangerouslySetInnerHTML cause it's the fastest solution for the moment. Seems
 * like the API return the summary of each show as an HTML string wich is arguable. But I'm aware of the security concerns.
 *
 * @param {*} param0
 */
export function Hero({ headline, subtext, imageUrl }) {
  const style = {
    backgroundImage: `url(${imageUrl})`,
  };
  return (
    <div className="hero" style={style}>
      <div className="hero__inner">
        <h1 className="hero__headline">{headline}</h1>
        <p
          className="hero__subtext"
          dangerouslySetInnerHTML={{ __html: subtext }}
        ></p>
      </div>
    </div>
  );
}
