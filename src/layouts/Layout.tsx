import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import styles from "./Layout.module.scss";

const cx = classNames.bind(styles);
type Props = {
    children: ReactNode;
};

const Layout = function ({ children }: Props) {
    return <div>{children}</div>;
};

export default Layout;
