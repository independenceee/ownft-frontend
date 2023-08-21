import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Layout.module.scss";
import Header from "./components/Header";

const cx = classNames.bind(styles);
type Props = {
    children: ReactNode;
};

const Layout = function ({ children }: Props) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;
