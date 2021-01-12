import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Card from "../components/card";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CMS_NAME } from "../lib/constants";
import { useState, Fragment, useEffect } from "react";
// import ScrollReveal from 'scrollreveal'
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";

import { styled, css } from "../lib/stitches.config.js";
import * as Tooltip from "@radix-ui/react-tooltip";
import toast, { Toaster } from "react-hot-toast";

import * as JsSearch from "js-search";

export default function Index({ icons, index }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sent) return;

    if (!email) return;

    console.log(`Submitting Name ${email}`);
    fetch("https://inspyr.sambarrowclough.repl.co", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: email }),
    }).then((r) => {
      console.log(r);
      setSub("Thank you!");
      setSent(true);
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  if (false) {
    let opt = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ from: document.referrer }),
    };
    let url = "https://inspyr.sambarrowclough.repl.co/track";
    console.log("tracking..");
    fetch(url, opt).then((r) => {
      console.log("tracked!");
      console.log(r);
    });
  }

  const customAnimation = keyframes`
		from {
			visibility: visible;
			opacity: 0;
			transform: matrix3d(0.95, 0, 0, 0, 0, 0.95, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
			transition: opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s;
		}

		to {
			visibility: visible;
			opacity: 1;
			transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
			transition: opacity 1s cubic-bezier(0.5, 0, 0, 1) 0s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0s;
		}
	`;

  function MyAnimatedComponent({ children, delay }) {
    return <div>{children}</div>;
  }
  // function MyAnimatedComponent({ children, delay}) {
  // 	return (
  // 		<Reveal
  // 			delay={delay}
  // 			duration='1000'
  // 			keyframes={customAnimation}
  // 			triggerOnce
  // 		>
  // 			{children}
  // 		</Reveal>
  // 	);
  // }

  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [sub, setSub] = useState("Subscribe for updates");

  return (
    <>
      <Layout>
        <Head>
          <title>
            inspyr - carefully selected pricing pages for inspiration
          </title>
        </Head>
        <Container>
          <div className="headline mt-4">
            <Link as={`/`} href="/">
              <a>
                <Image src="/inspyr.svg" width="32" height="32" />
              </a>
            </Link>
          </div>

          <Intro />

          <form
            onSubmit={handleSubmit}
            className="flex flex-row justify-center mb-16"
          >
            <div>
              <input
                placeholder="Email addres"
                className="bg-gray-100 transition-all focus:ring-2 rounded outline-none px-4 py-2 mr-4"
                type="text"
                value={email}
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                onClick={handleSubmit}
                className="bg-gray-900 text-white rounded px-4 py-2 hover:shadow-sm cursor-pointer transition-all"
                type="button"
                value={sub}
              />
            </div>
          </form>

          <div
            className="w-auto flex flex-wrap justify-center"
            style={{
              marginLeft: "-1em",
              margBottom: "-1em",
            }}
          >
            <MyAnimatedComponent>
              <Card
                background="#121212"
                pricing="/dsp.png"
                pricingWidth="290px"
                pricingHeight="183px"
                logo="/ds.svg"
                logoWidth="256"
                logoHeight="38px"
                link="light"
                external="/external-link-light.svg"
                url="https://deepsource.io/pricing/"
              />
            </MyAnimatedComponent>

            <MyAnimatedComponent delay="15">
              <Card
                background="#fff"
                pricing="/orm.png"
                pricingWidth="290px"
                pricingHeight="122px"
                logo="/rml.png"
                logoWidth="64px"
                logoHeight="64px"
                link="light"
                external="/external-link-dark.svg"
                url="https://www.onroadmap.com/pricing"
              />
            </MyAnimatedComponent>

            <MyAnimatedComponent delay="20">
              <Card
                background="linear-gradient(225deg, rgb(155, 66, 227), rgb(48, 51, 149))"
                pricing="/whim.png"
                pricingWidth="290px"
                pricingHeight="128px"
                logo="/wl.png"
                logoWidth="256"
                logoHeight="46px"
                link="light"
                external="/external-link-light.svg"
                url="https://www.openphone.co/pricing"
              />
            </MyAnimatedComponent>

            <MyAnimatedComponent delay="25">
              <Card
                background="#fff"
                pricing="/ch.png"
                pricingWidth="290px"
                pricingHeight="191px"
                logo="/ch.svg"
                logoWidth="256px"
                logoHeight="40px"
                link="light"
                external="/external-link-dark.svg"
                url="https://www.openphone.co/pricing"
              />
            </MyAnimatedComponent>

            <MyAnimatedComponent delay="0">
              <Card
                background="#060606"
                pricing="/lp.png"
                pricingWidth="290px"
                pricingHeight="256px"
                logo="/ll.svg"
                logoWidth="54px"
                logoHeight="54px"
                link="light"
                external="/external-link-light.svg"
                url="https://www.openphone.co/pricing"
              />
            </MyAnimatedComponent>

            <MyAnimatedComponent delay="15">
              <Card
                background="#000"
                pricing="/dekksp.png"
                pricingWidth="290px"
                pricingHeight="133"
                logo="/dekksl.svg"
                logoWidth="128"
                logoHeight="39"
                link="light"
                external="/external-link-light.svg"
                url="https://www.openphone.co/pricing"
              />
            </MyAnimatedComponent>

            <MyAnimatedComponent delay="20">
              <Card
                background="#1e202cf2"
                pricing="/css.png"
                pricingWidth="290px"
                pricingHeight="238"
                logo="/cssl.svg"
                logoWidth="64"
                logoHeight="64"
                link="light"
                external="/external-link-light.svg"
                url="https://www.openphone.co/pricing"
              />
            </MyAnimatedComponent>

            <MyAnimatedComponent delay="25">
              <Card
                background="#0d101e"
                pricing="/rpl.png"
                pricingWidth="290px"
                pricingHeight="125"
                logo="/rpll.svg"
                logoWidth="128px"
                logoHeight="47"
                link="light"
                external="/external-link-light.svg"
                url="https://www.openphone.co/pricing"
              />
            </MyAnimatedComponent>

            <MyAnimatedComponent delay="30">
              <Card
                background="#0e0e12"
                pricing="/op.png"
                pricingWidth="290px"
                pricingHeight="125px"
                logo="/opl.svg"
                logoWidth="256"
                logoHeight="41px"
                link="light"
                external="/external-link-light.svg"
                url="https://www.openphone.co/pricing"
              />
            </MyAnimatedComponent>
          </div>
        </Container>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {
// 	var icons = getIcons()

//   return {
//     props: { icons },
//   }
// }
