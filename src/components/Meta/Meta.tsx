import React from "react";
import Head from "next/head";

type Props = {
    title?: string;
    keywords?: string;
    description?: string;
    icon?: string;
};

const Meta = function ({ title, keywords, description, icon }: Props) {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="keywords" content={keywords} />
            <meta name="decription" content={description} />
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

Meta.defaultProps = {
    title: "Ownft",
    keywords: "Ownft",
    description: "Ownft",
    icon: "/favicon.ico",
};

export default Meta;
