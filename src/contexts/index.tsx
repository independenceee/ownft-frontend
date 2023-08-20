import React, { ReactNode } from "react";
import ThemeProvider from "./Theme";
type Props = {
    children: ReactNode;
};
const ContextProvider = function ({ children }: Props) {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default ContextProvider;
