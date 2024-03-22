import React, { ReactNode } from "react";

const PlacesLayout = ({ children }: { children: ReactNode }) => {
  return <div className="flex w-full">{children}</div>;
}

export default PlacesLayout;