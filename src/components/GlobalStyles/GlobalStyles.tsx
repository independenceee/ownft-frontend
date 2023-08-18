import React, { ReactNode } from "react";
import "./GlobalStyles.scss";

type Props = {
    children: ReactNode;
};
const GlobalStyles = function ({ children }: Props) {
    return children;
};

export default GlobalStyles;
