import Link from "next/link";
import Image from "next/image";
import Intro from "./Intro";
import {
  Header,
  HeaderItems,
  Logo,
  SmIcons,
  AboutImgWrapper,
  MobileIntro,
} from "./styles/header.styled";
import { Flex } from "./styles/flex.styled";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import JtPic from "../public/images/joshuatreeabout.jpg";
import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Header>
          <HeaderItems>
            <Logo>Photography Portfolio Template</Logo>
            <p>
              Hi there, Im Elsa. Im a web developer based in Joshua Tree, CA.
            </p>
            <SmIcons>
              <Link href="">
                <AiOutlineMail />
              </Link>
              <a href="https://linkedin.com/">
                <AiFillLinkedin />
              </a>
              <a href="https://instagram.com/">
                <AiOutlineInstagram />
              </a>
            </SmIcons>
          </HeaderItems>
          <MobileIntro>
            <Intro />
          </MobileIntro>
          <AboutImgWrapper>
            <Image
              className="portfolio-img"
              src={JtPic}
              alt="elsa hovey"
              layout="responsive"
            />
          </AboutImgWrapper>
        </Header>
      </motion.div>
    </>
  );
};

export default HeaderSection;
