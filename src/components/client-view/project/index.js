"use client";

import { useState, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

function ClientProjectView({ data }) {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const router = useRouter();

  // State to manage which tab is active (App, Web, or Other)
  const [activeTab, setActiveTab] = useState("apps");

  // Filter projects based on the active tab
  const filteredProjects = data?.filter((item) =>
    activeTab === "apps"
      ? item.name.toLowerCase().includes("app") // Show projects with 'App' in the name
      : activeTab === "web"
      ? item.name.toLowerCase().includes("web") // Show projects with 'Web' in the name
      : activeTab === "other"
      ? !item.name.toLowerCase().includes("app") && !item.name.toLowerCase().includes("web") // Show projects that don't have 'App' or 'Web' in the name
      : true
  );

  // Count projects in each category
  const totalProjects = data?.length || 0;
  const appProjects = data?.filter((item) => item.name.toLowerCase().includes("app")).length || 0;
  const webProjects = data?.filter((item) => item.name.toLowerCase().includes("web")).length || 0;
  const otherProjects = data?.filter((item) => !item.name.toLowerCase().includes("app") && !item.name.toLowerCase().includes("web")).length || 0;

  // Helper function to get the first three words of a project name
  const getFirstThreeWords = (name) => {
    const words = name.split(" "); // Split the name into words
    return words.slice(0, 3).join(" "); // Join the first three words and return
  };

  return (
    <div className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="project">
      <AnimationWrapper className={"py-6 sm:py-16"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"My Projects".split(" ").map((item, index) => (
              <span key={`word-${index}`} className={`${index === 1 ? "text-middle" : "text-primary"}`}>
                {item}{" "}
              </span>
            ))}
          </h1>
          <svg id="progress" width={100} height={100} viewBox="0 0 100 100">
            <circle cx={"50"} cy={"50"} r="30" pathLength={"1"} className="stroke-middle" />
            <motion.circle
              cx={"50"}
              cy={"50"}
              r="30"
              pathLength={"1"}
              className="stroke-primary"
              style={{ pathLength: scrollXProgress }}
            />
          </svg>
        </div>
      </AnimationWrapper>

      <div className="flex justify-center mb-6">
        {/* Tabs for Apps, Web, and Other */}
        <button
          onClick={() => setActiveTab("apps")}
          className={`py-2 px-6 mx-2 text-lg font-semibold rounded-tl-lg rounded-tr-lg transition-all ${
            activeTab === "apps" ? "bg-primary text-white" : "bg-secondary text-primary"
          }`}
        >
          Apps ({appProjects})
        </button>
        <button
          onClick={() => setActiveTab("web")}
          className={`py-2 px-6 mx-2 text-lg font-semibold rounded-tl-lg rounded-tr-lg transition-all ${
            activeTab === "web" ? "bg-primary text-white" : "bg-secondary text-primary"
          }`}
        >
          Web ({webProjects})
        </button>
        <button
          onClick={() => setActiveTab("other")}
          className={`py-2 px-6 mx-2 text-lg font-semibold rounded-tl-lg rounded-tr-lg transition-all ${
            activeTab === "other" ? "bg-primary text-white" : "bg-secondary text-primary"
          }`}
        >
          Other ({otherProjects})
        </button>
      </div>

      <div className="text-center mb-6">
        <p className="text-lg text-middle font-semibold">Total Projects: {totalProjects}</p>
      </div>

      <AnimationWrapper>
        <ul className="project-wrapper" ref={containerRef}>
          {filteredProjects && filteredProjects.length
            ? filteredProjects.map((item, index) => (
                <li className="w-full flex items-stretch cursor-pointer" key={item.id || index}>
                  <div className="border-2 w-full relative border-middle transition-all rounded-lg flex flex-col">
                    <div className="flex p-4 flex-col xl:flex-row w-full items-stretch xl:items-center">
                      <div className="flex order-2 xl:order-1">
                        <div className="flex flex-col">
                          {/* Show only the first three words of the project name */}
                          <h3 className="text-3xl text-middle font-extrabold">{getFirstThreeWords(item.name)}</h3>
                          <p className="text-sm mt-2 text-black-500 capitalize font-bold">
                            {item.createdAt.split("T")[0]}
                          </p>
                          <div className="grid gap-2 mt-5 grid-cols-2 h-full max-h-[200px] w-full">
                            {item?.technologies.split(",").map((techItem, techIndex) => (
                              <div className="w-full flex justify-start items-center" key={`${techItem.id}-${techIndex}`}>
                                <button className="whitespace-nowrap text-ellipsis overflow-hidden py-3 w-[120px] px-6 border-[2px] border-middle bg-primary text-middle font-semibold rounded-lg text-xs tracking-widest hover:border-[#426566] transition-all outline-none">
                                  {techItem}
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-full bottom-0 justify-center flex gap-2">
                      <button
                        onClick={() => router.push(item.website)}
                        className="p-2 text-white-500 font-semibold text-[14px] tracking-widest bg-middle transition-all outline-none"
                      >
                        Website
                      </button>
                      <button
                        onClick={() => router.push(item.github)}
                        className="p-2 text-white-500 font-semibold text-[14px] tracking-widest bg-middle transition-all outline-none"
                      >
                        Github
                      </button>
                    </div>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </AnimationWrapper>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ClientProjectView), { ssr: false });
