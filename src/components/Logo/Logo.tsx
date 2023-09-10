import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames/bind";

import config from "@/configs";
import styles from "./Logo.module.scss";
import images from "@/assets/images";

const cx = classNames.bind(styles);
type Props = {};

const Logo = function ({}: Props) {
    return (
        <Link href={config.routes.home} className={cx("wrapper")}>
            <Image className={cx("image")} src={images.logo} alt="Logo Image" />
            <span className={cx("content")}>Ownft</span>
        </Link>
    );
};

export default Logo;
