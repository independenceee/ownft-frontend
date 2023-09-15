import React from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./Home.module.scss";
import Button from "@/components/Button";
import images from "@/assets/images";
import benefitList from "@/constants/benefit";
import { useTypewriter } from "react-simple-typewriter";
import Meta from "@/components/Meta";
import Benefit from "@/components/Benefit";

const cx = classNames.bind(styles);
type Props = {};

const Home = function ({}: Props) {
    const words = ["Cardano development environment for professionals"];
    const [text, count] = useTypewriter({
        words,
        loop: true,
        delaySpeed: 10000,
    });
    return (
        <main className={cx("wrapper")}>
            <Meta title="Home - Ownft" />
            <div className={cx("container")}>
                {/* silder */}
                <section className={cx("slider-wrapper")}>
                    <div className={cx("slider-container")}>
                        <div className={cx("slider-left")}>
                            <h3 className={cx("slider-title")}>Ownft</h3>
                            <h3 className={cx("slider-content")}>{text}</h3>
                            <p className={cx("slider-description")}>
                                The title "The Power of the Ballot: Contributing to Democracy" captures the essence of
                                the crucial role voting plays in empowering democratic systems. It highlights the
                                significance of individual voices and their impact through the act of casting a ballot.
                                The title combines the political aspect with a profound understanding of the power of
                                democracy, emphasizing the influence citizens hold in shaping the course of their
                                nations through the act of voting.
                            </p>
                            <div className={cx("slider-button")}>
                                <Button>Get started</Button>
                            </div>
                        </div>

                        <div className={cx("slider-right")}>
                            <div className={cx("image-container")}>
                                <Image className={cx("image")} src={images.ownft} alt="OWNFT" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Benefit */}
                <section className={cx("benefit-wrapper")}>
                    <div className={cx("benefit-container")}>
                        <header className={cx("benefit-header")}>
                            <h2 className={cx("benefit-title")}>BENEFITS</h2>
                            <p className={cx("benefit-description")}>
                                Change anything you like. Even entire out-of-the-box tasks, or just parts of them.
                                Flexible and customizable design, with little constraints.
                            </p>
                        </header>
                        <section className={cx("benefit-inner")}>
                            {benefitList.map(function ({ description, image, name, url }, index) {
                                return (
                                    <Benefit
                                        key={index}
                                        description={description}
                                        image={image}
                                        title={name}
                                        url={url}
                                    />
                                );
                            })}
                        </section>
                    </div>
                </section>
                {/* Information */}

                <section className={cx("information-wrapper")}>
                    <h1>About Us</h1>
                    <div className={cx("information-container")}>
                        <Image src={images.about} alt="" className={cx("image")} />
                        <div className={cx("content")}>
                            <h5>MODULES IN OWNFT PROPOSALPROPOSAL</h5>
                            <p>
                                Tracking the details of NFTs, transactions, UTXO ... .Connect wallet, mint or burn NFT,
                                collection. Demo transaction page to help everyone approach. Participate the voting
                                systemResearch and develop Blockchain Cardano
                            </p>
                            <Button>Learn more</Button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;
