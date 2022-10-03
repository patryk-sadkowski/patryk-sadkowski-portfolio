import React from "react";
import { DefaultTemplate } from "../../templates/DefaultTemplate";
import HomePageHero from "./HomePageHero/HomePageHero";

export const HomePage = () => {
  return (
    <DefaultTemplate>
      <HomePageHero />
    </DefaultTemplate>
  );
};
