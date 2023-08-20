import React, { useState, useEffect, createContext, ReactNode } from "react";
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
            return savedMode ? savedMode : "LIGHT";
        } else {
            return "LIGHT";
        }
    };
    const [theme, setTheme] = useState<string>(getDefaultMode());

    const switchTheme = function () {
        theme === "DARK" ? setTheme("LIGHT") : setTheme("DARK");
    };

    useEffect(
        function () {
            if (theme === "DARK") {
                document.body.classList.remove("light")
                document.body.classList.add("dark");
            }
            if (theme === "LIGHT") {
                document.body.classList.remove("dark")
                document.body.classList.add("light");

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
