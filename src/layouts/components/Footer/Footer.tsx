import React from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import images from "@/assets/images";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

type Props = {};

const Footer = function ({}: Props) {
    return (
        <footer className={cx("wrapper")}>
            <section className={cx("container")}>
                <div className={cx("footer-left")}>
                    <div className={cx("logo")}>
                        {/* <Image className={cx("logo-image")} src={images.logo} alt="LOGO" /> */}
                        <span className={cx("logo-content")}>OWNFT</span>
                    </div>
                    <p className="description">
                        Change anything you like. Even entire out-of-the-box tasks, or just parts of them. Flexible and
                        customizable design, with little constraints.
                    </p>
                </div>
                <div className={cx("footer-center")}>
                    <div className={cx("inner")}>
                        <h2 className={cx("heading")}>SERVICES</h2>
                        <ul className={cx("contain")}>
                            <li>
                                <Link href={"/track"}>Track</Link>
                                <Link href={"/track"}>Track</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx("footer-right")}></div>
            </section>
            {/* origin  */}
            <section className={cx("origin")}>
                <div className={cx("policy")}>
                    <h3>
                        Copyright 2023 BLOCKREATE | <span> Privacy Policy</span>
                    </h3>
                </div>
                <div className={cx("policy")}>
                    <h3>BLOCKREATE Foundation</h3>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
