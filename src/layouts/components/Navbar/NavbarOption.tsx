import React, { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames/bind";
import { IconType } from "react-icons";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

type Props = {
    text: string;
    Icon?: IconType;
    isActive?: boolean;
    setSelected?: Dispatch<SetStateAction<string>>;
    redirect: string;
};

const NavbarOption = function ({ text, isActive, setSelected, redirect }: Props) {
    const router = useRouter();
    const handleClick = function (content = text) {
        if (setSelected && redirect) {
            setSelected(content);
            router.push(redirect);
        } else {
            return;
        }
    };
    return (
        <Link
            href={redirect}
            className={cx("navbar-link")}
            onClick={function () {
                handleClick(text);
            }}
        >
            <span className={cx(`${isActive ? "navbar-content-active" : "navbar-content"}`)}>{text}</span>
        </Link>
    );
};

export default NavbarOption;
