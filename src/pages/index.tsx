import React, { useContext } from "react";
import { ThemeType } from "@/configs/type";
import { ThemeContext } from "@/contexts/Theme";
type Props = {};

const Home = function ({}: Props) {
    const { switchTheme } = useContext<ThemeType>(ThemeContext);
    return (
        <React.Fragment>
            <button onClick={switchTheme}>Toggle Theme</button>
        </React.Fragment>
    );
};

export default Home;
