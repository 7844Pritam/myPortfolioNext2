"use client";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

function ClientExperienceAndEducationView({ educationData, experienceData }) {
  // console.log(educationData, experienceData, "experienceData");

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="experience"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8  ">
        <div className="flex flex-col gap-5 ">
          <AnimationWrapper className={"py-6 sm:py-16 "}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1 ">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                {"My Experince".split(" ").map((item, index) => (
                  <span
                    key={index}
                    className={`${
                      index === 1 ? "text-middle" : "text-primary"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="flex w-full">
              <motion.div className="container">
                <Timeline position="right">
                  {experienceData && experienceData.length
                    ? experienceData.map((experienceItem, index) => (
                        <TimelineItem key={`experience-${index}`}>
                          <TimelineSeparator>
                            <TimelineDot className="bg-middle" />
                            <TimelineConnector className="bg-middle" />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div className="border-[2px] p-4 rounded-[8px] shadow-lg mt-[14px]  bg-primary ml-[16px]">
                              <p className="font-bold text-middle">
                                {experienceItem.duration}
                              </p>
                              <h3 className="font-extrabold mt-2 text-middle">
                                {experienceItem.company},{" "}
                                {experienceItem.location}
                              </h3>
                              <p className="font-extrabold mt-2 text-middle">
                                {experienceItem.position}
                              </p>
                              <p className="font-extralight mt-2 text-middle">
                                {experienceItem.jobprofile}
                              </p>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 sm:py-16"}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                {"My Education".split(" ").map((item, index) => (
                  <span
                    key={index}
                    className={`${
                      index === 1 ? "text-middle" : "text-primary"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="flex w-full">
              <motion.div className="container">
                <Timeline position="right">
                  {educationData && educationData.length
                    ? educationData.map((educationItem, index) => (
                        <TimelineItem key={`education-${index}`}>
                          <TimelineSeparator>
                            <TimelineDot className="bg-primary" />
                            <TimelineConnector className="bg-primary" />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div className="border-[2px] p-4 rounded-[8px]  shadow-lg bg-primary  mt-[14px] ml-[16px]">
                              <p className="font-bold text-middle">{educationItem.year}</p>
                              <h3 className="font-extrabold mt-2 text-middle">
                                {educationItem.college}
                              </h3>
                              <p className="font-extrabold mt-2 text-middle">
                                {educationItem.degree}
                              </p>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
}

export default dynamic(
  () => Promise.resolve(ClientExperienceAndEducationView),
  { ssr: false }
);
