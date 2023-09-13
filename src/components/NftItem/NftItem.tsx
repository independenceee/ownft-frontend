import React from "react";
import classNames from "classnames/bind";
import styles from "./NftItem.module.scss";
import Image from "next/image";
import images from "../../assets/images";

const cx = classNames.bind(styles);

type Props = {
    imageUrl: string;
    title: string;
    desription: string;
    policyId: string;
};
const NftItem = function ({ imageUrl, title, desription, policyId }: Props) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("image-container")}>
                    <Image className={cx("image")} src={images.dailyCoin} alt="" />
                </div>
                <div className={cx("content")}>
                    <h3 className={cx("title")}>DAILY COIN</h3>
                    <p className={cx("description")}>Description in here</p>
                    <p className={cx("policyId")}>PolicyID:vdsvdsvvasdfwegfdsvdsfvdfds...</p>
                </div>
            </div>
        </div>
    );
};

export default NftItem;
