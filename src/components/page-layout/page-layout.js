import React from "react";
import { Hero } from "../hero/hero";

import "./page-layout.scss";

/**
 * A super simple layout for the different pages of this app.This component is the
 * responsible for managing responsiveness of the page.
 *
 * If the `hero` prop is passed along this layout adjusts to show it properly.
 */
export function PageLayout({ hero, children }) {
  return (
    <React.Fragment>
      {hero && <Hero {...hero}></Hero>}
      <section className="layout">{children}</section>
    </React.Fragment>
  );
}
