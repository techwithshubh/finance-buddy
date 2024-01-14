import React from "react";
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="box-border">
      <Header />
      {children}
    </div>
  );
};
