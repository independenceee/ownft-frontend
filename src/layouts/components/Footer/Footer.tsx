import React from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import Logo from "@/components/Logo";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

type Props = {};

const Footer = function ({}: Props) {
    return (
        <footer className={cx("wrapper")}>
            <div className={cx("container")}>
                <section className={cx("aboutus")}>
                    <Logo />
                    <p className={cx("description")}>
                        Change anything you like. Even entire out-of-the-box tasks, or just parts of them. Flexible and
                        customizable design, with little constraints.
                    </p>
                    <div className={cx("list-icon")}>
                        <Link href="#" className={cx("icon-link")}>
                            <FaFacebookSquare className={cx("icon")} />
                        </Link>
                        <Link href="#" className={cx("icon-link")}>
                            <BsInstagram className={cx("icon")} />
                        </Link>
                        <Link href="#" className={cx("icon-link")}>
                            <BsLinkedin className={cx("icon")} />
                        </Link>
                        <Link href="#" className={cx("icon-link")}>
                            <FaTwitter className={cx("icon")} />
                        </Link>
                        <Link href="#" className={cx("icon-link")}>
                            <BsGithub className={cx("icon")} />
                        </Link>
                    </div>
                </section>

                <section className={cx("content")}>
                    <h2 className={cx("heading")}>SERVICES</h2>
                    <ul className={cx("link-list")}>
                        <li className={cx("link-item")}>
                            <Link href={""}>Home</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Transaction</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>History</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Mint</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Assets</Link>
                        </li>
                    </ul>
                </section>
                <section className={cx("content")}>
                    <h2 className={cx("heading")}>SERVICES</h2>
                    <ul className={cx("link-list")}>
                        <li className={cx("link-item")}>
                            <Link href={""}>Home</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Transaction</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>History</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Mint</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Assets</Link>
                        </li>
                    </ul>
                </section>
                <section className={cx("content")}>
                    <h2 className={cx("heading")}>SERVICES</h2>
                    <ul className={cx("link-list")}>
                        <li className={cx("link-item")}>
                            <Link href={""}>Home</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Transaction</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>History</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Mint</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Assets</Link>
                        </li>
                    </ul>
                </section>
                <section className={cx("content")}>
                    <h2 className={cx("heading")}>SERVICES</h2>
                    <ul className={cx("link-list")}>
                        <li className={cx("link-item")}>
                            <Link href={""}>Home</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Transaction</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>History</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Mint</Link>
                        </li>
                        <li className={cx("link-item")}>
                            <Link href={""}>Assets</Link>
                        </li>
                    </ul>
                </section>
            </div>

            <div className={cx("license")}>
                <section className={cx("policy")}>Copyright 2023 BLOCKREATE |Privacy Policy</section>
                <section className={cx("policy")}>BLOCKREATE Foundation</section>
            </div>
        </footer>
    );
};

export default Footer;
