import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Layout.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

const cx = classNames.bind(styles);
type Props = {
    children: ReactNode;
};

const Layout = function ({ children }: Props) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
