import React, { useState } from "react";
import classNames from "classnames/bind";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { publicRouter } from "@/routers";
import styles from "./Navbar.module.scss";
import NavbarOption from "./NavbarOption";

const cx = classNames.bind(styles);
type Props = {
    initial?: string;
};

const Navbar = function ({ initial = "HOME" }: Props) {
    const [selected, setSelected] = useState<string>(initial);
    const [isActiveicon, setIsActiveIcon] = useState<boolean>(false);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <Logo />
                <nav className={cx("navbar")}>
                    {publicRouter.map(function ({ name, path }, index) {
                        return (
                            <NavbarOption
                                key={index}
                                text={name}
                                redirect={path}
                                isActive={Boolean(selected === name)}
                                setSelected={setSelected}
                                Icon={null!}
                            />
                        );
                    })}
                </nav>
                <Button>Connect Wallet</Button>
            </div>
        </div>
    );
};

export default Navbar;
