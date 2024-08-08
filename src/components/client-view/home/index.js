"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaCode,
} from "react-icons/fa";
import Image from "next/image";
import aiImage from "../../../assets/ai-image.png";
import dynamic from "next/dynamic";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const socialIcons = [
  // {
  //   id: "facebook",
  //   icon: (
  //     <FaFacebookF
  //       color="#14cad0"
  //       className="w-[40px] h-[40px] "
  //     />
  //   ),
  // },
  // {
  //   id: "twitter",
  //   icon: (
  //     <FaTwitter color="#14cad0" className="w-[40px] h-[40px] " />
  //   ),
  // },
  {
    id: "linkedin",
    icon: <FaLinkedinIn color="#14cad0" className="w-[40px] h-[40px] " />,
  },
  // {
  //   id: "instagram",
  //   icon: (
  //     <FaInstagram
  //       color="#14cad0"
  //       className="w-[40px] h-[40px] "

  //     />
  //   ),
  // },
  {
    id: "code",
    icon: <FaCode color="#14cad0" className="w-[40px] h-[40px] " />,
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/your_facebook_username",
  twitter: "https://twitter.com/your_twitter_username",
  linkedin: "https://www.linkedin.com/in/pritamksharma",
  instagram: "https://www.instagram.com/your_instagram_username",
  code: "https://leetcode.com/78pritam44",
};

function ClientHomeView({ data }) {
  // console.log(data, "ClientHomeView");

  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <AnimationWrapper>
        <motion.div
          className={
            "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          }
          variants={setVariants}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
              {data && data.length
                ? data[0]?.heading.split(" ").map((item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className={`${
                        index === 3 || index === 4 || index === 5 || index === 6
                          ? "text-[#14cad0]"
                          : "text-[#000]"
                      }`}
                    >
                      {item}
                    </span>
                  ))
                : null}
            </h1>
            <p className="text-[#000] mt-4 mb-8 font-bold">
              {data && data.length ? data[0]?.summary : null}
            </p>
            <motion.div className="flex gap-3 cursor-pointer">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 4,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                >
                  <a
                    key={item.id}
                    href={socialLinks[item.id]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div ref={containerRef} className="flex w-full justify-end">
            <motion.div
              drag
              dragConstraints={containerRef}
              className="w-[400px] h-[400px] relative bg-[#14cad0]"
            >
              <div className="w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#000000] absolute"></div>
              <Image
                src={aiImage}
                alt="Profile Picture"
                layout="responsive"
                quality={100}
                height={300}
                width={300}
                className="absolute top-[-15px]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
export default dynamic(() => Promise.resolve(ClientHomeView), { ssr: false });
