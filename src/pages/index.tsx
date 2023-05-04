import NextImage from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useLayoutEffect, useRef } from "react";

import {
  Box,
  Heading,
  Text,
  Button,
  chakra,
  Stack,
  Flex,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import useSmoothHorizontalScroll from "use-smooth-horizontal-scroll";

import { useSideScroll } from "./useSideScroll";

import { NextSeo } from "next-seo";
import ImageBox from "../components/common/ImageBox";
import { useHorizontalScroll } from "../utils";

const array = new Array(9).fill("i");

const oneArray = [
  "#fafa6e",
  "#c4ec74",
  "#92dc7e",
  "#64c987",
  "#39b48e",
  "#089f8f",
  "#00898a",
  "#08737f",
];

const Home = () => {
  const { scrollContainerRef, handleScroll, scrollTo, isAtStart, isAtEnd } =
    useSmoothHorizontalScroll();

  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <>
      <NextSeo title="Home" />

      <Box
        as="section"
        maxW="1440px"
        py="4"
        px={[4, 6, 10, 14, 20]}
        mx="auto"
        display="flex"
        flexDir={{ base: "column-reverse", lg: "row" }}
        justifyContent={{ base: "center", lg: "space-between" }}
        alignItems="center"
        textAlign={{ base: "center", lg: "left" }}
      ></Box>
      <Stack spacing="12">
        <Marquee direction="left">
          {" "}
          <Flex gap="12">
            {oneArray?.map((item, index) => (
              <ImageBox bgColor={item} key={index} />
            ))}
          </Flex>
        </Marquee>

        <Marquee direction="right">
          <Flex gap="12">
            {oneArray?.map((item, index) => (
              <ImageBox bgColor={item} key={index} />
            ))}
          </Flex>
        </Marquee>

        <Marquee>
          <Flex gap="12">
            {oneArray?.map((item, index) => (
              <ImageBox bgColor={item} key={index} />
            ))}
          </Flex>
        </Marquee>

        <Box ref={slider}  maxW="75%" overflow="auto">
          <Flex gap="12">
            {oneArray?.map((item, index) => (
              <ImageBox bgColor={item} key={index} />
            ))}

            {oneArray?.map((item, index) => (
              <ImageBox bgColor={item} key={index} />
            ))}
          </Flex>
        </Box>
      </Stack>
    </>
  );
};

export default Home;
