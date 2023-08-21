import React, { ReactNode } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { IconType } from "react-icons";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

type Props = {
    to?: string;
    href?: string;
    primary?: boolean;
    outline?: false;
    text?: false;
    rounded?: false;
    disabled?: false;
    small?: false;
    large?: false;
    children: ReactNode;
    className?: string | any;
    leftIcon?: IconType | any;
    rightIcon?: IconType | any;
    onClick?: () => void;
};
const Button = function ({
    to,
    href,
    primary,
    onClick,
    outline,
    children,
    className,
    disabled,
    large,
    leftIcon,
    rightIcon,
    rounded,
    small,
    text,
    ...passProps
}: Props) {
    let Component: any = "button";
    const props: any = {
        onClick,
        href,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach(function (key) {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }

    if (to) {
        props.href = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = "a";
    }

    const classes: any = cx("wrapper", {
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
