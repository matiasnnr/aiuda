/* eslint-disable react/no-unknown-property */
import React from "react";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

const HeadAttributes = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadAttributes;
