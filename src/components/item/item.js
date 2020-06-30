import React from "react";

import "./item.scss";

/**
 * Item component to use within a list. Primarily used to represent a tv show episode.
 *
 * WARNING: I'm using dangerouslySetInnerHTML cause it's the fastest solution for the moment. Seems
 * like the API return the summary of each show as an HTML string wich is arguable. But I'm aware of the security concerns.
 *
 * NOTE: Didn't have time to make this item responsive, but should define that to improve the app.
 *
 * - Expects an object with the following props:
 *
 * @param string url: A url for the thumbnail of this item.
 *
 * @param string title: The title of the tile.
 *
 * @param string description: The description of the item.
 */
export function Item({ url, title, description }) {
  return (
    <div className="item">
      <div className="item__image">
        <img src={url} alt={title} />
      </div>
      <div className="item__info">
        <h4 className="item_title">{title}</h4>
        <p
          className="item__description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
}
