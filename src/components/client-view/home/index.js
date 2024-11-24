"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaCode } from "react-icons/fa";
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
  {
    id: "facebook",
    icon: <FaFacebookF className="w-[40px] h-[40px] text-primary " />,
  },
  {
    id: "twitter",
    icon: <FaTwitter className="w-[40px] h-[40px] text-primary " />,
  },
  {
    id: "linkedin",
    icon: <FaLinkedinIn className="w-[40px] h-[40px] text-primary  " />,
  },
  {
    id: "instagram",
    icon: <FaInstagram className="w-[40px] h-[40px] text-primary  " />,
  },
  {
    id: "code",
    icon: <FaCode className="w-[40px] h-[40px] text-primary " />,
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
  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div className="max-w-screen-xl mx-auto mt-24 px-8 xl:px-16" id="home">
      <AnimationWrapper>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-8 py-6 sm:py-16"
          variants={setVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading Container */}
          <div className="flex flex-col w-full sm:w-1/2 justify-center items-start">
            <h1 className="mb-4 text-4xl lg:text-5xl xl:text-6xl font-medium leading-normal">
              <span className="text-middle font-bold animate-blinkColor ">
                {data[0].heading}
              </span>
            </h1>

            <p className="text-middle/60 text-2xl mt-4 mb-8 font-bold">
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

          {/* Image Container */}
          <motion.div
            ref={containerRef}
            className="relative bg-secondary w-full sm:w-1/2 justify-center p-4"
          >
            <motion.div
              drag
              dragConstraints={containerRef}
              className="relative w-full max-w-[500px] h-[500px] animate-border-run" // Keep the max-width and height as per your design
            >
              <Image
                src={aiImage}
                alt="Profile Picture"
                layout="fill"  // This ensures the image fills the parent container
                objectFit="contain"  // Ensure the whole image is visible, without cropping
                quality={100}
                className="object-contain inset-0"
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </AnimationWrapper>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ClientHomeView), { ssr: false });
