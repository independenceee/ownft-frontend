import React from "react";
import Logo from "@/components/Logo";
import Button from "../../../components/Button";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);
type Props = {};

const Navbar = function ({}: Props) {
    return (
        <nav className={cx("wrapper")}>
            <Logo />
        </nav>
    );
};

export default Navbar;
