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
        }

        return "LIGHT";
    };
    const [theme, setTheme] = useState<string>(getDefaultMode());

    const switchTheme = function () {
        if (theme === "LIGHT") {
            setTheme("DARK");
        } else {
            setTheme("LIGHT");
        }
    };

    useEffect(
        function () {
            if (theme === "DARK") {
                document.body.classList.add("light");
            } else {
                document.body.classList.add("dark");
            }
            localStorage.setItem("theme", theme);

            console.log(theme);
            return function () {};
        },
        [theme],
    );

    return <ThemeContext.Provider value={{ theme, setTheme, switchTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext };
export default ThemeProvider;
