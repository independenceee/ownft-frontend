import React from "react";
import classNames from "classnames/bind";
import images from "@/assets/images";
import Navbar from "../Navbar";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

type Props = {};

const Header = function ({}: Props) {
    return (
        <header className={cx("wrapper")}>
            {/* Option */}
            <Navbar />
        </header>
    );
};

export default Header;
