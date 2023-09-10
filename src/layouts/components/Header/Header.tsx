import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Navbar from "../Navbar";

const cx = classNames.bind(styles);

type Props = {};

const Header = function ({}: Props) {
    return (
        <header className={cx("wrapper")}>
            <Navbar />
        </header>
    );
};

export default Header;
