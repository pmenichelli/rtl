import React from "react";
import "./tile.scss";

/**
 * Tile component with an animated CTA. Primarily used to represent a tv show.
 *
 * - Expects an object with the following props:
 *
 * @param string url: A url for a backaground image whose width and height should be have speifically 210x295 as
 * this is the size of the image the api returns. Other sizes will work but browser will spend time resizing, thus loosing performance.
 *
 * @param string title: The title of the tile.
 *
 * @param string subtitle: The subtitle of the tile.
 *
 * @param string cta: The CTA text for the tile.
 */
export function Tile({ url, title, subtitle, cta }) {
  const containerBackground = {
    backgroundImage: `url(${url})`,
  };

  return (
    <div className="tile" style={containerBackground}>
      <p className="tile__title">
        <small className="tile__subtitle">{subtitle}</small>
        {title}
      </p>
      <div className="tile__button">{cta || "Check this out"}</div>
    </div>
  );
}
