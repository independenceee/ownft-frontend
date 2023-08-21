import React, { useState, useLayoutEffect, createContext, ReactNode } from "react";
import { ThemeType } from "@/configs/type";

type Props = {
    children: ReactNode;
};
enum MODE {
    "LIGHT",
    "DARK",
}
const ThemeContext: React.Context<ThemeType> = createContext<ThemeType>(null!);
const ThemeProvider = function ({ children }: Props) {
    const getDefaultMode = function () {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem("theme");
            return savedMode ? savedMode : "DARK";
        } else {
            return "DARK";
        }
    };
    const [theme, setTheme] = useState<string>(getDefaultMode());

    const switchTheme = function () {
        theme === "DARK" ? setTheme("LIGHT") : setTheme("DARK");
    };

    useLayoutEffect(
        function () {
            if (theme === "DARK") {
                document.body.classList.remove("LIGHT");
                document.body.classList.add("DARK");
            }
            if (theme === "LIGHT") {
                document.body.classList.remove("DARK");
                document.body.classList.add("LIGHT");
            }
            localStorage.setItem("theme", theme);

            return function () {};
        },
        [theme],
    );

    return <ThemeContext.Provider value={{ theme, setTheme, switchTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext };
export default ThemeProvider;
