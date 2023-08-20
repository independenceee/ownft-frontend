import React, { ReactNode } from "react";
import Link from "next/link";
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

type Props = {
    to: string;
    href: string;
    primary: boolean;
    outline: boolean;
    text: boolean;
    rounded: boolean;
    disabled: boolean;
    small: boolean;
    large: boolean;
    children: ReactNode;
    className: string;
    leftIcon: any; // IconType
    rightIcon: any; // IconType
    onClick: () => any;
};

const Button = function ({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}: Props) {
    let Component = "button";
    const props: any = {
        onClick,
        ...passProps,
    };
    const classes = cx("wrapper", {
        [className]: className,
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
    });
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Component>
    );
};

export default Button;
