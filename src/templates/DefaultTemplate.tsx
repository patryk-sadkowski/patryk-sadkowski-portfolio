import React from "react";
import { Header } from "../components/Header/Header";

interface Props {
  children?: React.ReactNode;
}

export const DefaultTemplate = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
