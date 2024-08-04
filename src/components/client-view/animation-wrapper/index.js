"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

function AnimationWrapper({ children, className, ...props }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{ once: true, amount: "0.8" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default dynamic (() => Promise.resolve(AnimationWrapper), {ssr: false})
