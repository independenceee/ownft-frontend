import React, { useState, useContext } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import configs from "@/configs";
import Button from "@/components/Button";
import images from "@/assets/images";
import styles from "./Navbar.module.scss";
import NavbarOption from "./NavbarOption";
import { ThemeContext } from "@/contexts/Theme";
import { ThemeType } from "@/configs/type";

const cx = classNames.bind(styles);

type Props = {
    initial?: string;
};

const Navbar = function ({ initial = "HOME" }: Props) {
    const { switchTheme } = useContext<ThemeType>(ThemeContext);
    const [selected, setSelected] = useState<string>(initial);
    const [isActiveicon, setIsActiveIcon] = useState<boolean>(false);
    const navbarItems = [
        {
            name: "HOME",
            href: configs.routes.home,
        },
        {
            name: "TRACK",
            href: configs.routes.home,
        },
        {
            name: "TRANSACTION",
            href: configs.routes.home,
        },
        {
            name: "EXLORE",
            href: configs.routes.home,
        },
        {
            name: "NEW",
            href: configs.routes.home,
        },
    ];
    return (
        <nav className={cx("wrapper")}>
            <section className={cx("container")}>
                <Link href={configs.routes.home} className={cx("logo-container")}>
                    <Image src={images.logo} alt="Logo" className={cx("logo-image")} />
                    <span className={cx("logo-name")}>Ownft</span>
                </Link>
                <div className={cx("navbar")}>
                    {navbarItems.map(function (item, index) {
                        return (
                            <NavbarOption
                                key={index}
                                text={item.name}
                                redirect={item.href}
                                isActive={Boolean(selected === item.name)}
                                setSelected={setSelected}
                                Icon={null!}
                            />
                        );
                    })}
                </div>
                <Button onClick={switchTheme} className={cx("button-theme")}>
                    <Image src={images.themeMode} className={cx("theme-image")} alt="Theme Image" />
                </Button>
            </section>
        </nav>
    );
};

export default Navbar;
