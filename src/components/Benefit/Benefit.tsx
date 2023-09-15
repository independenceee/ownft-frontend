import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import Button from "@/components/Button";
import styles from "./Benefit.module.scss";

const cx = classNames.bind(styles);
type Props = {
    title: string;
    image: string | any;
    description: string;
    url: string;
};

const Benefit = function ({ title, image, description, url }: Props) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <Image className={cx("image")} src={image} alt="" />
                <h3 className={cx("title")}>{title}</h3>
                <p className={cx("description")}>{description}</p>
                <Button>Learn more</Button>
            </div>
        </div>
    );
};

export default Benefit;
