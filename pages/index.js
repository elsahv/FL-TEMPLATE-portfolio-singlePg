/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { sanityClient, urlFor } from "../client";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { Title } from "../components/styles/title.styled";
import { Flex } from "../components/styles/flex.styled";
import {
  PortfolioGrid,
  Sq,
  Button,
  IconWrapper,
  Icon,
} from "../components/styles/websites.styled";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import About from "../components/About";

const Home = ({ websites }) => {
  return (
    <>
      <Head>
        <title>Photography Portfolio Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Intro />
        {/* WORKS */}
        <Title id="works">Works</Title>
        <PortfolioGrid>
          {websites &&
            websites.map((website, index) => (
              <span key={index}>
                <Sq>
                  <Flex>
                    <h3>{website.websiteTitle}</h3>
                    <Icon>(i)</Icon>
                  </Flex>
                  <div>{website.description}</div>
                  <div>{website.tags}</div>
                  <Flex>
                    <Button>
                      <Link href={website.projectLink}>visit site</Link>
                      <IconWrapper>
                        <AiOutlineLink />
                      </IconWrapper>
                    </Button>
                    <Button>
                      <Link href={website.codeLink}>view code</Link>
                      <IconWrapper>
                        <AiFillGithub />
                      </IconWrapper>
                    </Button>
                  </Flex>
                </Sq>
              </span>
            ))}
        </PortfolioGrid>
        {/* ABOUT */}
        <Title id="about">About</Title>
        <About />
        {/* CONTACT */}
        <Title id="contact">Contact</Title>
        <Contact />
      </motion.div>
    </>
  );
};
export default Home;

export const getServerSideProps = async () => {
  const query = '*[_type == "websites"] | order(_createdAt asc)';
  const websites = await sanityClient.fetch(query);
  if (!websites.length) {
    return {
      props: {
        websites: [],
      },
    };
  } else {
    return {
      props: {
        websites,
      },
    };
  }
};
